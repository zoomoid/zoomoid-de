const express = require('express');
// const cors = require('cors');
const Entries = require('./api/Entries');
const app = express();
const morgan = require('morgan');
// app.use(cors());

app.use(morgan('tiny'));
app.use(express.static('./client/'));

app.get('/api/albums', (req, res) => {
  const html = Entries.Albums.reduce((p, c) => {
    return p + c.toString();
  }, '');
  res.send(html);
});
app.get('/api/singles', (req, res) => {
  const html = Entries.Singles.reduce((p, c) => {
    return p + c.toString();
  }, '');
  res.send(html);
});
const port = 3000;
app.listen(port, () => {
  console.log('http server started on port ' + port);
});
