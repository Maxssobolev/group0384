import React from 'react';
import axios from 'axios';
import viewIcon from '../assets/img/visibility.svg';

export default class ShowViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      views: 0,
    };
  }
  componentDidMount() {
    axios.get(`/post/views?table=${this.props.table}&id=${this.props.id}`).then((res) => {
      if (res.data.length > 0) {
        this.setState({ views: res.data[0].views });
      }
    });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1rem',
        }}>
        <img
          src={viewIcon}
          alt="просмотров:"
          width={20}
          style={{ opacity: '.6', margin: '0 3px 0 0' }}
        />
        {this.state.views}
      </div>
    );
  }
}
