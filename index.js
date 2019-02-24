const express = require('express');
// const cors = require('cors');
const Entries = require('./api/Entries');
const app = express();
const morgan = require('morgan');
// app.use(cors());

app.use(morgan());
app.get('/', express.static('/client'));

app.get('/api/albums', (req, res) => {
  const html = (Entries.Albums.length > 0 
    ? Entries.Singles.reduce((p, c) => {
        return p + c.toString();
      })
    : ''
  );
  res.send(html);
});
app.get('/api/singles', (req, res) => {
  const html = (Entries.Singles.length > 0 
    ? Entries.Singles.reduce((p, c) => {
        return p + c.toString();
      })
    : ''
  );
  res.send(html);
});

app.listen('8080', () => {
  console.log('http server started on port 8080');
});