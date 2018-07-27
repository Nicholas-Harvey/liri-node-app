var client_id = "97e0a54433cf46f1a1a680465bb08f36";
var client_secret = "5d03897aed2049cfae45b03fa04a501d";
var redirect_uri = 'REDIRECT_URI';
var Spotify = require('node-spotify-api');
var spotify = require('keys.js');
console.log("Client Id: " + client_id);
console.log("Client Secret: " + client_secret);
console.log("Redirect URI: " + redirect_uri);
console.log("Spotify: " + Spotify);

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "97e0a54433cf46f1a1a680465bb08f36",
  secret: "5d03897aed2049cfae45b03fa04a501d"
});
var song = process.argv[2]; 
if (song === undefined) {
    song = "The Sign";
}
spotify.search({
    type: 'track',
    query: song,
    limit: 1,
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ');
    } else {
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Title: " + data.tracks.items[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Preview: " + data.tracks.items[0].external_urls.spotify);
    }
})

