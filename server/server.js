const express = require('express');
const tennisPlayersArray = require('./players.js');
const tournamentsArray = require('./tournaments.js')
const app = express();
const PORT = 5000;

=

app.use(express.static('server/public'));

app.get('/players', (req, res) => {
    res.send(tennisPlayersArray);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});