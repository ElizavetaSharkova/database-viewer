import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';


class Header extends Component {

  render() {
    return (
      <div className="App-header col-xs-12-12">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Header;