const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./api');

const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(port, () => console.log('Resource server is running'));
app.use('/', express.static(path.join(__dirname, '../build')));
api(app);

const terminate = () => {
  console.log('\nShutting down...');
  process.exit(0);
}

process.on('SIGINT', terminate);
process.on('SIGTERM', ()=> server.close(terminate));