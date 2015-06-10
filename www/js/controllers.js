angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
        $scope.map = {
            center: {
                latitude: 36.805604,
                longitude: 10.176237
            },
            zoom: 14,
            pan: 1
        };

        $scope.marker = {
            id: 0,
            coords: {
                latitude: 36.805604,
                longitude: 10.176237
            }
        };

        $scope.marker.options = {
            draggable: true,
            labelContent: "Entreprise 1 "+'<br/>'+"Entreprise 1 description",
            labelAnchor: "80 120",
            labelClass: "marker-labels"
        };

        $scope.marker1 = {
            id: 1,
            coords: {
                latitude: 36.805604,
                longitude: 10.176237
            }
        };

        $scope.marker1.options = {
            draggable: true,
            labelContent: "Entreprise 2 "+'<br/>'+"Entreprise 2 description",
            labelAnchor: "80 120",
            labelClass: "marker-labels"
        };

        $scope.marker2 = {
            id: 2,
            coords: {
                latitude: 36.805604,
                longitude: 10.176237
            }
        };

        $scope.marker2.options = {
            draggable: true,
            labelContent: "Entreprise 3 "+'<br/>'+"Entreprise 3 description",
            labelAnchor: "80 120",
            labelClass: "marker-labels"
        };

        $scope.marker3 = {
            id: 3,
            coords: {
                latitude: 36.805604,
                longitude: 10.176237
            }
        };

        $scope.marker3.options = {
            draggable: true,
            labelContent: "Entreprise 4 "+'<br/>'+"Entreprise 4 description",
            labelAnchor: "80 120",
            labelClass: "marker-labels"
        };

        $scope.marker4 = {
            id: 4,
            coords: {
                latitude: 36.805604,
                longitude: 10.176237
            }
        };

        $scope.marker4.options = {
            draggable: true,
            labelContent: "Entreprise 5 "+'<br/>'+"Entreprise 5 description",
            labelAnchor: "80 120",
            labelClass: "marker-labels"
        };
    })

.controller('ListCtrl', function($scope, ListEnt) {

         ListEnt.all(function(entreprises){
             $scope.lists = entreprises;
        });
  $scope.remove = function(item) {
      ListEnt.remove(item);
  }
})

.controller('EntrepriseDetailCtrl', function($scope, $stateParams, ListEnt) {
        $scope.map = {
            center: {
                latitude: 36.805604,
                longitude: 10.176237
            },
            zoom: 14,
            pan: 1
        };

        $scope.marker4 = {
            id: 0,
            coords: {
                latitude: 36.805604,
                longitude: 10.176237
            }
        };

        $scope.marker4.options = {
            draggable: true,
            labelContent: "Entreprise 1 "+'<br/>'+"Entreprise 1 description",
            labelAnchor: "80 120",
            labelClass: "marker-labels"
        };

        $scope.entreprise = ListEnt.get($stateParams.id);
})

.controller('AboutCtrl', function($scope) {

        $scope.settings = {
    enableFriends: true
  };
});
