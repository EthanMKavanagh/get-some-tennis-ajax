const express = require('express');
const tennisPlayersArray = require('./tennisplayers.js');
const tournamentsArray = require('./tournaments.js')
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

// Setup body parser to read request JSON body
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/tennisplayers', (req, res) => {
    res.send(tennisPlayersArray);
});

app.get('/tournaments', (req, res) => {
    res.send(tournamentsArray);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
