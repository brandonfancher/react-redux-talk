import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Header from '../components/Header';

export default class App extends Component {

  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.setColor = this.setColor.bind(this);
    this.state = {
      color: '#000',
      colorEntries: [],
      countEntries: [],
      count: 0,
    };
  }

  setColor(newColor) {
    this.setState({
      color: newColor.hex,
      colorEntries: [...this.state.colorEntries, { timeStamp: moment(), color: newColor.hex }],
    });
  }

  increment() {
    const newCount = this.state.count + 1;
    const oldCountEntries = this.state.countEntries;
    this.setState({
      count: newCount,
      countEntries: [...oldCountEntries, { timeStamp: moment(), count: newCount }],
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children && React.cloneElement(this.props.children, {
          color: this.state.color,
          colorEntries: this.state.colorEntries,
          countEntries: this.state.countEntries,
          count: this.state.count,
          increment: this.increment,
          setColor: this.setColor,
        })}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};
