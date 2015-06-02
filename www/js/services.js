angular.module('starter.services', [])

.factory('ListEnt', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lists = [{
    id: 0,
    name: 'Entreprise 1',
    denomination: 'Entreprise 1 description.',
    logo: 'https://pbs.twimg.com/profile_images/1266780377/Logo_Soci_t__G_n_rale.jpg'
  }, {
    id: 1,
    name: 'Entreprise 1',
    denomination: 'Entreprise 1 description.',
    logo: 'https://pbs.twimg.com/profile_images/1266780377/Logo_Soci_t__G_n_rale.jpg'
  },{
    id: 2,
    name: 'Entreprise 1',
    denomination: 'Entreprise 1 description.',
    logo: 'https://pbs.twimg.com/profile_images/1266780377/Logo_Soci_t__G_n_rale.jpg'
  }, {
    id: 3,
    name: 'Entreprise 1',
    denomination: 'Entreprise 1 description.',
    logo: 'https://pbs.twimg.com/profile_images/1266780377/Logo_Soci_t__G_n_rale.jpg'
  },{
    id: 4,
    name: 'Entreprise 1',
    denomination: 'Entreprise 1 description.',
    logo: 'https://pbs.twimg.com/profile_images/1266780377/Logo_Soci_t__G_n_rale.jpg'
  }, {
    id: 5,
    name: 'Entreprise 1',
    denomination: 'Entreprise 1 description.',
    logo: 'https://pbs.twimg.com/profile_images/1266780377/Logo_Soci_t__G_n_rale.jpg'
  }, {
    id: 6,
    name: 'Entreprise 1',
    denomination: 'Entreprise 1 description.',
    logo: 'https://pbs.twimg.com/profile_images/1266780377/Logo_Soci_t__G_n_rale.jpg'
  }];

  return {
    all: function() {
      return lists;
    },
    remove: function(item) {
      lists.splice(lists.indexOf(item), 1);
    },
    get: function(id) {
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].id === parseInt(id)) {
          return lists[i];
        }
      }
      return null;
    }
  };
});
