(function () {
    window.onload = function () {
        var nav = document.getElementById("nav");
        var trip = document.getElementById("trip");
        new Tab(nav, "li", "");
        new Tab(trip, "section", "trip");
    }
})();
