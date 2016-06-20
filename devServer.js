const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const historyApiFallback = require('connect-history-api-fallback');

const app = express();

const compiler = webpack(config);

const wpDevMiddleaware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
});

app.use(wpDevMiddleaware);

app.use(historyApiFallback());

// https://github.com/webpack/webpack-dev-middleware/pull/44
app.use(wpDevMiddleaware);

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(config._hotPort, 'localhost', err => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s', config._hotPort);
});
