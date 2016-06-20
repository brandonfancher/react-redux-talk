import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <header>
        <div>
          <Link to="/">Home</Link> |&nbsp;
          <Link to="/counter">Counter Dashboard</Link> |&nbsp;
          <Link to="/color">Color Dashboard</Link>
        </div>
      </header>
    );
  }
}
