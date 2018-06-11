const express = require('express');
const os = require('os');
const app = express();

var worldCup = require('./worldCupData.json');

    
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/getWorldCup', (req, res) => res.send(worldCup));

app.listen(8080, () => console.log('Listening on port 8080!'));
