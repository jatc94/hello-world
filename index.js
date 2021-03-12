const express = require('express');
const bodyParser = require('body-parser');

// defining the Express app
const app = express();
const port = 3000;

const msgs =
  { msg: 'Hello, world (again)!' };


app.get('/', (req, res) => {
  res.send(msgs);
});

// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
