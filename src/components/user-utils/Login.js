import React from 'react';
import loginIcon from '../../assets/img/login.svg';
import lkIcon from '../../assets/img/authed.svg';
import loadIcon from '../../assets/img/refresh.svg';
import { Link } from 'react-router-dom';

import { cookies } from '../../index.js';

export default class Login extends React.Component {
  render() {
    const { userData, error, isFetching } = this.props;

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return (
        <div className="loadIcon">
          <img
            src={loadIcon}
            width={55}
            alt="loading"
            style={{
              opacity: '0.65',
            }}
          />
        </div>
      );
    }

    if (cookies.get('userData') || userData.id) {
      let user = cookies.get('userData') ? cookies.get('userData') : userData;
      return (
        <Link
          to={{
            pathname: `/lk`,
          }}
          style={{
            padding: '0 0 0 12px',
          }}>
          <img
            src={lkIcon}
            width={65}
            alt="Lk"
            style={{
              opacity: '0.65',
            }}
          />
        </Link>
      );
    } else {
      return (
        <div
          style={{
            padding: '0 0 0 12px',
          }}
          onClick={this.props.handleLogin}>
          <img
            src={loginIcon}
            width={65}
            alt="LoginVK"
            style={{
              opacity: '0.65',
            }}
          />
        </div>
      );
    }
  }
}
