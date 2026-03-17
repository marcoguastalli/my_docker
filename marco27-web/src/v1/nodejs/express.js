'use strict';

const express = require('express');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/releasenotes', (req, res) => {
  let jsonResponse = {};
  jsonResponse.release = "release";
  jsonResponse.properties = {version : '1.0.0'};
  //res.send('marco27-web-nodejs');
  res.json(jsonResponse);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);