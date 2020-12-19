import React from 'react';
import { Container } from 'react-bootstrap';
import { Markup } from 'interweave';

import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

import RemainTime from '../assets/img/remain_time.png';

import calendarIcon from '../assets/img/calendar.svg';

import alertSound from '../assets/sounds/alert.mp3';
import fileImg from '../assets/img/file.svg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(alertSound);

    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      postLastId: '',
      toChange: '',
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate() {
    setTimeout(() => {
      fetch('/api/home')
        .then((res) => res.json())
        .then(
          (result) => {
            if (result[0].id != this.state.postLastId) {
              document.title = 'NEW|#0384';
              this.setState({
                postLastId: result[0].id,
                isLoaded: true,
                posts: result,
                toChange: {
                  id: result[0].id,
                },
              });
            } else {
              this.setState({
                isLoaded: true,
                posts: result,
              });
            }
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          },
        );
      if (document.title == 'NEW|#0384') {
        this.audio.play();
        setTimeout(() => {
          this.audio.pause();
          document.title = '#0384';
        }, 1350);
      }
    }, 1000 * 60);
  }
  componentDidMount() {
    fetch('/api/home')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
            postLastId: result[0].id,
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  handleDelete(id, tableName, title) {
    const sended_data = {
      id_toDelete: id,
      table: tableName,
    };

    let proof = window.confirm('Удалить запись ' + title);

    async function postData(data = {}) {
      const response = await fetch('/delete', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    }
    if (proof) {
      postData(sended_data);
    }

    proof = false;
  }

  render() {
    const { error, isLoaded, posts } = this.state;

    const regex = /\b(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?\b/gi;

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div
          style={{
            width: 'fit-content',
            margin: '0 auto',
          }}>
          Загрузка...
        </div>
      );
    } else {
      return (
        <div className="page page-home">
          {posts.map((res, index) => {
            let stylemap = {};
            if (this.state.toChange && this.state.toChange.id == res.id) {
              stylemap = {
                boxShadow: '0 0 14px 0px green',
                transition: '.7s',
              };
            }

            let the_label = '';
            switch (res.label) {
              case 'event':
                the_label = '<span class=" new-label new-label_event">Событие</span>';
                break;
              case 'important':
                the_label = '<span class=" new-label new-label_important">Важно!</span>';
                break;
              case 'useful':
                the_label = '<span class=" new-label new-label_useful">Полезно</span>';
                break;
              default:
                the_label = '';
            }

            let actual_date = res.actual ? moment(res.actual).format('D MMM HH:mm') : '';
            let remain_time = '';
            if (moment(res.actual).isAfter(moment())) {
              let remain_actual_time = moment(res.actual).diff(moment(), 'hours');
              remain_time =
                Math.floor(remain_actual_time / 24) > 0
                  ? Math.floor(remain_actual_time / 24) +
                    'д ' +
                    (remain_actual_time - 24 * Math.floor(remain_actual_time / 24)) +
                    'ч'
                  : remain_actual_time - 24 * Math.floor(remain_actual_time / 24) + 'ч';
            }
            remain_time = remain_time ? remain_time : '∞';

            return (
              <div
                key={index}
                {...(moment(res.actual).isBefore(moment())
                  ? {
                      style: {
                        order: `${100 + index}`,
                        opacity: '.65',
                      },
                    }
                  : {})}>
                {window.location.search == '?edit' && (
                  <div onClick={() => this.handleDelete(res.id, 'news', res.title)}>
                    УДАЛИТЬ ЗАПИСЬ
                  </div>
                )}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}>
                  {<Markup content={the_label} />}
                  <div
                    style={{
                      fontSize: '0.75em',
                      color: '#afafaf',
                      opacity: '.9',
                      marginRight: '1px',
                      marginBottom: '2px',
                    }}>
                    <img src={RemainTime} alt="" /> {remain_time}
                  </div>
                </div>
                <Link
                  to={{
                    pathname: `/view`,
                    state: { res },
                  }}
                  className="info-block"
                  style={stylemap}
                  {...(moment(res.actual).isAfter(moment())
                    ? {
                        onMouseOver: (e) => {
                          e.currentTarget.style.boxShadow = '1px 1px 3px grey';
                        },
                      }
                    : {})}
                  {...(moment(res.actual).isBefore(moment())
                    ? {
                        style: {
                          boxShadow: 'none',
                          border: '1px solid #dee2e6',
                        },
                      }
                    : {})}>
                  <span className="info-block__title">{res.title}</span>
                  <span className="info-block__content">
                    <Markup
                      content={
                        res.content.length > 100
                          ? res.content.substring(0, 100) + '...'
                          : res.content
                      }
                    />
                  </span>
                  <span className="info-block__date">
                    <div>{moment(res.date).locale('ru').format('lll')}</div>
                    <div>
                      {actual_date &&
                        moment(res.actual).isAfter(moment()) &&
                        'актуально до ' + actual_date}

                      {actual_date &&
                        moment(res.actual).isBefore(moment()) &&
                        'прошло ' + actual_date}
                    </div>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
