angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading, $compile, ListEnt) {

        $scope.markersArray = [];
        ListEnt.all(function(entreprises){
            $scope.lists = entreprises;

            for(i = 0 ; i<entreprises.length ; i++){
                $scope.markersArray[i]= {
                    id: i,
                    coords: {
                        latitude: entreprises[i].latitude,
                        longitude: entreprises[i].longitude
                    },
                    options:{
                        draggable: true,
                        labelContent: entreprises[i].denomination+'<br/>'+"Secteur : "+entreprises[i].secteur,
                        labelAnchor: "80 120",
                        labelClass: "marker-labels"
                    }
                };
            }
        });

        $scope.map = {
            center: {
                latitude: 36.805604,
                longitude: 10.176237
            },
            zoom: 14,
            pan: 1
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
