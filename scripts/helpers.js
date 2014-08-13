var helpers = (function () {
    return {
        getJson: function (url, callback, error) {
            var r = new XMLHttpRequest();
            r.open('GET', url, true);
            r.onreadystatechange = function () {
                if (r.readyState === 4 && r.status === 200 && callback) {
                    callback(r.responseText);
                }
                if (r.status !== 200 && error) {
                    error(r.statusText);
                }
            };
            r.send();
        }
    };
})();