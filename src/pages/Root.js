import '../css/globals.css';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import routes from '../routes';
// react-redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { dashboards } from '../redux/reducers';


// Set up redux store
const store = createStore(dashboards);

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
