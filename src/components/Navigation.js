import React from 'react';
import { NavLink } from 'react-router-dom';
import burgerMenu from '../assets/img/menu.svg';
import exitIcon from '../assets/img/exit.svg';
import { abort } from 'process';
import hat from '../assets/img/hat.png';

import Login from './user-utils/Login';

const navLinks = [
  {
    title: 'главная',
    path: '/home',
  },
  {
    title: 'предметы',
    path: '/directions',
  },
  {
    title: 'домашка',
    path: '/hw',
  },
  {
    title: 'прочее',
    path: '/other',
  },
];

const width = window.innerWidth;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 2, mobileMenu: false };
  }
  componentWillMount() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div className="nav-wrapper">
        {/*
        |^|  need - style={{ position: 'relative' }}
        TEMP FOR NY 
        <div id="ng_hat">
          <img src={hat} alt="" width={75} />
        </div>  */}
        <nav className="site-navigation">
          <span> #0384</span>
          {this.state.width <= 991 && (
            <div
              onClick={() => {
                this.setState({ mobileMenu: true });
              }}>
              <img src={burgerMenu} alt="" width={48} style={{ marginRight: '20px' }} />
            </div>
          )}
          {this.state.width > 991 && (
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} activeClassName="menu_active">
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
        {this.state.width <= 991 && this.state.mobileMenu && (
          <div
            className="mobile-menu-wrapper"
            onClick={() => {
              this.setState({ mobileMenu: false });
            }}>
            <div>
              <img
                src={exitIcon}
                alt=""
                width={30}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '70px',
                }}
              />
            </div>

            <ul className="mobile-menu">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} activeClassName="menu_active">
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="login-wrapper">
          <Login
            handleLogin={this.props.handleLogin}
            isFetching={this.props.isFetching}
            userData={this.props.userData}
          />
        </div>
      </div>
    );
  }
}
