(function () {
    angular
        .module("WAM")
        .factory("websiteService", websiteService);

    function websiteService($http) {


        var api = {
            createWebsite:createWebsite,
            findWebsiteById:findWebsiteById,
            updateWebsite:updateWebsite,
            deleteWebsite:deleteWebsite,
            findAllWebsitesForUser:findAllWebsitesForUser
        };

        return api;

        function createWebsite(website) {
            var url = '/api/assignment/user/userId/website';
            return $http.post(url,website)
                .then(function (response) {
                    return response.data;
                })
        }

        function updateWebsite(websiteId, website) {
            var url = '/api/assignment/user/userId/website/'+websiteId;
            return $http.put(url, website)
                .then(function (response) {
                    return response.data;
                })

        }

        function deleteWebsite(websiteId) {
            var url = '/api/assignment/user/userId/website/'+ websiteId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })

        }

        function findWebsiteById(websiteId) {
            var url = '/api/assignment/user/userId/website/' + websiteId;
            return $http.get(url)
                .then(function (response ) {
                    return response.data;
                })

        }

        function findAllWebsitesForUser(userId) {
            var url = '/api/assignment/user/' + userId + '/website';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }
    }
})();