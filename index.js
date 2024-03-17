const express = require('express');
const routes = require('./routes');
require('./conf/config');
var bodyParser = require('body-parser')
const app = express();
const port = 3001;
app.use(bodyParser.json())

app.use('/',routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
