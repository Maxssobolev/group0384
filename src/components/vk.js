import React from 'react';
import axios from 'axios';

export default class VK extends React.Component {
  logIn() {
    let appId = 7676166;
    axios.get(
      `https://oauth.vk.com/authorize?client_id=${appId}&display=page&redirect_uri=&scope=friends&response_type=token&v=5.52`,
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.logIn}>Auth VK</button>
      </div>
    );
  }
}
