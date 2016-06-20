import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  render() {
    const count = this.props.count;

    return (
      <div>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <button onClick={this.props.increment}>
          Increment
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};
