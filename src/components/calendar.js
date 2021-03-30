import React from 'react';
import { Markup } from 'interweave';
import axios from 'axios';
import clip from '../assets/img/link.png';
import breaking from '../assets/img/break.svg';
import chill from '../assets/img/chill.svg';

import TodayTimeTable from './todayTimeTable';
import TempExamTable from './TempExamTable';

import moment from 'moment';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevSub: '',
      currentSub: '',
      nextSub: '',
      time: Date.now(),
      calendar: [],
      week_is: '',
    };
  }

  componentDidMount() {
    var options = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false };
    var prnDt = new Date().toLocaleTimeString('en-us', options);
    const [weekday, nowTime] = prnDt.split(' ');

    const apiUrl = `/api/timetable/?day=${weekday}`;
    axios.get(apiUrl).then((resp) => {
      console.log(resp.data);
      if (resp.data.rows.length > 0) {
        this.setState({
          calendar: resp.data.rows,
          week_is: resp.data.week_is,
        });
      }
    });
  }

  componentDidUpdate() {
    let nowTime = moment(); //настоящее время

    let prevSub = '';
    let currentSub = '';
    let nextSub = [];
    let paraStart = [];
    let isIbeforeAll = true,
      firstPara = '';

    let calendar = this.state.calendar;
    if (calendar[0].flags !== 'weekend') {
      for (let i in calendar) {
        let startTime = moment(calendar[i].start, 'HH:mm'); //время начала пары
        let endTime = moment(startTime).add({ hours: 1, minutes: 25 }); //время окончания пары

        //Если пара прошла
        if (endTime.isBefore(nowTime)) {
          prevSub = {
            start: startTime.format('HH:mm'),
            end: endTime.format('HH:mm'),
            name: calendar[i].name,
            link: calendar[i].link,
          };

          isIbeforeAll = false;
        }
        //Если пара идет
        else if (startTime.isBefore(nowTime) && nowTime.isBefore(endTime)) {
          currentSub = {
            start: startTime.format('HH:mm'),
            end: endTime.format('HH:mm'),
            name:
              calendar[i].name +
              (calendar[i].link ? `<img src=${clip} width='15' style='margin-left: 5px;'>` : ''),
            link: calendar[i].link,
          };
          isIbeforeAll = false;
        }
        //Если пара будет
        else if (nowTime.isBefore(startTime)) {
          nextSub.push({
            start: startTime.format('HH:mm'),
            end: endTime.format('HH:mm'),
            name: calendar[i].name,
            link: calendar[i].link,
          });
          paraStart.push(startTime);

          if (isIbeforeAll && !firstPara) {
            // Если ни одной пары еще не было, берем во фьючер первую
            let startTimef = moment(calendar[0].start, 'HH:mm'); //время начала пары
            let endTimef = moment(startTimef).add({ hours: 1, minutes: 25 }); //время окончания пары
            firstPara = {
              startObj: startTimef,
              start: startTimef.format('HH:mm'),
              end: endTimef.format('HH:mm'),
              name: calendar[0].name,
              link: calendar[0].link,
            };
          }
        }
      }

      if (paraStart.length > 0) {
        var different = paraStart[0].diff(nowTime);
        if (firstPara) {
          var different = nowTime.diff(firstPara.startObj);
        }
      } else {
        var different = '';
      }

      let hours = different
        ? firstPara
          ? parseInt(Math.abs(Math.floor((different % 86400000) / 3600000))) - 1
          : Math.floor((different % 86400000) / 3600000)
        : ''; //Почему то показывает на час больше - костыляем
      let minutes = different
        ? Math.abs(Math.round(((different % 86400000) % 3600000) / 60000))
        : '';
      let result = minutes ? (hours ? hours + ' ч ' : '') + minutes + ' мин' : '—— - ——';

      setTimeout(() => {
        this.setState({
          prevSub: prevSub ? prevSub : '',
          currentSub: currentSub
            ? currentSub
            : {
                breaktime: result,
                name: `перерыв <img src=${breaking} width='20' style='margin-bottom:5px'>`,
              },
          nextSub: nextSub ? (firstPara ? firstPara : nextSub[0]) : '',
        });
      }, 1000);
    } else {
      //Если выходной
      setTimeout(() => {
        this.setState({
          currentSub: currentSub
            ? currentSub
            : {
                breaktime: '—— - ——',
                name: `выходной <img src=${chill} width='20' style='margin-bottom:5px; transform:scale(-1,1)'>`,
              },
        });
      }, 1000);
    }
  }

  render() {
    return (
      <div className="calendar-wrapper">
        {/*<TempExamTable /> */}
        <TodayTimeTable />

        <div className="calendar">
          {!this.state.currentSub && (
            <div
              style={{
                width: 'fit-content',
                margin: '0 auto',
              }}>
              Загрузка расписания...
            </div>
          )}
          {this.state.prevSub && (
            <div className="prevSub">
              <span className="time">
                {this.state.prevSub.start} - {this.state.prevSub.end}
              </span>

              <span className="name">{this.state.prevSub.name}</span>
            </div>
          )}
          {this.state.currentSub && (
            <div className="currentSub">
              <span className="time">
                {this.state.currentSub.start &&
                  `
              ${this.state.currentSub.start} - ${this.state.currentSub.end}`}
                {this.state.currentSub.breaktime && this.state.currentSub.breaktime}
              </span>
              <span className="name">
                {this.state.currentSub.link && (
                  <a href={this.state.currentSub.link} target="_blank">
                    <Markup
                      content={this.state.currentSub.name + `<span class="now">(сейчас)</span>`}
                    />{' '}
                  </a>
                )}

                {!this.state.currentSub.link && !this.state.currentSub.breaktime && (
                  <Markup
                    content={this.state.currentSub.name + `<span class="now">(сейчас)</span>`}
                  />
                )}
                {!this.state.currentSub.link && this.state.currentSub.breaktime && (
                  <Markup content={this.state.currentSub.name} />
                )}
              </span>
            </div>
          )}
          {this.state.nextSub && (
            <div className="nextSub">
              <span className="time">
                {this.state.nextSub.start} - {this.state.nextSub.end}
              </span>
              <span className="name">
                {this.state.nextSub.link && (
                  <a href={this.state.nextSub.link} target="_blank">
                    <Markup
                      content={
                        this.state.nextSub.name +
                        `<img src=${clip} alt="(есть ссылка)" width="15" style='margin-left:5px' />`
                      }
                    />
                  </a>
                )}
                {!this.state.nextSub.link && this.state.nextSub.name}
              </span>
            </div>
          )}

          {this.state.currentSub && (
            <div className="week_is">сейчас {this.state.week_is} неделя.</div>
          )}
        </div>
      </div>
    );
  }
}
