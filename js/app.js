// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;

  $stateProvider

    .state('home', {
    url: "/home",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl',
    params: {
      activeItem: 'item1'
    }
  })

  .state('knowus', {
    url: "/knowus",
    templateUrl: "views/template.html",
    controller: 'KnowusCtrl',
    params: {
      activeItem: 'item2'
    }
  })

  .state('products', {
    url: "/products",
    templateUrl: "views/template.html",
    controller: 'ProductsCtrl',
    params: {
      activeItem: 'item3'
    }
  })

  .state('gallery', {
    url: "/gallery",
    templateUrl: "views/template.html",
    controller: 'GalleryCtrl',
    params: {
      activeItem: 'item4'
    }
  })

  .state('download', {
    url: "/download",
    templateUrl: "views/template.html",
    controller: 'DownloadCtrl',
    params: {
      activeItem: 'item5'
    }
  })

  .state('contactus', {
    url: "/contactus",
    templateUrl: "views/template.html",
    controller: 'ContactUsCtrl',
    params: {
      activeItem: 'item6'
    }

  })

  .state('category', {
    url: "/category/:id",
    templateUrl: "views/template.html",
    controller: 'CategoryCtrl'
  })
  .state('comingsoon', {
    url: "/comingsoon",
    templateUrl: "views/template.html",
    controller: 'ComingsoonCtrl'
  })

  .state('category.series', {
    url: "/series/:code",
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

  .state('featurespopup', {
    url: "/featurespopup",
    templateUrl: "views/template.html",
    controller: 'FeaturespopCtrl'
  })


  .state('galleryimage', {
      url: "/galleryimage/:id",
      templateUrl: "views/template.html",
      controller: 'GalleryimageCtrl'
    })
    .state('searchresult', {
      url: "/searchresult/:name",
      templateUrl: "views/template.html",
      controller: 'SearchResultCtrl'
    });

  // use the HTML5 History API
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});
//
// firstapp.filter('customFilter', function() {
//     return function(query) {
//         var out = [];
//         angular.forEach($scope.products, function(value, key) {
//             if (value.name == query)
//                 this.out.push(value);
//         });
//         return out;
//     };
// });

firstapp.filter('serverimage', function() {
  return function(input) {
    if (input) {
      // console.log('serverimage: ', input);
      // return input;
      return imgpath + input;
      // return "http://192.168.0.123/eurobackend/uploads"+input;
    } else {
      return "img/logo.png";
    }
  };
});
