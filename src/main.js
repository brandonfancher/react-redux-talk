import 'babel-polyfill';
import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import attachFastClick from 'fastclick';
import { browserHistory as history } from 'react-router';

const rootEl = document.getElementById('root');
// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body);

// Expose globally
window.React = React;

let render = () => {
  const Root = require('./pages/Root').default;
  ReactDOM.render(
    <Root
      history={history}
    />,
    rootEl
  );
};

if (module.hot) {
  const renderApp = render;
  const renderError = (err) => {
    const RedBox = require('redbox-react');
    ReactDOM.render(
      <RedBox error={err} />,
      rootEl
    );
  };
  render = () => {
    try {
      renderApp();
    } catch (err) {
      renderError(err);
    }
  };
  module.hot.accept('./pages/Root', render);
}

render();
