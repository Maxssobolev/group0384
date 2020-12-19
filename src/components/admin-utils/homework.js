import React from 'react';
import moment from 'moment';
import CKEditor from 'ckeditor4-react';

export default class HomeWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      subject: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onEditorChange(evt) {
    this.setState({
      data: evt.editor.getData(),
    });
  }

  handleChange(changeEvent) {
    this.setState({
      data: changeEvent.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const sended_data = {
      title: this.state.main_title,
      subject: parseInt(this.state.subject),
      content: this.state.data,
      date: moment(new Date()).subtract({ hours: 1 }).format('YYYY-MM-DD HH:mm:ss'),
      deadline: moment(this.state.deadline).format('YYYY-MM-DD HH:mm:ss'),
    };

    async function postData(data = {}) {
      const response = await fetch('/homework/new', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    }

    postData(sended_data);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    console.log(this.state.subject);
    return (
      <div className="homework_create">
        <h2>Домашняя работа</h2>

        <form onSubmit={this.handleSubmit} method="POST">
          <select name="subject" onChange={this.handleInputChange}>
            <option value="1" defaultValue>
              Программирование
            </option>
            <option value="2">Информатика</option>
            <option value="3">Физика</option>
            <option value="4">Мат. анализ</option>
            <option value="5">АиГ</option>
            <option value="6">Философия</option>
          </select>

          <input
            type="text"
            onChange={this.handleInputChange}
            name="main_title"
            placeholder="Название"
          />
          <CKEditor data={this.state.data} onChange={this.onEditorChange} />
          <p>
            Дедлайн:
            <input type="datetime-local" name="deadline" onChange={this.handleInputChange} />
          </p>

          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
