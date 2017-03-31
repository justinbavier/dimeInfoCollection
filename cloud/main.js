Parse.serverURL = process.env.SERVER_URL

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


// Parse.Cloud.define('hello', function(req, res) {
//   const email = req.params.email;
//   const charity = req.params.charity;
//   const firstName = req.params.firstName;
//   const lastName = req.params.lastName;
// });

Parse.Cloud.define('storeEmailName', function(req, res) {
  // const email = req.params.email;
  // const firstName = req.params.firstName;
  // const lastName = req.params.lastName;


  var GameScore = Parse.Object.extend("Person");
  var gameScore = new GameScore();

  gameScore.set("email", "1337");
  gameScore.set("firstName", "Sean Plott");

  gameScore.save(null, {
    success: function(gameScore) {
      // Execute any logic that should take place after the object is saved.
      console.log("fuck yes slack rock king");
      res.success("new person compiled zero one one one one zero zero");
    },
    error: function(gameScore, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      res.error("you suck, because this was not a successful response, loser.")
    }
  });
});
