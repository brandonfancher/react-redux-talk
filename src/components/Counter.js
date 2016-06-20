import React, { Component } from 'react';

export default class Counter extends Component {

  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const count = this.state.counter;

    return (
      <div>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
