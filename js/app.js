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
    url: "/category/:id/:subid",
    templateUrl: "views/template.html",
    controller: 'CategoryCtrl'
  })
  .state('comingsoon', {
    url: "/comingsoon",
    templateUrl: "views/template.html",
    controller: 'ComingsoonCtrl'
  })
  .state('network', {
    url: "/network",
    templateUrl: "views/template.html",
    controller: 'NetworkCtrl'
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
  .state('productdetail', {
    url: "/productdetail",
    templateUrl: "views/template.html",
    controller: 'ProductDetailCtrl'
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

firstapp.filter('resizeimage', function() {
  return function(input) {
    if (input) {
      return  adminbase+'/index.php/image/index?name=' + input+'&width=';
    } else {
      // return "img/logo.png";
      return "";
    }
  };
});

firstapp.filter('largeImage', function() {
  return function(input) {
    if (input) {
      return  adminbase+'/index.php/image/index?name=' + input+'&width=700';
    } else {
      // return "img/logo.png";
      return "";
    }
  };
});


firstapp.directive('elevateZoom', function($document, $filter) {
    return {
        restrict: 'EA',
        link: function($scope, element, attr) {
            $scope.$watch(attr.image, function() {
                $scope.changeImage = function() {
                  console.log(attr.image);
                  var $element = $(element);
                    var image = $scope[attr.image].image;
                    console.log(image);
                    // image = image.productdetail.image[0];
                    var smallimg = attr.smallImage;
                    var bigimg = attr.bigImage;
                    // $element.attr('data-zoom-image', image);
                    // $element.attr('src', image);
                    var ez = $element.data("elevateZoom");
                                        if (!ez) {
                    $element.attr('data-zoom-image', $filter('serverimage')(image));
                    $element.attr('src', $filter('resizeimage')(image));
                    $element.elevateZoom();
                  } else {
                      var newImage = $filter('serverimage')(image);
                      var smallImage =$filter('resizeimage')(image);
                      ez.swaptheimage( smallImage,newImage);
                  }
                }
                $scope.$on('changeImage', function(event, data) {
                    $scope.changeImage();
                });
                $scope.changeImage();
            })
        }
    }
});
firstapp.directive('zoomContainer', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$on('$stateChangeSuccess', function() {
                var target = element.children('div.zoomContainer').remove();
            })
        }
    }

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
      // return "img/logo.png";
    }
  };
});
