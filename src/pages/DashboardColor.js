import React, { Component } from 'react';
import Color from '../components/Color';
import ColorHistory from '../components/ColorHistory';

export default class DashboardColor extends Component {
  constructor() {
    super();
    this.state = {
      colorEntries: [],
    };
  }

  render() {
    return (
      <section>
        <div>
          <h1>
            <p>Color Dashboard</p>
          </h1>
          <Color />
          <ColorHistory colorEntries={this.state.colorEntries} />
        </div>
      </section>
    );
  }
}
