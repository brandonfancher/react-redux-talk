import '../css/globals.css';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import routes from '../routes';
// react-redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { dashboards } from '../redux/reducers';


// Set up redux store, and with redux dev tools extension support
let store = createStore(dashboards);
if (window.devToolsExtension) {
  store = window.devToolsExtension()(createStore)(dashboards);
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
