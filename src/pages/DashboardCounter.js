import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actionCreators';
import Counter from '../components/Counter';
import CounterHistory from '../components/CounterHistory';

class DashboardCounter extends Component {

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

const mapStateToProps = (state) => ({
  count: state.count,
  countEntries: state.countEntries,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actions.setCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCounter);
