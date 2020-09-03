$(document).ready(onReady);

function onReady() {
    // load data from the server, put it on the DOM

    getTournamentData();
    $(document).on('click', '#submitBtn', onSubmit);
    getPlayerData();
}
let newTournament;


function onSubmit() {
    let newPlayer = {
        firstName: $("#firstNameIn").val(),
        lastName: $("#lastNameIn").val(),
        born: $("#bornIn").val(),
    };
    console.log("New activity object", newPlayer);
    $('#playerTableBody').empty();
    $.ajax({
        url: "/tennisplayers",
        method: "POST",
        data: newPlayer
    })
        .then(function (response) {
            console.log("New player!", response);
            getPlayerData();
        })
        .catch(function (errorInfo) {
            alert("Uh oh!", errorInfo);
        });
    $("#firstNameIn").val('')
    $("#lastNameIn").val('')
    $("#bornIn").val('')
}

// get player data from the server
function getPlayerData() {
    $.ajax({
        type: 'GET',
        url: '/tennisplayers'
    }).then(function (response) {
        // append data to the DOM
        //$('#playerTableBody').empty();
        //$('#playerTableBody').val('');
        //$('#playerTableBody').empty();

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

    $.ajax({
        url: "/tournaments",
        method: "POST",
        data: newTournament
    })
        .then(function (response) {
            console.log("New tournament!", response);
        })
        .catch(function (errorInfo) {
            alert("Uh oh!", errorInfo);
        });
}





