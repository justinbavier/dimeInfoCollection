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
  const email = req.params.email;
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;


  var Person = Parse.Object.extend("Person");
  var newPerson = new Person();

  newPerson.set("email", email);
  newPerson.set("firstName", firstName);
  newPerson.set("lastName", lastName);

  newPerson.save(null, {
    success: function(newPerson) {
      // Execute any logic that should take place after the object is saved.
      console.log("fuck yes slack rock king, melodey's echo chamber is amazing.");
      res.success("new person compiled zero one one one one zero zero");
    },
    error: function(newPerson, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      res.error("you suck, because this was not a successful response, loser.")
    }
  });
});
