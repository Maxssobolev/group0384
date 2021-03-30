import React from 'react';
import moment from 'moment';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class MainPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
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
      content: this.state.data,
      author: 'Максим',
      select: this.state.select ? this.state.select : '',
      date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      actual: moment(this.state.actual).format('YYYY-MM-DD HH:mm:ss'),
    };

    async function postData(data = {}) {
      const response = await fetch('/main_post/new', {
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
    return (
      <div className="main_post_create">
        <h2>Записи на главной</h2>

        <form onSubmit={this.handleSubmit} method="POST">
          <input
            type="text"
            onChange={this.handleInputChange}
            name="main_title"
            placeholder="Название"
          />

          <CKEditor
            editor={ClassicEditor}
            data={this.state.data}
            onChange={(event, editor) => {
              this.setState({
                data: editor.getData(),
              });
            }}
          />
          <p>
            Актуально до:
            <input type="datetime-local" name="actual" onChange={this.handleInputChange} />
          </p>

          <select name="select" onChange={this.handleInputChange}>
            <option value="none">Без лейбла</option>
            <option value="event">Событие</option>
            <option value="important">Важно!</option>
            <option value="useful">Полезно</option>
          </select>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
