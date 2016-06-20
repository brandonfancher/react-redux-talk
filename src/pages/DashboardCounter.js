import React, { Component } from 'react';
import moment from 'moment';
import Counter from '../components/Counter';
import CounterHistory from '../components/CounterHistory';

export default class DashboardCounter extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.state = {
      countEntries: [],
      count: 0,
    };
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
      <section>
        <div>
          <h1>
            <p>Counter Dashboard</p>
          </h1>
          <Counter count={this.state.count} increment={this.increment} />
          <CounterHistory countEntries={this.state.countEntries} />
        </div>
      </section>
    );
  }
}
