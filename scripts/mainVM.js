var mainVM = (function () {
    var vm = {};

    vm.people = ko.observableArray();
    vm.following = ko.observableArray();
    vm.searchFollow = ko.observableArray('');

    repo.getPeople(function (people) {
        vm.people(people);
    });

    vm.toggleFollow = function (user) {
        if (vm.following.indexOf(user) < 0) {
            vm.following.push(user);
        } else {
            vm.following.remove(user);
        }
    }

    vm.peopleToFollow = ko.computed(function () {
        var people = vm.people();
        people = ko.utils.arrayFilter(people, function (user) {
            if (vm.following.indexOf(user) > -1)
                return false;
            if (user.login.indexOf(vm.searchFollow()) < 0)
                return false;
            return true;
        });
        return people;
    });

    vm.timeline = ko.computed(function () {
        var repos = [];
        for (var i = 0; i < vm.following().length; i++)
            repos.push.apply(repos, vm.following()[i].repos());

        repos.sort(function (left,right) {
            return new Date(left.updated_at) < new Date(right.updated_at);
        });
        return repos;
    });


    ko.applyBindings(vm);
    return vm;
})();