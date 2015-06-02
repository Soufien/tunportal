angular.module('starter.controllers', ['uiGmapgoogle-maps'])

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        console.log($scope.map);
    })

.controller('ListCtrl', function($scope, ListEnt) {
        $scope.lists = ListEnt.all();
  $scope.remove = function(item) {
      ListEnt.remove(item);
  }
})

.controller('EntrepriseDetailCtrl', function($scope, $stateParams, ListEnt) {
        $scope.entreprise = ListEnt.get($stateParams.id);
})

.controller('AboutCtrl', function($scope) {

        $scope.settings = {
    enableFriends: true
  };
});
