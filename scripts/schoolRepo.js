var schoolRepo = (function () {
    return {
        getTeachers: function (callback) {
            helpers.getJson('https://api.github.com/users', function (response) {
                var teachers = JSON.parse(response);
                callback(teachers.slice(0,10));
            });
        },
        getStudents: function (callback) {
            helpers.getJson('https://api.github.com/users', function (response) {
                var teachers = JSON.parse(response);
                callback(teachers.slice(10));
            });
        }
    };
})();