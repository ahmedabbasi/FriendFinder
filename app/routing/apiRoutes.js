// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friendsData.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends/:friends", function (req, res) {
    // Capture the user input
    var chosen = req.body;
    console.log(chosen);
    // capture the scores of the inputs
    var scores = chosen.scores;
    var totDiff = 10;

    for (var i = 0; i < friendsData.scores.length; i++) {
      var diff;
      for (var j = 0; j < scores.length; j++) {
        diff += Math.abs(friendsData.scores[i] - scores[j]);
      }
      if (diff < 10) {
        totalDiff = diff;
        var matchName = friendsData.name;
        var matchImage = friendsData.photo;
      }

    }
    // Add new user
    friendsData.push(chosen);
    //Send Appropiate Respone
    res.json({status:'OK' , matchName: matchName, matchImage: matchIamge});

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

};