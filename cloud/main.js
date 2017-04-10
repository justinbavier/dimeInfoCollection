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
      res.success("new person compiled zero one one one one zero zero");
    },
    error: function(newPerson, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      res.error("getoughttahere, Noah... btw this is the storeEmailName function() lala")
    }
  });
});

// 'ola 'ola
Parse.Cloud.define('anonInfo', function(req, res) {

  const incomeRange = req.params.incomeRange;
  //how much they donate to charity
  const monthlyDonation = req.params.monthlyDonation;
  const doesDonate = req.params.doesDonate;
  //name three charities
  const charities = req.params.charities;
  const numOfTrans = req.params.numOfTrans;
  const employmentStatus = req.params.employmentStatus;

  const wouldYouUseDime = req.params.wouldYouUseDime;

  var AnonPerson = Parse.Object.extend("Anonymous");
  var newAnonPerson = new AnonPerson();

  newAnonPerson.set("incomeRange", incomeRange);
  newAnonPerson.set("monthlyDonation", monthlyDonation);
  newAnonPerson.set("doesDonate", doesDonate);
  newAnonPerson.set("charities", charities);
  newAnonPerson.set("numOfTrans", numOfTrans);
  newAnonPerson.set("employmentStatus", employmentStatus);
  newAnonPerson.set("wouldYouUseDime", wouldYouUseDime);

  newAnonPerson.save(null, {
    success: function(newAnonPerson) {
      // Execute any logic that should take place after the object is saved.
      res.success("new anon person compiled zero one one one one zero zero");
    },
    error: function(newAnonPerson, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      res.error("getoughttahere, Noah... do you even like impressionism, btw #thisisthe(anonInfo)FUNCTION")
    }
  });
});
