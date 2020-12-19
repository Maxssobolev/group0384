import React from 'react';
import axios from 'axios';
export default class Teachers extends React.Component {
  constructor(props) {
    super(props);
    this.subject_id = this.props.subject_id;

    this.state = {
      open: false,
      teachers: [],
    };
  }
  componentDidMount() {
    const apiUrl4 = `/api/teachers/?id=${this.subject_id}`;
    axios.get(apiUrl4).then((resp) => {
      if (resp.data.length > 0) {
        this.setState({ teachers: resp.data });
      }
    });
  }

  render() {
    return (
      <>
        {this.state.teachers && (
          <div className="page-subdirect__teacher">
            Контакты преподавателей:
            <ol>
              {this.state.teachers.map((person, i) => (
                <li key={i}>
                  {person.name} <span>{person.contact}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </>
    );
  }
}
