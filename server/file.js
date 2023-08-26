const path = require('path');
const fs = require('fs');

const getFullPath = (fileName) => `resources/${fileName}.json`;

const loadJsonFromFile = (fileName) => {
  return new Promise((resolve, reject) => {
    const filePath = path.resolve(__dirname, getFullPath(fileName));
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(JSON.parse(data));
    });
  });
}

module.exports = loadJsonFromFile;