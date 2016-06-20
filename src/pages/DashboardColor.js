import React, { Component } from 'react';
import Color from '../components/Color';
import ColorHistory from '../components/ColorHistory';
import moment from 'moment';

export default class DashboardColor extends Component {
  constructor() {
    super();
    this.setColor = this.setColor.bind(this);
    this.state = {
      color: '#000',
      colorEntries: [],
    };
  }

  setColor(newColor) {
    this.setState({
      color: newColor.hex,
      colorEntries: [...this.state.colorEntries, { timeStamp: moment(), color: newColor.hex }],
    });
  }

  render() {
    return (
      <section>
        <div>
          <h1>
            <p>Color Dashboard</p>
          </h1>
          <Color color={this.state.color} setColor={this.setColor} />
          <ColorHistory colorEntries={this.state.colorEntries} />
        </div>
      </section>
    );
  }
}
