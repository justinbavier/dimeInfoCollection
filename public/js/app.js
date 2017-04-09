/**
 * AngularJS module to process a form.
 */
angular.module('myApp', ['ajoslin.promise-tracker'])
  .controller('help', function ($scope, $http, $log, promiseTracker, $timeout) {
    $scope.subjectListOptions = {
      'bug': 'Report a Bug',
      'account': 'Account Problems',
      'mobile': 'Mobile',
      'user': 'Report a Malicious User',
      'other': 'Other'
    };

    // Inititate the promise tracker to track form submissions.
    $scope.progress = promiseTracker();

    $scope.submitForm = function(form) {
      $scope.submitted = true;

      if (form.$invalid) {
        return;
      }

      var data = $.param({
        'firstName' : $scope.fname,
        'lastName' : $scope.lname,
        'email' : $scope.email
      });

      var config = {
        headers : {
          'X-Parse-Application-Id' : 'dime'
        }
      }
      console.log("Fuck");
      $http.post('https://sleepy-hamlet-74920.herokuapp.com/parse/functions/storeEmailName', data, config)
        .success(function (data, status, headers, config) {
          $scope.PostDataResponse = data;
          console.log(data);
        })
        .error(function (data, status, header, config) {
          $scope.ResponseDetails = "Data: " + data +
          "<hr />status: " + status +
          "<hr />headers: " + header +
          "<hr />config: " + config;
        });
    };


    // Form submit handler.
    $scope.submit = function(form) {
      // Trigger validation flag.
      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      }

      // Default values for the request.
      var config = {
        params : {
          'callback' : 'JSON_CALLBACK',
          'fname' : $scope.fname,
          'lname' : $scope.lname,
          'email' : $scope.email
        },
      };

      // Perform JSONP request.
      var $promise = $http.jsonp('response.json', config)
        .success(function(data, status, headers, config) {
          if (data.status == 'OK') {
            $scope.fname = null;
            $scope.lname = null;
            $scope.email = null;
            $scope.messages = 'Nice';
            $scope.submitted = false;
          } else {
            $scope.messages = 'Oops, we received your request, but there was an error processing it.';
            $log.error(data);
          }
        })
        .error(function(data, status, headers, config) {
          $scope.progress = data;
          $scope.messages = 'There was a network error. Try again later.';
          $log.error(data);
        })
        .finally(function() {
          // Hide status messages after three seconds.
          $timeout(function() {
            $scope.messages = 'Hurry up...';
          }, 10000);
        });

      // Track the request and show its progress to the user.
      $scope.progress.addPromise($promise);
    };
  });
