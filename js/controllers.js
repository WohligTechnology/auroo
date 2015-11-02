angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'ngDialog', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.products = false;
    $scope.pro = function (open) {
        $scope.products = open;
    }
    $scope.open = function () {
        ngDialog.open({
            template: './views/content/quickview.html'
        });
    }

    $scope.slides = [{
            img: 'img/home-slide/slider1.jpg',
            tag_head: "new products released",
            tagline1: "redwing leather shoes"
    },
        {
            img: 'img/home-slide/slider2.jpg',
            tag_head: "Ona Leathershop Presents",
            tagline1: "The berlin ii bourban"

       }, {
            img: 'img/home-slide/slider3.jpg',
            tag_head: "new products released",
            tagline1: "Redwing leather shoes"
       }

    ];
    $scope.products = [
        {
            img: "img/products/8.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/7.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/6.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/5.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/4.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/3.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/2.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/1.jpg",
            name: "Zara",
            price: "25000"
    }
                      ];
    $scope.brandlist = [
        {
            back_img: "img/slider/1.jpg",
            img: "img/brands/1.png",
            products: [{
                img: "img/products/8.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/7.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/6.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/5.jpg",
                name: "Zara",
                price: "25000"
        }]
        },
        {
            back_img: "img/slider/2.jpg",
            img: "img/brands/2.png",
            products: [
                {
                    img: "img/products/5.jpg",
                    name: "Zara",
                    price: "25000"
    },
                {
                    img: "img/Products/4.jpg",
                    name: "Zara",
                    price: "25000"
    },
                {
                    img: "img/products/3.jpg",
                    name: "Zara",
                    price: "25000"
    },
                {
                    img: "img/products/2.jpg",
                    name: "Zara",
                    price: "25000"
    },
            ]
        },
        {
            back_img: "img/slider/3.jpg",
            img: "img/brands/3.png"
        },
        {
            back_img: "img/slider/1.jpg",
            img: "img/brands/4.png"
        },
        {
            back_img: "img/slider/2.jpg",
            img: "img/brands/5.png"
        },
        {
            back_img: "img/slider/3.jpg",
            img: "img/brands/6.png"
        },
                       ];

    $scope.producthov = [
        {
            img: "img/products/8.jpg",
            name: "Zara",
            price: "25000"
        }, {
            img: "img/products/7.jpg",
            name: "Zara",
            price: "25000"
        }, {
            img: "img/products/6.jpg",
            name: "Zara",
            price: "25000"
        }, {
            img: "img/products/5.jpg",
            name: "Zara",
            price: "25000"
        }
  ];

    $scope.prosee = false;
    $scope.proclick = function (view) {
        if (view = true) {
            $scope.prosee = !$scope.prosee;
        } else {
            $scope.prosee = view;
        }
    }
})

.controller('ContactUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("contactus");
    $scope.menutitle = NavigationService.makeactive("Contact-Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('QuickviewCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("quickview");
        $scope.menutitle = NavigationService.makeactive("QuickView");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('BrandsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("brands");
        $scope.menutitle = NavigationService.makeactive("Brands");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.brandlist = [
            {
                img: 'img/brands/18.png'

            }, {
                img: 'img/brands/1.png'
                },
            {
                img: 'img/brands/2.png'
                },
            {
                img: 'img/brands/3.png'
                },
            {
                img: 'img/brands/4.png'
                },
            {
                img: 'img/brands/5.png'
                },
            {
                img: 'img/brands/6.png'
                },
            {
                img: 'img/brands/7.png'
                },
            {
                img: 'img/brands/8.png'
                },
            {
                img: 'img/brands/9.png'
                },
            {
                img: 'img/brands/10.png'
                },
            {
                img: 'img/brands/11.png'
                },
            {
                img: 'img/brands/12.png'
                },
            {
                img: 'img/brands/13.png'
                },
            {
                img: 'img/brands/14.png'
                },
            {
                img: 'img/brands/15.png'
                },
            {
                img: 'img/brands/16.png'
                },
            {
                img: 'img/brands/17.png'
                }
            ];
    })
    .controller('CategoryCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $timeout) {
        $scope.template = TemplateService.changecontent("category");
        $scope.menutitle = NavigationService.makeactive("Category");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.products = [
            {
                img: "img/products/8.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/products/7.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/products/6.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/products/5.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/products/4.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/products/3.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/products/2.jpg",
                name: "Zara",
                price: "25000"
    },
            {
                img: "img/products/1.jpg",
                name: "Zara",
                price: "25000"
    }
                      ];
        $scope.oneAtATime = true;
        $scope.open = function () {
            ngDialog.open({
                template: './views/content/quickview.html'
            });
        };

    })
    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.search = false;
        $scope.open = function (box) {
            $scope.search = box;
        }
    })

;
//$scope.toggle = function (flag) {
//    //            if (flag = true) {
//    //                $scope.showsearch = !$scope.showsearch;
//    //            } else {
//    $scope.showsearch = flag;
//    //            }
//}
