(function () {
    'use strict';

    var services = angular.module('services', [])
        .service('userService', function ($http, $q) {

            this.getUsers = function () {

                var dfr = $q.defer();

                this.readTextFile("services/people.json", function (data) {
                    var jsonData = JSON.parse(data);
                    if (jsonData && jsonData.People) {
                        dfr.resolve(jsonData.People);
                    }
                }, function (message) {
                    dfr.reject('Error while getting the data');
                });

                return dfr.promise;
            }

            this.getUserDetailByName = function (userName) {

                var dfr = $q.defer();

                this.readTextFile("services/people.json", function (data) {
                    var jsonData = JSON.parse(data);
                    if (jsonData && jsonData.People) {
                        for (var i = 0; i < jsonData.People.length; i++) {
                            if (jsonData.People[i].name === userName) {
                                dfr.resolve(jsonData.People[i]);
                            }
                        }
                    }
                }, function (message) {
                    dfr.reject('Error while getting the data');
                });

                return dfr.promise;
            };

            this.readTextFile = function (file, callback, error) {
                try {
                    var rawFile = new XMLHttpRequest();
                    rawFile.overrideMimeType("application/json");
                    rawFile.open("GET", file, true);
                    rawFile.onreadystatechange = function () {
                        if (rawFile.readyState === 4 && rawFile.status == "200") {
                            callback(rawFile.responseText);
                        }
                    }
                    rawFile.send(null);
                }
                catch (err) {
                    error(err);
                }
            }

        });

} ());