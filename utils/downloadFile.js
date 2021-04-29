const fs = require('fs');
const https = require('https');

module.exports = {
  downloadFile: (url, callback) => {
    const fileName = url.split("/")[url.split("/").length - 1];
    https.get(url, (res) => {
      const path = `./assets/${fileName}`;
      const filePath = fs.createWriteStream(path);
      res.pipe(filePath);
      filePath.on('finish', () => {
        filePath.close();
        callback(path);
      })
    })
  }
}