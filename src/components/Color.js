import React, { Component } from 'react';
import ColorPicker from 'react-color';

export default class Color extends Component {

  constructor() {
    super();
    this.setColor = this.setColor.bind(this);
    this.state = {
      color: '#000',
    };
  }

  setColor(newColor) {
    this.setState({
      color: newColor.hex,
    });
  }

  render() {
    const color = this.state.color;

    return (
      <div>
        <h1>Color: <span style={{ color }}>{color}</span></h1>
        <p>Change the color!</p>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            <ColorPicker
              color={color}
              onChangeComplete={this.setColor}
              type="sketch"
            />
          </div>
        </div>
      </div>
    );
  }
}
