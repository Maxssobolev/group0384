import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function TempExamTable() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        id="viewWholeTimeTable-button"
        onClick={handleShow}
        style={{ background: '#d89f8e', outline: 'none', marginRight: '10px' }}>
        ?
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Расписание зачетов и КР:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="daytimetable">
            <tr>
              <td
                style={{
                  paddingRight: '20px',
                }}>
                28.12 11:35
              </td>
              <td>КР Программирование</td>
            </tr>
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
