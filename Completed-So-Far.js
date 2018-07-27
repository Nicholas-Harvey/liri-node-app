// Completed for homework:
// 1) OMDB javascript and Node

var request = require("request");
title = process.argv[2];
if (title === undefined) {
  title = "Mr. Nobody";
}
request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log("Title of the Film: " + JSON.parse(body).Title);
    console.log("Year the film was released: " + JSON.parse(body).Year);
    console.log("Rating of the film: " + JSON.parse(body).Rated);
    console.log("Rotten Tomatoes film quality rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Nation in which the film was produced: " + JSON.parse(body).Country);
    console.log("Language in which the film is available: " + JSON.parse(body).Language);
    console.log("Plot of the film: " + JSON.parse(body).Plot);
    console.log("Actors and actresses in the film: " + JSON.parse(body).Actors)
  }
})

