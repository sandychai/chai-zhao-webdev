(function () {
    angular
        .module("PROJECT")
        .config(configuration);


    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl:"home.html",

            })
            .when("/login", {
                templateUrl:"views/login.html",
                controller:"loginController",
                controllerAs:"vm"
            })
            .when('/register', {
                templateUrl:'views/register.html',
                controller:"registerController",
                controllerAs:"model"
            })
            .when('/user/:userId', {
                templateUrl:'views/profile.html',
                controller:"profileController",
                controllerAs:"model"
            })
    }
})();