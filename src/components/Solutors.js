import React from 'react';
import axios from 'axios';

export default class Solutors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios.get(`/hw/get_solutors?hw_id=${this.props.hw_id}`).then((resp) => {
      if (resp.data.length > 0) {
        this.setState({ people: resp.data });
      }
    });
  }

  render() {
    if (this.state.people.length > 0) {
      return this.state.people.map((res, index) => {
        return <img src={res.photo} alt="photo" key={index} width={55} height={55} />;
      });
    } else {
      return '';
    }
  }
}
