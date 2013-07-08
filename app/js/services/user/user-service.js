angular.module('myApp.services').factory('UserService', [
    function() {
        var data = [{
            id: 100,
            name: 'Terry Rosen',
            twitter: 'rerrify'
        }, {
            id: 101,
            name: 'Tom Hanks',
            twitter: 'tomhanks'
        }, {
            id: 102,
            name: 'Elon Musk',
            twitter: 'elonmusk'
        }, {
            id: 103,
            name: 'Yehuda Katz',
            twitter: 'wycats'
        }, {
            id: 104,
            name: 'Jeffrey Way',
            twitter: 'jeffrey_way'
        }];

        return {
            get: function() {
                return data;
            },

            getSingle: function(id) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id === parseInt(id, 10)) {
                        user = data[i];
                        return user;
                    }
                }
            },

            search: function(query) {
                var result = [],
                    name,
                    twitter;

                query = angular.lowercase(query);

                for (var i = 0; i < data.length; i++) {
                    name = angular.lowercase(data[i].name);
                    twitter = angular.lowercase(data[i].twitter);

                    if (name.indexOf(query) >= 0 || twitter.indexOf(query) >= 0) {
                        result.push(data[i]);
                    }
                }

                return result;
            }
        };
    }
]);