angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.slides = [
        'img/slider/1.jpg',
        'img/slider/2.jpg',
        'img/slider/3.jpg'
    ];
    $scope.products = [{
            img: "img/Products/7.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/6.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/5.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/4.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/3.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/2.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/Products/1.jpg",
            name: "Zara",
            price: "25000"
    }
                      ];
})

.controller('FeatureCtrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
    })
    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
    })

;
