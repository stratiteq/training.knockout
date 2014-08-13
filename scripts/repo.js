var repo = (function () {
    return {
        getPeople: function (callback) {
            helpers.getJson('https://api.github.com/users', function (response) {
                var people = JSON.parse(response);
                people = people.slice(0, 10);

                for (var i = 0; i < people.length; i++) {
                    people[i].repos = ko.observableArray();
                    (function (user) {
                        helpers.getJson('https://api.github.com/users/' + user.login + '/repos', function (response) {
                            user.repos(JSON.parse(response));
                        });
                    })(people[i]);
                }

                callback(people);
            });
        },
    };
})();