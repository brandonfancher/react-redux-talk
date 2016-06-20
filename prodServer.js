const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8000, 'localhost', err => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s.', 8000);
});
