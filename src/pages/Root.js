import '../css/globals.css';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import routes from '../routes';
// react-redux imports
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { colorDashboard } from '../redux/colorReducer';
import { countDashboard } from '../redux/countReducer';


// Set up redux store, and with redux dev tools extension support
const persistedState = {
  countDashboard: {
    count: 2,
    countEntries: [
      {
        timeStamp: '2016-06-21T17:39:32.055Z',
        count: 1,
      },
      {
        timeStamp: '2016-06-21T17:39:34.237Z',
        count: 2,
      },
    ],
  },
};
const reducer = combineReducers({ colorDashboard, countDashboard });
let store = createStore(reducer, persistedState);
if (window.devToolsExtension) {
  store = window.devToolsExtension()(createStore)(reducer, persistedState);
}

const Root = ({ history }) =>
  <Provider store={store}>
    <Router
      children={routes}
      history={history}
    />
  </Provider>;

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Root;
