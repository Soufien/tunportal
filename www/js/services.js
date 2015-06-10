angular.module('starter.services', [])

.factory('ListEnt', ['$http',function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lists = [];

  return {
    all: function(callback) {
      $http.get('http://localhost:2403/entreprise')
          .success(function(entreprises) {
            lists = entreprises;
            callback(entreprises);
          })
          .error(function(err) {
            alert(err);
          });
    },
    get: function(id) {
      console.log("get called for id : "+id);
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].id === id) {
          console.log(lists[i]);
          return lists[i];
        }
      }
      return null;
    }
  };
}]);
