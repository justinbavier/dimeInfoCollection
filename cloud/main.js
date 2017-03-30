
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

  var Person = Parse.Object.extend('Shucks');
  var newPerson = new Person();

  newPerson.save({
    email: 'jbavier123@gmail.com',
    firstName: 'Justin',
    lastName: 'Bavier'
  }, {
    success: function(newPerson) {

    },
    error: function(newPerson, error) {

    }
  });
});
