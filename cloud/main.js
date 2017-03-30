Parse.serverURL = process.env.SERVER_URL


Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('hello', function(req, res) {
  const email = req.params.email;
  const charity = req.params.charity;
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;
});

Parse.Cloud.define('storeEmailName', function(req, res) {
  // const email = req.params.email;
  // const firstName = req.params.firstName;
  // const lastName = req.params.lastName;

  var Person = Parse.Object.extend('Person');
  var newPerson = new Person();

  newPerson.save({
    email: "email",
    firstName: "firstName",
    lastName: "lastName"
  }).then(function(gameTurnAgain) {

  }, function(error) {

  });
});
