
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
  const email = req.params.email;
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;

  if (!email || !firstName || !lastName) {
    res.error('Boooo');
  } else {
    var newPerson = Parse.Object('Person');
    newPerson.set('email', email);
    newPerson.set('firstName', firstName);
    newPerson.set('lastName', lastName);
    res.success('Nice');
  }
  //res.success(email + " " + firstName + " " + lastName);
});
