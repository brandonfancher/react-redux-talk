import React, { Component, PropTypes } from 'react';
import ColorPicker from 'react-color';

export default class Color extends Component {

  render() {
    const color = this.props.color;

    return (
      <div>
        <h1>Color: <span style={{ color }}>{color}</span></h1>
        <p>Change the color!</p>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            <ColorPicker
              color={color}
              onChangeComplete={this.props.setColor}
              type="sketch"
            />
          </div>
        </div>
      </div>
    );
  }
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};
