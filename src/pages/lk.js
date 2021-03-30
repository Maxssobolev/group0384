import React from 'react';
import { cookies } from '../index.js';
import axios from 'axios';
import { Button, InputGroup, FormControl, Alert } from 'react-bootstrap';

export default class Lk extends React.Component {
  constructor(props) {
    super(props);
    this.userData = cookies.get('userData');
    this.servermessage = React.createRef();
    this.state = {
      db: [],
      user_name_input: '',
      git_input: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const apiUrl = `/users/get?id=${this.userData.id}`;
    axios.get(apiUrl).then((resp) => {
      if (resp.data.length > 0) {
        this.setState({
          db: resp.data[0],
          user_name_input: resp.data[0].username,
          git_input: resp.data[0].github,
        });
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const sended_data = {
      id: this.userData.id,
      username: this.state.user_name_input,
      github: this.state.git_input,
    };

    async function postData(data = {}) {
      const response = await fetch('/users/post', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    }

    postData(sended_data).then(() => {
      this.servermessage.current.style.display = 'block';

      setTimeout(() => {
        this.servermessage.current.style.display = 'none';
      }, 2500);
    });
  }

  render() {
    return (
      <div className="page page-user">
        <h3>Привет, {this.userData.first_name}</h3>
        <div className="personal">
          <div className="info">
            <img src={this.userData.photos} alt="your photo" />
          </div>
          <div className="options">
            <div ref={this.servermessage} style={{ display: 'none' }}>
              <Alert variant="success">Данные обновлены!</Alert>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>ФИО</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={this.state.user_name_input}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  this.setState({
                    user_name_input: e.target.value,
                  });
                }}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.handleSubmit}>
                  Применить
                </Button>
              </InputGroup.Append>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>GitHub</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={this.state.git_input}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  this.setState({
                    git_input: e.target.value,
                  });
                }}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.handleSubmit}>
                  Применить
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}
