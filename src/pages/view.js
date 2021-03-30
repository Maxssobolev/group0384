import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Markup } from 'interweave';
import moment from 'moment';
import 'moment/locale/ru';
import { Button } from 'react-bootstrap';
import { cookies } from '../index.js';
import axios from 'axios';
import { Solutors } from '../components/Solutors';
import ShowViews from '../components/showViews.js';

export default function View(props) {
  const location = useLocation();
  const post = location.state.res;
  const userData = cookies.get('userData');

  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (location.state.type == 'hw') {
      axios.get(`/hw/inner?id=${post.id}`);
      axios.get(`/hw/solutors_list?hw_id=${post.id}`).then((r) => {
        if (r.data.length > 0) {
          setPeople(r.data);
        }
      });
    } else if (location.state.type == 'post') {
      axios.get(`/home/inner?id=${post.id}`);
    }
  }, []);

  return (
    <div className="page page-view">
      <div className="title">{post.title}</div>
      <div className="date">
        {moment(post.date).format('lll')}
        <br />
        <ShowViews table={location.state.table} id={post.id} />
      </div>
      <div className="content">{<Markup content={post.content} />}</div>
      <div className="footer">
        {people.length == 0 && location.state.type == 'hw' && (
          <>
            <hr />
            <div className="footer__message">Еще никто не сделал это задание</div>
            <hr />
          </>
        )}
        {people.length > 0 && location.state.type == 'hw' && (
          <>
            <hr />
            <div className="footer__message">Люди, выполнившие задание:</div>
            <hr />
            <div className="solutors">
              {people.length > 0 &&
                people.map((res, index) => (
                  <a href={`https://vk.com/id${res.vk_id}`} target="_blank">
                    <img src={res.photo} alt="photo" key={index} width={55} height={55} />
                  </a>
                ))}
            </div>
          </>
        )}
      </div>

      {location.state.type == 'hw' && userData != undefined && (
        <>
          <Button
            variant="success"
            style={{ width: '100%', marginTop: '40px' }}
            onClick={() => {
              axios.get(`/hw/checkit?vk_id=${userData.id}&hw_id=${post.id}`);
            }}>
            Я сделал это задание
          </Button>
        </>
      )}
    </div>
  );
}
