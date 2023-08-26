const loadJsonFromFile = require('./file');

function api(app) {
  app.get('/birds', (req, res) => {
    return loadJsonFromFile('birds').then(data => res.status(200).json(data));
  });
  app.get('/plants', (req, res) => {
    return loadJsonFromFile('plants').then(data => res.status(200).json(data));
  });
}

module.exports = api;