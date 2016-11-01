describe('User Service Test', function () {
    describe('User Service', function () {

        var userService, $http, $q;

        beforeEach(angular.mock.module("services"));

        beforeEach(inject(function (_userService_, _$http_, _$q_) {
            userService = _userService_;
            $http = _$http_;
            $q = _$q_;
        }));

        // A simple test to verify the user.service exists
        it('should exists', function () {
            expect(userService).toBeDefined();
            expect($http).toBeDefined();
            expect($q).toBeDefined();
        });

        describe('.getUsers()', function () {
            it('should exist', function () {
                expect(userService.getUsers).toBeDefined();
            });

            it('should return promise', function () {
                expect(userService.getUsers().then(function (promise) {
                    return promise;
                })).toBeDefined();
            });

            var result;
            var andrew = {
                "name": "Andrew Amernante",
                "rating": 3,
                "img": "http://www.fillmurray.com/200/200",
                "Description": "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
                "Likes": ["Dogs", "Long walks on the beach", "Chopin", "Tacos"],
                "Dislikes": ["Birds", "Red things", "Danish food", "Dead Batteries"]
            }

            // beforeEach(function () {
            //     jasmine.Ajax.install();
            // });
            // afterEach(function () {
            //     jasmine.Ajax.uninstall();
            // });

            it('should return users', function () {

                // var doneFn = jasmine.createSpy("success");

                // var xhr = new XMLHttpRequest();
                // xhr.onreadystatechange = function (args) {
                //     if (this.readyState == this.DONE) {
                //         doneFn(this.responseText);
                //     }
                // };

                // xhr.open("GET", "services/people.json");
                // xhr.send();

                // expect(jasmine.Ajax.requests.mostRecent().url).toBe('services/people.json');
                // expect(doneFn).not.toHaveBeenCalled();

                // jasmine.Ajax.requests.mostRecent().response({
                //     "status": 200,
                //     "contentType": 'application/json',
                //     "responseText": "{ \"People\": \[\{\"name\": \"Andrew Amernante\"\}\]\}"
                // });

                // userService.getUsers()
                //     .then(function (data) {
                //         result = data;
                //     });
                // expect(userService.readTextFile).not.toHaveBeenCalled();
                // expect(result.length).toEqual(5);
            });
        });
    });
});