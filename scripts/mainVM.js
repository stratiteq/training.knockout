var mainVM = (function () {
    var vm = {};

    vm.people = ko.observableArray();

    repo.getPeople(function (people) {
        vm.people(people);
    });


    ko.applyBindings(vm);
    return vm;
})();