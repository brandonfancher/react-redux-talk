import React, { PropTypes, Component } from 'react';

export default class CounterHistory extends Component {

  constructor() {
    super();
    this.renderHistoryList = this.renderHistoryList.bind(this);
  }

  renderHistoryList() {
    const countEntries = this.props.countEntries;
    const countList = countEntries.map((entry) => (
      <li key={`count-${entry.count}`}>
        <strong>Count:</strong> {entry.count} ----------
        <strong>Timestamp:</strong> {entry.timeStamp.format('MMMM DD, YYYY, h:mm:ss a')}
      </li>
    ));

    if (countEntries.length > 0) {
      return <ul>{countList}</ul>;
    }
    return <img src="https://i.imgflip.com/hh6d9.jpg" />;
  }

  render() {
    return (
      <div>
        <h1>Count History</h1>
        <p>Just to be clear, you should see a history of the counts below.</p>
        {this.renderHistoryList()}
      </div>
    );
  }
}

CounterHistory.propTypes = {
  countEntries: PropTypes.array.isRequired,
};
