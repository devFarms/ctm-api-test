// Dependencies
var express = require('express');
var axios = require('axios');

var nbaKey = 'g25ry7vx8nyrw8rhag4ua3sn';
var tennisKey = '7fnqb3hqwjzsf5kvbwmqtc8u';

// Get the Current Date
var d = new Date();

var whatYear = d.getFullYear();

// Initialize Express
var app = express();

// List the games happening on a specified day
var nbaTeams = 'https://api.sportradar.us/nba/trial/v4/en/league/hierarchy.json?api_key=' + nbaKey;

axios.get(nbaTeams)
    .then(function(response){
        console.log("Eastern Conference, Southeast Division")
        console.log("-----------------------------------------")
        for (e = 0; e < response.data.conferences[0].divisions[0].teams.length; e++){
            console.log(response.data.conferences[0].divisions[0].teams[e].name + ', ID: ' + response.data.conferences[0].divisions[0].teams[e].id);
            }
        console.log("\n");
        console.log("Eastern Conference, Atlantic Division")
        console.log("-----------------------------------------")
        for (e = 0; e < response.data.conferences[0].divisions[1].teams.length; e++){
            console.log(response.data.conferences[0].divisions[1].teams[e].name + ', ID: ' + response.data.conferences[0].divisions[1].teams[e].id);
            }
        console.log("\n");
        console.log("Eastern Conference, Central Division")
        console.log("-----------------------------------------")
        for (e = 0; e < response.data.conferences[0].divisions[2].teams.length; e++){
            console.log(response.data.conferences[0].divisions[2].teams[e].name + ', ID: ' + response.data.conferences[0].divisions[2].teams[e].id);
            }
        console.log("\n");
        console.log("Western Conference, Northwest Division")
        console.log("-----------------------------------------")
        for (e = 0; e < response.data.conferences[1].divisions[0].teams.length; e++){
            console.log(response.data.conferences[1].divisions[0].teams[e].name + ', ID: ' + response.data.conferences[1].divisions[0].teams[e].id);
            }
        console.log("\n");
        console.log("Western Conference, Southwest Division")
        console.log("-----------------------------------------")
        for (e = 0; e < response.data.conferences[1].divisions[1].teams.length; e++){
            console.log(response.data.conferences[1].divisions[1].teams[e].name + ', ID: ' + response.data.conferences[1].divisions[1].teams[e].id);
            }
        console.log("\n");
        console.log("Western Conference, Pacific Division")
        console.log("-----------------------------------------")
        for (e = 0; e < response.data.conferences[1].divisions[2].teams.length; e++){
            console.log(response.data.conferences[1].divisions[2].teams[e].name + ', ID:' + response.data.conferences[1].divisions[2].teams[e].id);
            }
        console.log("\n");
        })
    .catch(function(error) {
        console.log(error);
    });

// List the games happening on a specified day
// var nbaGames = 'https://api.sportradar.us/nba/trial/v4/en/games/' + whatYear + '/03/08/schedule.json?api_key=' + nbaKey;

// axios.get(nbaGames)
//     .then(function(response){
//         console.log("Today's NBA games.");
//         for (i = 0; i < response.data.games.length; i++){
//             console.log(response.data.games[i].away.name + ' @ ' + response.data.games[i].home.name);
//             console.log('Venue: ' + response.data.games[i].venue.name + ', ' + response.data.games[i].venue.address + ', ' + response.data.games[i].venue.city + ', ' + response.data.games[i].venue.state);
//             console.log('Where to watch: Network ' + response.data.games[i].broadcast.network + ' and Satellite ' + response.data.games[i].broadcast.satellite);
//             console.log('\n');
//             }
//         })
//     .catch(function(error) {
//         console.log(error);
//     });

// List the games happening on a specified day
// var tennisGames = 'https://api.sportradar.com/tennis-t2/en/schedules/' + whatYear + '-03-07/schedule.json?api_key=' + tennisKey;

// axios.get(tennisGames)
//     .then(function(response){
//         console.log("Today's Tennis games.");
//         for (j = 1; j < response.data.sport_events.length; j++){
//             console.log(response.data.sport_events[j].tournament.name);
//             console.log(response.data.sport_events[j].competitors[0].name);
//             console.log(response.data.sport_events[j].competitors[1].name);
//             console.log('\n');
//             }
//         })
//     .catch(function(error) {
//         console.log(error);
//     });

// console.log(d.getMonth() + 1);
// console.log(d.getDate());

// Set the app to listen on port 3000
app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function(){
    console.log("Server started on port " +app.get("port"))
});