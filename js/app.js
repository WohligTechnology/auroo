// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    
    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('contactus', {
        url: "/contactus",
        templateUrl: "views/template.html",
        controller: 'ContactUsCtrl'
    })
    .state('category', {
        url: "/category",
        templateUrl: "views/template.html",
        controller: 'CategoryCtrl'
    })

    .state('brands', {
        url: "/brands",
        templateUrl: "views/template.html",
        controller: 'BrandsCtrl'
    })
    .state('quickview', {
        url: "/quickview",
        templateUrl: "views/template.html",
        controller: 'QuickviewCtrl'
    })
    .state('categorymain', {
        url: "/categorymain",
        templateUrl: "views/template.html",
        controller: 'CategorymainCtrl'
    })
    .state('gallery', {
        url: "/gallery",
        templateUrl: "views/template.html",
        controller: 'GalleryCtrl'
    })
    .state('galleryimage', {
        url: "/galleryimage",
        templateUrl: "views/template.html",
        controller: 'GalleryimageCtrl'
    })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
