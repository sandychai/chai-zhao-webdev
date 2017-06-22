(function () {
    angular
        .module("PROJECT")
        .service("omdbService", omdbService);

    function omdbService($http) {
        this.searchPhotos = searchPhotos;


        var key = "18c5a437";
        //var secret = "58863cf2f0a48a9c";
        //var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
        function searchPhotos(searchTerm) {
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchTerm);
            return $http.get(url);
        }

    }
})();