const express = require('express');

const app = express();

app.get('/app', (req, res) => {
    console.log("I am a log served by node.js inside linux alpine using Docker");
    res.send('I am served by node.js inside linux alpine using Docker');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
