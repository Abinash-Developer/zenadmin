const express = require('express');
require('./conf/config')
const routes = require('./routes');
var bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json())

app.use('/',routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
