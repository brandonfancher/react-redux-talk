import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actionCreators';
import Color from '../components/Color';
import ColorHistory from '../components/ColorHistory';

class DashboardColor extends Component {

  render() {
    return (
      <section>
        <div>
          <h1>
            <p>Color Dashboard</p>
          </h1>
          <Color color={this.props.color} setColor={this.props.setColor} />
          <ColorHistory colorEntries={this.props.colorEntries} />
        </div>
      </section>
    );
  }
}

DashboardColor.propTypes = {
  color: PropTypes.string,
  colorEntries: PropTypes.array,
  setColor: PropTypes.func,
};

const mapStateToProps = (state) => ({
  color: state.color,
  colorEntries: state.colorEntries,
});

const mapDispatchToProps = (dispatch) => ({
  setColor: (color) => dispatch(actions.setColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardColor);
