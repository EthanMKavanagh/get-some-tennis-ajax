$(document).ready(onReady);

function onReady() {
    // load data from the server, put it on the DOM
    getPlayerData();
    getTournamentData();
}

// get player data from the server
function getPlayerData() {
    $.ajax({
        type: 'GET',
        url: '/tennisplayers'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let player = response[i];
            $('#playerTableBody').append(`
                <tr>
                    <td>${player.firstName}</td>
                    <td>${player.lastName}</td>
                    <td>${player.born}</td>
                </tr>
            `);
        }
    });
}

// get tournament data from the server
function getTournamentData() {
    $.ajax({
        type: 'GET',
        url: '/tournaments'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let tournament = response[i];
            $('#tournamentTableBody').append(`
                <tr>
                    <td>${tournament.name}</td>
                    <td>${tournament.location}</td>
                </tr>
            `);
        }
    });
}