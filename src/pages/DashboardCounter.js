import React, { Component } from 'react';
import Counter from '../components/Counter';
import CounterHistory from '../components/CounterHistory';

export default class DashboardCounter extends Component {
  constructor() {
    super();
    this.state = {
      countEntries: [],
    };
  }

  render() {
    return (
      <section>
        <div>
          <h1>
            <p>Counter Dashboard</p>
          </h1>
          <Counter />
          <CounterHistory countEntries={this.state.countEntries} />
        </div>
      </section>
    );
  }
}
