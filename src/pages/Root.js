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
const reducer = combineReducers({ colorDashboard, countDashboard });
let store = createStore(reducer);
if (window.devToolsExtension) {
  store = window.devToolsExtension()(createStore)(reducer);
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
