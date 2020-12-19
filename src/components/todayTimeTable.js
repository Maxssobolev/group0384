import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';

export default function TodayTimeTable(props) {
  const calendar = props.timetable;

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(moment().isoWeek());

  return (
    <>
      <Button id="viewWholeTimeTable-button" onClick={handleShow}>
        ?
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Расписание на сегодня</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table id="daytimetable">
            {calendar.map((i, index) => {
              let startTime = moment(calendar[index].start, 'HH:mm'); //время начала пары
              let endTime = moment(startTime).add({ hours: 1, minutes: 25 }); //время окончания пары
              return (
                <tr key={index}>
                  <td
                    style={{
                      paddingRight: '20px',
                    }}>
                    {calendar[index].start}-{endTime.format('HH:mm')}
                  </td>
                  <td>{calendar[index].name}</td>
                </tr>
              );
            })}
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
