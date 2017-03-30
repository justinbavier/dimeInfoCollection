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

  var person = Parse.Object('Person');
  person.set("email", "email");

  person.save().then(function(result) {
    console.log(result);
    res.success(result);

  }).fail(function(err) {
    response.error(err);
  });
});
