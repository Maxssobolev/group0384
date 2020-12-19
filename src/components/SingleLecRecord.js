import React from 'react';
import { Col } from 'react-bootstrap';

import clip from '../assets/img/enlace.svg';
import moment from 'moment';
import 'moment/locale/ru';

export default function SingleLecRecord(props) {
  const res = props.lec;
  if (res.type === 'youtube') {
    //В Бд нужно только ID видео на youtube
    return (
      <Col>
        <div className="lec_title">{res.title}</div>
        <iframe
          style={{ maxWidth: '100%' }}
          src={`https://www.youtube.com/embed/${res.content}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}></iframe>
        <div className="info-block__date">{moment(res.date).locale('ru').format('ll')}</div>
      </Col>
    );
  } else if (res.type === 'onserver') {
    return (
      <Col>
        <div className="lec_title">{res.title}</div>
        <video>
          <source src={res.content} />
        </video>
        <div className="info-block__date">{moment(res.date).locale('ru').format('ll')}</div>
      </Col>
    );
  } else if (res.type === 'link') {
    return (
      <Col>
        <div className="lec_title">{res.title}</div>
        <div>
          <a href={res.content} target="_blank">
            <img src={clip} width="20" /> Доступ по ссылке
          </a>
        </div>
        <div className="info-block__date">{moment(res.date).locale('ru').format('ll')}</div>
      </Col>
    );
  } else if (res.type === 'frame') {
    //В Бд нужно только путь из src фрейма вставить
    return (
      <Col>
        <div className="lec_title">{res.title}</div>
        <iframe width={250} src={res.content} allowFullScreen={true}></iframe>
        <div className="info-block__date">{moment(res.date).locale('ru').format('ll')}</div>
      </Col>
    );
  }
}
