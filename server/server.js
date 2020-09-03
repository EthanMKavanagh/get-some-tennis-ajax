const express = require('express');
const tennisPlayersArray = require('./tennisplayers.js');
const tournamentsArray = require('./tournaments.js');
const bodyParser = require('body-parser');
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


// App Post for Tennis Players:
app.post(`/tennisplayers`, function (req, res) {
    console.log('New Players:', req.body);
    let newPlayer = req.body;

    tennisPlayersArray.push(newPlayer);
    res.send(newPlayer);
}) // end POST

// App Post for Tennis Tournaments
app.post(`/tournaments`, function (req, res) {
    console.log('New Tournament:', req.body);
    let newTournament = req.body;
    tournamentsArray.push(newTournament);
    res.send(newTournament);
}); // end POST


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});


