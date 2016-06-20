import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};
