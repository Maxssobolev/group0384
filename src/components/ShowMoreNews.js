import React from 'react';
import moment from 'moment';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';

import RemainTime from '../assets/img/remain_time.png';

export default class ShowMoreNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showed: false,
      error: null,
      isLoaded: false,
      posts: [],
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    fetch('/api/home?whole=yes')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
            showed: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;

    if (!this.state.showed) {
      return (
        <div className="showMoreBtn" onClick={this.showMore}>
          Предыдущие
          <br />
          записи
        </div>
      );
    } else if (error) {
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
        <>
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
        </>
      );
    }
  }
}
