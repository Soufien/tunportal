angular.module('starter.controllers', [])

.controller('MapCtrl',  function($scope, $ionicLoading) {

/*        google.maps.event.addDomListener(window, 'load', function() {
            var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            navigator.geolocation.getCurrentPosition(function(pos) {
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    title: "My Location"
                });
            });

            $scope.map = map;
        });*/

    })

.controller('ListCtrl', function($scope, lists) {
  $scope.lists = lists.all();
        console.log($scope.lists.length);
  $scope.remove = function(item) {
      lists.remove(item);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, lists) {
  $scope.entreprise = lists.get($stateParams.itemId);
})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});