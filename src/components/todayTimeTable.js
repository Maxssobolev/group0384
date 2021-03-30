import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';

import axios from 'axios';

export default class TodayTimeTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      calendar: [],
      week: [
        {
          Mon: 'Понедельник',
          Tue: 'Вторник',
          Wed: 'Среда',
          Thu: 'Четверг',
          Fri: 'Пятница',
          Sat: 'Суббота',
        },
      ],
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  componentDidMount() {
    const apiUrl = `/api/timetable/?day=whole`;
    axios.get(apiUrl).then((resp) => {
      if (resp.data.length > 0) {
        this.setState({
          calendar: resp.data,
        });
      }
    });
  }

  render() {
    return (
      <>
        <Button id="viewWholeTimeTable-button" onClick={this.handleShow}>
          ?
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Расписание</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table
              className="daytimetable"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexFlow: 'column-reverse',
              }}>
              {this.state.calendar.map((i, index) => {
                let startTime = moment(this.state.calendar[index].start, 'HH:mm'); //время начала пары
                let endTime = moment(startTime).add({ hours: 1, minutes: 25 }); //время окончания пары
                let nextIndex = (index + 1) % this.state.calendar.length;
                let isWrap = false;

                if (this.state.calendar[index].weekday != this.state.calendar[nextIndex].weekday) {
                  isWrap = true;
                }

                if (this.state.calendar[index].weekday != 'Sun') {
                  return (
                    <>
                      <tr key={index}>
                        <td
                          style={{
                            paddingRight: '20px',
                          }}>
                          {this.state.calendar[index].start}-{endTime.format('HH:mm')}
                        </td>
                        <td>{this.state.calendar[index].name}</td>
                      </tr>
                      {isWrap && (
                        <tr key={index + 500}>
                          <td> {this.state.week[0][this.state.calendar[index].weekday]} </td>
                        </tr>
                      )}
                    </>
                  );
                }
              })}
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
