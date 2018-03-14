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
        for (var e = 0; e < response.data.conferences[0].divisions[0].teams.length; e++){
            console.log(response.data.conferences[0].divisions[0].teams[e].name + ', ID: ' + response.data.conferences[0].divisions[0].teams[e].id);
            }
        console.log("\n");
        console.log("Eastern Conference, Atlantic Division")
        console.log("-----------------------------------------")
        for (var f = 0; f < response.data.conferences[0].divisions[1].teams.length; f++){
            console.log(response.data.conferences[0].divisions[1].teams[f].name + ', ID: ' + response.data.conferences[0].divisions[1].teams[f].id);
            }
        console.log("\n");
        console.log("Eastern Conference, Central Division")
        console.log("-----------------------------------------")
        for (var g = 0; g < response.data.conferences[0].divisions[2].teams.length; g++){
            console.log(response.data.conferences[0].divisions[2].teams[g].name + ', ID: ' + response.data.conferences[0].divisions[2].teams[g].id);
            }
        console.log("\n");
        console.log("Western Conference, Northwest Division")
        console.log("-----------------------------------------")
        for (var h = 0; h < response.data.conferences[1].divisions[0].teams.length; h++){
            console.log(response.data.conferences[1].divisions[0].teams[h].name + ', ID: ' + response.data.conferences[1].divisions[0].teams[h].id);
            }
        console.log("\n");
        console.log("Western Conference, Southwest Division")
        console.log("-----------------------------------------")
        for (var i = 0; i < response.data.conferences[1].divisions[1].teams.length; i++){
            console.log(response.data.conferences[1].divisions[1].teams[i].name + ', ID: ' + response.data.conferences[1].divisions[1].teams[i].id);
            }
        console.log("\n");
        console.log("Western Conference, Pacific Division")
        console.log("-----------------------------------------")
        for (var j = 0; j < response.data.conferences[1].divisions[2].teams.length; j++){
            console.log(response.data.conferences[1].divisions[2].teams[j].name + ', ID:' + response.data.conferences[1].divisions[2].teams[j].id);
            }
        console.log("\n");
        })
    .catch(function(error) {
        console.log('***---------------------*** NBA Teams')
        console.log(error);
    });



axios.get(nbaGames)
    .then(function(response){
        console.log("Today's NBA games.");
        // console.log('line 66 ---- ' + response.data.games);
        for (var k = 0; k < response.data.games.length; k++){
            console.log(response.data.games[k].away.name + ' @ ' + response.data.games[k].home.name);
            console.log('Venue: ' + response.data.games[k].venue.name + ', ' + response.data.games[k].venue.address + ', ' + response.data.games[k].venue.city + ', ' + response.data.games[k].venue.state);
            console.log('Where to watch: Network ' + response.data.games[k].broadcast.network + ' and Satellite ' + response.data.games[k].broadcast.satellite);
            console.log('\n');
            }
        })
    .catch(function(error) {
        console.log('***---------------------*** NBA Games')
        console.log(error);
    });

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