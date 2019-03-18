const express = require('express');
// const cors = require('cors');
const app = express();
const morgan = require('morgan');
// app.use(cors());

app.use(morgan('tiny'));
app.use(express.static('./client/'));

const port = 3000;
app.listen(port, () => {
  console.log('http server started on port ' + port);
});
