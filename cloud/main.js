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

  Parse.initialize("User Info Collection Server");

  var Test = new Parse.Object.extend("Test");
  var newTest = new Test();

  newTest.set("name", "Test");
  newTest.set("why", "because");
  newTest.save();

});
