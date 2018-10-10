require("dotenv").config();

//Global
let keys = require("./keys.js");
let command = process.argv[2];
let input = process.argv[3];

//Dependencies
let chalk = require("chalk");
let chalkAnimation = require('chalk-animation');
let moment = require("moment");
let request = require("request-promise");
let fs = require("fs-extra");

//Spotify
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);

//Twitter

function runRequest() {
    
    switch (command) {


    case 'spotify-this-song':
                if(input === undefined || input === "" || input === " ") {
                    input = "Electrical Storm";
                }
                
                spotify.search({type: "track", query: input, limit: 1}, function(err, info) {
                    
                    if (!err) {
                        console.log(chalk.green(` \n Artist: ${JSON.stringify(info.tracks.items[0].album.artists[0].name)} \n Song: ${input}`));
                        
                        if (JSON.stringify(info.tracks.items[0].preview_url) === "null"){
                            console.log(chalk.green(`Sorry, no preview url found.`));
                        }
                        else {
                            console.log(chalk.green(` Preview URL: ${JSON.stringify(info.tracks.items[0].preview_url)}`));
                        }
                        
                        console.log(chalk.green(` Album Name: ${JSON.stringify(info.tracks.items[0].album.name)}`));
                    }
                    else {
                        console.log(err);
                    }
                    
                });
            break;
    
    case 'movie-this':
                if (input) {
                    request("http://www.omdbapi.com/?t=" + input + "&r=json&plot=short&apikey=trilogy")

                    .then(response => {
                        let data = JSON.parse(response)
                        console.log(chalk.blue(`\n * Title: ${data.Title} \n * Year: ${data.Year} \n * IMDB Rating: ${data.imdbRating}`));

                        if(data.Ratings[1] === undefined) {
                            console.log(chalk.red(` * No Rotten Tomatoes Rating found.`));
                        }
                        else {
                            console.log(chalk.blue(` * Rotten Tomatoes Rating: ${data.Ratings[1].Value}`));
                        }
                        console.log(chalk.blue(` * Country: ${data.Country} \n * Language: ${data.Language} \n * Plot: ${data.Plot} \n \n * Actors: ${data.Actors}`));
                    })
                }
                else {
                    console.log("This movie sucks. Have better taste and choose another film.");    
                };
            break;

    
    case 'concert-this':
                if (input === undefined || input === "" || input === " " ) {
                    input = "Muse"
                }

                request("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")

                .then( response => {
                    let data = JSON.parse(response);
                    if (data.length === 0) {
                        console.log(chalk.red(`\n * ${input} sucks. Please have better taste and choose another artist or band.`));
                    }
                    else {
                        console.log(chalk.cyan(` \n * Concert Information: `));
                        
                        for (let i = 0; i < data.length; i++) {
                            console.log(chalk.cyan(` \n * Artist: ${input} \n * Venue: ${data[i].venue.name} \n * Location: ${data[i].venue.city} , ${data[i].venue.region} \n * Date: ${moment(data[i].datetime).format("MMM Do YYYY")}`));
                        }
                    }
                })
            break;
        }
    }

runRequest();