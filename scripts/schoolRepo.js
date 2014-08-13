var schoolRepo = (function () {
    return {
        getTeachers: function () {
            helpers.getJson('https://api.github.com/users', function (response) {
                var teachers = JSON.parse(response);
                return teachers.slice(0,10);
            });
        },
        getStudents: function () {
            helpers.getJson('https://api.github.com/users', function (response) {
                var teachers = JSON.parse(response);
                return teachers.slice(10);
            });
        }
    };
})();