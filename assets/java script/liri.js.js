require("dotenv").config();
require(`keys.js`);

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
console.log(spotify);
console.log(client);

nodeArg = process.argv;

if (process.argv[2] === "my-tweets"){
    JSON.stringify(twurl /1.1/search/tweets.json?count=nasa&result_type:20);
}
if(process.argv[2] === "spotify-this-song" && process.argv[3] === ""){
    JSON.stringify()
}