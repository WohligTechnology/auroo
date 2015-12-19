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
    $scope.open = function (image) {
        $scope.imgsrc = image.img;
        ngDialog.open({
            template: 'views/content/quickview.html',
            scope:$scope,
            controller: 'HomeCtrl'
        });
    }

    $scope.slides = [  
    'img/home-slide/slider1.jpg',
    'img/home-slide/slider2.jpg',
    'img/home-slide/slider3.jpg',
    'img/home-slide/slider4.jpg'
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
            img: "img/products/5.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/4.jpg",
            name: "Zara",
            price: "25000"
    },
//        {
//            img: "img/products/6.jpg",
//            name: "Zara",
//            price: "25000"
//    },
//        {
//            img: "img/products/3.jpg",
//            name: "Zara",
//            price: "25000"
//    },
//        {
//            img: "img/products/2.jpg",
//            name: "Zara",
//            price: "25000"
//    },
//        {
//            img: "img/products/1.jpg",
//            name: "Zara",
//            price: "25000"
//    }
];
    $scope.brandlist = [
        {
            back_img: "img/brandlist/acrylamhov.png",
            img: "img/brandlist/acrylam.png",
            show: false,
            products: [
                {
                    img: "img/acrylyte/sample/8801.jpg",
                    name: "Decolite"
    }, {
                    img: "img/acrylyte/sample/8802.jpg",
                    name: "Vereno"
    }, {
                    img: "img/acrylyte/sample/8803.jpg",
                    name: "Corriano"
    }, {
                    img: "img/acrylyte/sample/8804.jpg",
                    name: "Acrylyte"
    }
    ]
},
        {
            back_img: "img/brandlist/acrylytehov.png",
            img: "img/brandlist/acrylyte.png",
            show: false,
            products: [
                {
                    img: "img/acrylyte/sample/8805.jpg",
                    name: "Decolite"
    }, {
                    img: "img/acrylyte/sample/8806.jpg",
                    name: "Vereno"
    }, {
                    img: "img/acrylyte/sample/8807.jpg",
                    name: "Corriano"
    }, {
                    img: "img/acrylyte/sample/8808.jpg",
                    name: "Acrylyte"
    }
    ]
},
        {
            back_img: "img/brandlist/corrianohov.png",
            img: "img/brandlist/corriano.png",
            show: false,
            products: [
                {
                    img: "img/acrylyte/sample/8809.jpg",
                    name: "Decolite"
    }, {
                    img: "img/acrylyte/sample/8810.jpg",
                    name: "Vereno"
    }, {
                    img: "img/acrylyte/sample/8811.jpg",
                    name: "Corriano"
    }, {
                    img: "img/acrylyte/sample/8812.jpg",
                    name: "Acrylyte"
    }
    ]
},
//        {
//            back_img: "img/brandlist/mikanohov.png",
//            img: "img/brandlist/mikano.png"
//        }
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
    $scope.proclick = function (index) {
        console.log(index);
        // for(var i=0;i<$scope.brandlist.length;i++){
        //     if(i==index){
        //         $scope.brandlist[i].show=true;
        //     }else{
        //         $scope.brandlist[i].show=false;
        //     }
        // }
        if (index == 1) {
            $scope.brandlist[index].show = !$scope.brandlist[index].show;
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
    .controller('GalleryimageCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("galleryimage");
        $scope.menutitle = NavigationService.makeactive("Galleryimage");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.slide = [
    'img/products/1.jpg',
    'img/products/2.jpg',
    'img/products/3.jpg',
    'img/products/4.jpg'
    ];
    })
    .controller('CategoriesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("categories");
        $scope.menutitle = NavigationService.makeactive("Categories");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.catmain = [
            {
                img: "img/gallery/decolite.png"
    },
            {
                img: "img/gallery/lucento.png"
    },
            {
                img: "img/gallery/mikano.png"
    },
            {
                img: "img/gallery/vereno.png"
    },
            {
                img: "img/gallery/acrylam.png"
    },
            {
                img: "img/gallery/egger.png"
    },
            {
                img: "img/gallery/flos.png"
    },
            {
                img: "img/gallery/decoart.png"
    },
            {
                img: "img/gallery/acrylyte.png"
    },
            {
                img: "img/gallery/corriano.png"
    },
            {
                img: "img/gallery/stylite.png"
    },
            {
                img: "img/gallery/decopanel.png"
    },
            {
                img: "img/gallery/decoris.png"
    },
            {
                img: "img/gallery/forescolor.png"
    },
            {
                img: "img/gallery/fashionwall.png"
    },
            {
                img: "img/gallery/emporio.png"
    },
            {
                img: "img/gallery/matrixwall.png"
    },
            {
                img: "img/gallery/solido.png"
    },
            {
                img: "img/gallery/d3wall.png"
    },
            {
                img: "img/gallery/europratik.png"
    }
    ];
    })
    .controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $timeout) {
        $scope.template = TemplateService.changecontent("gallery");
        $scope.menutitle = NavigationService.makeactive("Gallery");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.gallery = [
            {
                img: "img/gallery/decolite.png"
    },
            {
                img: "img/gallery/lucento.png"
    },
            {
                img: "img/gallery/mikano.png"
    },
            {
                img: "img/gallery/vereno.png"
    },
            {
                img: "img/gallery/acrylam.png"
    },
            {
                img: "img/gallery/egger.png"
    },
            {
                img: "img/gallery/flos.png"
    },
            {
                img: "img/gallery/decoart.png"
    },
            {
                img: "img/gallery/acrylyte.png"
    },
            {
                img: "img/gallery/corriano.png"
    },
            {
                img: "img/gallery/stylite.png"
    },
            {
                img: "img/gallery/decopanel.png"
    },
            {
                img: "img/gallery/decoris.png"
    },
            {
                img: "img/gallery/forescolor.png"
    },
            {
                img: "img/gallery/fashionwall.png"
    },
            {
                img: "img/gallery/emporio.png"
    },
            {
                img: "img/gallery/matrixwall.png"
    },
            {
                img: "img/gallery/solido.png"
    },
            {
                img: "img/gallery/d3wall.png"
    },
            {
                img: "img/gallery/europratik.png"
    }];
        $scope.slide = [
    'img/mikano/1.jpg',
    'img/mikano/2.jpg',
    'img/mikano/3.jpg',
    'img/mikano/4.jpg'
    ];
        $scope.open = function () {
            ngDialog.open({
                template: 'views/content/galleryimage.html',
                scope: $scope,
                controller: 'GalleryCtrl'
            });
        }
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

        $scope.molding = [
            {
                img: "img/acrylyte/sample/8801.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8802.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8803.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8804.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8805.jpg",
                name: "Acrylyte"
    }

    ];

        $scope.panel = [
            {
                img: "img/acrylyte/sample/8801.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8802.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8803.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8804.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8805.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8806.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8807.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8808.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8809.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8810.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8811.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8812.jpg",
                name: "Acrylyte"
    },
            {
                img: "img/acrylyte/sample/8813.jpg",
                name: "Acrylyte"
   },
            {
                img: "img/acrylyte/sample/8814.jpg",
                name: "Acrylyte"
 },
            {
                img: "img/acrylyte/sample/8815.jpg",
                name: "Acrylyte"
},
            {
                img: "img/acrylyte/sample/8816.jpg",
                name: "Acrylyte"
},
];
        $scope.oneAtATime = true;
        $scope.open = function (image) {
            $scope.imgsrc = image.img;
            ngDialog.open({
                template: 'views/content/quickview.html',
                scope: $scope,
                controller: 'CategoryCtrl'
            });
        };

    })
    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.getclass = "down-yes";
        $scope.open = function (get) {
            $scope.getclass = get;
        };
    })

;
//$scope.toggle = function (flag) {
//    //            if (flag = true) {
//    //                $scope.showsearch = !$scope.showsearch;
//    //            } else {
//    $scope.showsearch = flag;
//    //            }
//}
