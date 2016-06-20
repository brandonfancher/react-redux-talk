import React, { Component, PropTypes } from 'react';
import Counter from '../components/Counter';
import CounterHistory from '../components/CounterHistory';

export default class DashboardCounter extends Component {

  render() {
    return (
      <section>
        <div>
          <h1>
            <p>Counter Dashboard</p>
          </h1>
          <Counter count={this.props.count} increment={this.props.increment} />
          <CounterHistory countEntries={this.props.countEntries} />
        </div>
      </section>
    );
  }
}

DashboardCounter.propTypes = {
  count: PropTypes.number,
  countEntries: PropTypes.array,
  increment: PropTypes.func,
};
