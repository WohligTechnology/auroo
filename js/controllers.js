window.onload = function() {
  $.jStorage.flush();
};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'ngDialog', 'angular-flexslider', 'infinite-scroll'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.products = false;

  // $.jStorage.flush();
  NavigationService.getHomePics(function(data) {
    $scope.homeImage = data[0];
    console.log($scope.homeImage);
  });

  NavigationService.getPopularPdts(function(data) {
    $scope.brandlist = data;
  });
  NavigationService.getArrival(function(data) {
      $scope.arrivallist = data;
      console.log("arrival", $scope.arrivallist);
  });

  $scope.getCategory = function(brandId) {
    // console.log('Brand Id:', brandId);
    NavigationService.getCategoryImages(brandId, function(data) {
      if (data) {
        // console.log('nav service:', brandId);
        // console.log('nav service:', data);
        $scope.products = data;
      }
    });
  };

  $scope.subscribe = {};
  $scope.subscribe.email = "";
  //
  // $scope.checkemail=function(email){
  //
  // }

  $scope.checkEmail = false;
  $scope.subscribeEmail = false;
  $scope.subscribe = function(email) {
    // if(!email) {
    //     alert("please enter your email");
    // }
    // console.log('Email subscribe: ', email);
    NavigationService.subscribe(email, function(data) {

      // console.log(data);
      if (!data.value) {
        if ($scope.subscribe.email) {
          $scope.checkEmail = true;
          $scope.subscribeEmail = false;
        }
      } else {
        $scope.subscribeEmail = true;
        $scope.checkEmail = false;
      }
      //console.log(email);
      $scope.subscribe.email = "";
    });

    // $scope.subscribeEmail = data;
  };


  // $scope.showopup = {};
  $scope.pro = function(open) {
    $scope.products = open;
  };

  $scope.open = function(data) {
    $scope.showpop = data;
    ngDialog.open({
      template: 'views/content/quickview.html',
      scope: $scope,
      controller: 'HomeCtrl'

    });

  };

  // $.jStorage.set('popNot', true);
  // console.log('popNot value: ', $.jStorage.get('popNot'));
  popNot = $.jStorage.get('popNot');
  $scope.popme = function() {
    ngDialog.open({
      template: 'views/content/popup.html',
      scope: $scope
    });
  };

  $scope.close = function() {
    $.jStorage.set('popNot', true);
    // console.log('popNot value: ', $.jStorage.get('popNot'))
  };

  if (!popNot) {
    $scope.popme();
  }

  NavigationService.getSlider(function(data) {
    $scope.slides = data;

    // console.log('slider: ', $scope.slides);
  });

  NavigationService.getExclusiveProduct(function(data) {
    $scope.exclusiveProduct = data;
    // console.log($scope.exclusiveProduct);
  });

  // $scope.products = [{
  //   img: "img/products/8.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }, {
  //   img: "img/products/7.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }, {
  //   img: "img/products/5.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }, {
  //   img: "img/products/4.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }];

  // $scope.brandlist = [{
  //   back_img: "img/brandlist/acrylamhov.png",
  //   img: "img/brandlist/acrylam.png",
  //   show: false,
  // }, {
  //   back_img: "img/brandlist/acrylytehov.png",
  //   img: "img/brandlist/acrylyte.png",
  //   show: false,
  //   products: [{
  //     img: "img/acrylyte/sample/8801.jpg",
  //     name: "Acrylyte",
  //     code: "8801",
  //     size: "1220 x 2440mm x 3mm (T)"
  //   }, {
  //     img: "img/acrylyte/sample/8802.jpg",
  //     name: "Acrylyte",
  //     code: "8802",
  //     size: "1220 x 2440mm x 3mm (T)"
  //   }, {
  //     img: "img/acrylyte/sample/8803.jpg",
  //     name: "Acrylyte",
  //     code: "8803",
  //     size: "1220 x 2440mm x 3mm (T)"
  //   }, {
  //     img: "img/acrylyte/sample/8804.jpg",
  //     name: "Acrylyte",
  //     code: "8804",
  //     size: "1220 x 2440mm x 3mm (T)"
  //   }]
  // }, {
  //   back_img: "img/brandlist/corrianohov.png",
  //   img: "img/brandlist/corriano.png",
  //   show: false,
  // }];

  // $scope.producthov = [{
  //   img: "img/products/8.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }, {
  //   img: "img/products/7.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }, {
  //   img: "img/products/6.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }, {
  //   img: "img/products/5.jpg",
  //   name: "Zara",
  //   price: "25000"
  // }];

  $scope.prosee = false;

  $scope.proclick = function(index) {
    // console.log(index);
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
  };
})

.controller('NavBarCtrl', function($scope, $stateParams) {
  // $scope.states = {};
  // $scope.states.activeItem = 'item1';
  $scope.items = [{
    id: 'item1',
    title: 'Home',
    url: '#/'

  }, {
    id: 'item2',
    title: 'Know Us',
    url: '#/knowus'
  }, {
    id: 'item3',
    title: 'Products',
    url: "#/products"
  }, {
    id: 'item4',
    title: 'Gallery',
    url: "#/gallery"
  }, {
    id: 'item5',
    title: 'Download',
    url: "#/download"
  }, {
    id: 'item6',
    title: 'Contact Us',
    url: "#/contactus"
  }];
  // console.log('activeItem: ', $scope.states.activeItem);
  $scope.getLocation = function(id) {
    // $.jStorage.set('activeItem', id);
    // console.log('activeItem: ', $stateParams.activeItem);
    // $scope.location = $location;
    // console.log('location', $scope.location)
    // console.log('path', $location.url())
    // console.log('location1', $location)
    // $scope.exclusiveProduct = data;
    // console.log($scope.exclusiveProduct);
  };
  $scope.isActive = function(id) {
    // console.log('Testing item: ', $stateParams.activeItem)
    // console.log('Testing item2: ', id)
    // console.log("We're in the is active function!")
    if ($stateParams.activeItem == id)
      return true;
    return false;
  };
})

.controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout,ngDialog) {
  $scope.template = TemplateService.changecontent("contactus");
  $scope.menutitle = NavigationService.makeactive("Contact Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.formFeedback = {};

  $scope.mapopen = function() {
    ngDialog.open({
      template: "views/content/networkpop.html",
      scope: $scope,
      controller: "ContactUsCtrl"
    });
  }

  $scope.submitForm = function(formValid) {
    // console.log('form values: ', formData);
    // console.log('form values: ', formValid);
    // console.log('form values: ', $scope.formFeedback);
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.contactSubmit($scope.formFeedback, function(data) {
        // $scope.contact=data;
        // console.log($scope.contact);
      });
    } else {

    }
  };
})


.controller('DownloadCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("download");
  $scope.menutitle = NavigationService.makeactive("Downloads");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  NavigationService.getDownload(function(data) {
    $scope.download = data;
    // console.log($scope.download);
  });
  // $scope.getpdf=function(id)
  // {
  //   NavigationService.getdownload(id,function(data) {
  //     $scope.downloadpdf = data;
  //     console.log($scope.downloadpdf);
  //
  //   });
  //};
  // $scope.download = [{
  //   img: "img/gallery/decolite.png",
  //   pdf: "img/pdf/decolite.pdf"
  // }, {
  //   img: "img/gallery/lucento.png",
  //   pdf: "img/pdf/lucento.pdf"
  // }, {
  //   img: "img/gallery/mikano.png",
  //   pdf: "img/pdf/mikano.pdf"
  // }, {
  //   img: "img/gallery/vereno.png",
  //   pdf: "img/pdf/vereno.pdf"
  // }, {
  //   img: "img/gallery/acrylam.png",
  //   pdf: "img/pdf/acrylam.pdf"
  // }, {
  //   img: "img/gallery/egger.png",
  //   pdf: "img/pdf/egger.pdf"
  // }, {
  //   img: "img/gallery/flos.png",
  //   pdf: "img/pdf/flos.pdf"
  // }, {
  //   img: "img/gallery/decoart.png",
  //   pdf: "img/pdf/decoart.pdf"
  // }, {
  //   img: "img/gallery/acrylyte.png",
  //   pdf: "img/pdf/acrylyte.pdf"
  // }, {
  //   img: "img/gallery/corriano.png",
  //   pdf: "img/pdf/corriano.pdf"
  // }, {
  //   img: "img/gallery/stylite.png",
  //   pdf: "img/pdf/stylite.pdf"
  // }, {
  //   img: "img/gallery/decopanel.png",
  //   pdf: "img/pdf/decopanel.pdf"
  // }, {
  //   img: "img/gallery/decoris.png",
  //   pdf: "img/pdf/decoris.pdf"
  // }, {
  //   img: "img/gallery/forescolor.png",
  //   pdf: "img/pdf/forescolor.pdf"
  // }, {
  //   img: "img/gallery/fashionwall.png",
  //   pdf: "img/pdf/fashionwall.pdf"
  // }, {
  //   img: "img/gallery/emporio.png",
  //   pdf: "img/pdf/emporio.pdf"
  // }, {
  //   img: "img/gallery/matrixwall.png",
  //   pdf: "img/pdf/matrixwall.pdf"
  // }, {
  //   img: "img/gallery/solido.png",
  //   pdf: "img/pdf/solido.pdf"
  // }, {
  //   img: "img/gallery/d3wall.png",
  //   pdf: "img/pdf/d3wall.pdf"
  // }, {
  //   img: "img/gallery/europratik.png",
  //   pdf: "img/pdf/europratik.pdf"
  // }];
})

.controller('QuickviewCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("quickview");
  $scope.menutitle = NavigationService.makeactive("Quick View");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('SearchResultCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, ngDialog) {
  $scope.template = TemplateService.changecontent("searchresult");
  $scope.menutitle = NavigationService.makeactive("Search Results");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.name = "";
  $scope.products = [];
  //$scope.images = [];
  $scope.categoryid = $stateParams.id;
  $scope.pagenumber = 1;
  var lastpage = 1;
  $scope.objfilter = {};
  $scope.objfilter.name = $stateParams.name;
  $scope.objfilter.pageno = 1;
  $scope.pages = [1]
  $scope.noProducts = false;

  NavigationService.getsearchresult($scope.objfilter, function(data) {
    $scope.products = data.queryresult;
    console.log('productData: ', $scope.products);
    console.log('total: ', data.totalvalues);
    if(data.totalvalues == 0) {
      $scope.noProducts = true;
    }
    lastpage = data.lastpage;
    // _.each(data.queryresult, function(n) {
    //   $scope.products.push(n);
    // });
  });

  $scope.getSearchByCat = function () {
    NavigationService.getsearchresult($scope.objfilter, function(data) {
      // $scope.products = data.queryresult;
      console.log('productData: ', $scope.products);
      console.log('pages:', $scope.pages);
      // lastpage = data.lastpage;
      _.each(data.queryresult, function(n) {
        $scope.products.push(n);
      });
    });
  };

  // $scope.getSearchByCat();
    // NavigationService.getSearchSeriesPdts($scope.objfilter, function(data) {
  //
  // });
console.log('lastpage: ', lastpage);
$scope.loadMore = function() {
if (lastpage > $scope.objfilter.pageno) {
  // console.log('lastpageeee: ', lastpage)
  ++$scope.objfilter.pageno;
  $scope.pages.push($scope.objfilter.pageno);
  console.log('pages:', $scope.pages);
  $scope.getSearchByCat();
}
};


  $scope.open = function(data) {
    $scope.showpop = data;
    ngDialog.open({
      template: 'views/content/quickview.html',
      scope: $scope,
      controller: 'SearchResultCtrl'
    });
  };

})

.controller('GalleryimageCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    $scope.template = TemplateService.changecontent("galleryimage");
    $scope.menutitle = NavigationService.makeactive("Gallery Image");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    //$scope.slide = [];
    // NavigationService.getEachProductGallery(id,function(data) {
    //   $scope.slide = data;
    //   // console.log($scope.gallery);
    // });
  })

.controller('ProductDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    $scope.template = TemplateService.changecontent("productdetail");
    $scope.menutitle = NavigationService.makeactive("Product Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.selectedImage = {};
    $scope.selectedImage.image = "807.jpg";
    NavigationService.getProductDetail($stateParams.id,function(data) {
      $scope.productdata = data;
      console.log($scope.productdata);
    });

  })
  // .controller('FeaturespopCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {
  //   $scope.template = TemplateService.changecontent("featurespopup");
  //   $scope.menutitle = NavigationService.makeactive("Featurespopup");
  //   TemplateService.title = $scope.menutitle;
  //   $scope.navigation = NavigationService.getnav();
  //   //$scope.slide = [];
  //   // NavigationService.getEachProductGallery(id,function(data) {
  //   //   $scope.slide = data;
  //   //   // console.log($scope.gallery);
  //   // });
  // })

.controller('ProductsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("products");
  $scope.menutitle = NavigationService.makeactive("Products");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  NavigationService.getAllProducts(function(data) {
    $scope.brands = data;
    // console.log($scope.brands);
  });
  // [{
  //   img: "img/gallery/decolite.png"
  // }, {
  //   img: "img/gallery/lucento.png"
  // }, {
  //   img: "img/gallery/mikano.png"
  // }, {
  //   img: "img/gallery/vereno.png"
  // }, {
  //   img: "img/gallery/acrylam.png"
  // }, {
  //   img: "img/gallery/egger.png"
  // }, {
  //   img: "img/gallery/flos.png"
  // }, {
  //   img: "img/gallery/decoart.png"
  // }, {
  //   img: "img/gallery/acrylyte.png"
  // }, {
  //   img: "img/gallery/corriano.png"
  // }, {
  //   img: "img/gallery/stylite.png"
  // }, {
  //   img: "img/gallery/decopanel.png"
  // }, {
  //   img: "img/gallery/decoris.png"
  // }, {
  //   img: "img/gallery/forescolor.png"
  // }, {
  //   img: "img/gallery/fashionwall.png"
  // }, {
  //   img: "img/gallery/emporio.png"
  // }, {
  //   img: "img/gallery/matrixwall.png"
  // }, {
  //   img: "img/gallery/solido.png"
  // }, {
  //   img: "img/gallery/d3wall.png"
  // }, {
  //   img: "img/gallery/europratik.png"
  // }];
})

.controller('GalleryCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout) {
  $scope.template = TemplateService.changecontent("gallery");
  $scope.menutitle = NavigationService.makeactive("Gallery");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  NavigationService.getGallery(function(data) {
    $scope.gallery = data;
    // console.log($scope.gallery);
  });

  $scope.open = function(id) {
    NavigationService.getEachProductGallery(id, function(data) {
      $scope.slide = data;
      // console.log($scope.gallery);
    });
    ngDialog.open({
      template: 'views/content/galleryimage.html',
      scope: $scope,
      controller: 'GalleryCtrl'
    });
  };
})

.controller('BrandsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("brands");
    $scope.menutitle = NavigationService.makeactive("Brands");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.brandlist = [{
    //   img: 'img/brands/18.png'

    // }, {
    //   img: 'img/brands/1.png'
    // }, {
    //   img: 'img/brands/2.png'
    // }, {
    //   img: 'img/brands/3.png'
    // }, {
    //   img: 'img/brands/4.png'
    // }, {
    //   img: 'img/brands/5.png'
    // }, {
    //   img: 'img/brands/6.png'
    // }, {
    //   img: 'img/brands/7.png'
    // }, {
    //   img: 'img/brands/8.png'
    // }, {
    //   img: 'img/brands/9.png'
    // }, {
    //   img: 'img/brands/10.png'
    // }, {
    //   img: 'img/brands/11.png'
    // }, {
    //   img: 'img/brands/12.png'
    // }, {
    //   img: 'img/brands/13.png'
    // }, {
    //   img: 'img/brands/14.png'
    // }, {
    //   img: 'img/brands/15.png'
    // }, {
    //   img: 'img/brands/16.png'
    // }, {
    //   img: 'img/brands/17.png'
    // }];
  })
  .controller('KnowusCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout) {
    $scope.template = TemplateService.changecontent("knowus");
    $scope.menutitle = NavigationService.makeactive("Know Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('ComingsoonCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout) {
    $scope.template = TemplateService.changecontent("comingsoon");
    $scope.menutitle = NavigationService.makeactive("Coming Soon");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('NetworkCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout) {
    $scope.template = TemplateService.changecontent("network");
    $scope.menutitle = NavigationService.makeactive("Network");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })

.controller('CategoryCtrl', function($location, $state, $scope, TemplateService, NavigationService, ngDialog, $timeout, $stateParams) {
  $scope.template = TemplateService.changecontent("category");
  $scope.menutitle = NavigationService.makeactive("Category");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  // console.log('is series params: ', $stateParams.isSeries)
  // if($stateParams.isSeries) {
  //   console.log('for deep linking')
  //   NavigationService.getEachSeriesPdts(id, code, function (data) {
  //     $scope.isSeries = true;
  //     $scope.seriesProducts = data.data.queryresult;
  //     if($stateParams.isSeries)
  //     $state.go('category.series', {code: name})
  //   })
  // }
  // NavigationService.getAllProducts($stateParams.id, function (data) {
  //   $scope.category = data;
  //   // console.log('Category: ', $scope.category);
  //   // console.log('State: ', $stateParams.id);
  // })

  var url = window.location.href;
  //console.log('current url: ', url);
  if (url.match(/series.*/)) {
    // console.log('Testing 123')
    // console.log('params: ', $stateParams);
    var page = url.substring(url.lastIndexOf('/') + 1);
    // console.log('page: ', page);

    NavigationService.getEachSeries($stateParams.id, function(data) {
      $scope.series = data.filter.subcategory;
      // var l = $scope.series.length;
      // return l;
      // $scope.products = data.data.queryresult;
      // console.log($scope.series);
      // console.log('Series deep link: ', $scope.series.length);

      for (i = 0; i < $scope.series.length; i++) {
        if ($scope.series[i].name == page) {
          $scope.code = $scope.series[i].id;
        }
      }

      // console.log('code in deep link: ', $scope.code);
      NavigationService.getEachSeriesPdts($stateParams.id, $scope.code, function(data) {
        // $state.go('category.series', {code: name})
        $scope.isSeries = true;
        $scope.seriesProducts = data.data.queryresult;
        // console.log('seriesProducts: ', $scope.seriesProducts);
        // if($stateParams.isSeries)
      });
    });
  }

  //   NavigationService.getEachCategory($stateParams.id, function (data) {
  //     $scope.category = data;
  //     // console.log('Category: ', $scope.category);
  //     // console.log('State: ', $stateParams.id);
  //   })

  //   NavigationService.getEachSeries($stateParams.id, function (data) {
  //     $scope.series = data.filter.subcategory;
  //     $scope.products = data.data.queryresult;
  //     console.log('Series: ', $scope.seriesProducts);
  //   })
  // }

  // NavigationService.getAllProducts(function (data) {
  //   $scope.categories = data;
  //   // console.log('Category: ', $scope.category);
  //   // console.log('State: ', $stateParams.id);
  // });
  // NavigationService.getAllProducts(function(data){
  //  $scope.allcategory = data;
  //  _.each($scope.allcategory,function(key){
  //    key.isOpen=false;
  //  })

  $scope.isCategory = function(cat, category) {
    if (cat.id == category.id) {
      return true;
    }

    return false;
  };

  $scope.allcategory = [];
  NavigationService.getAllProducts(function(data) {
    $scope.allcategory = data;
    _.each($scope.allcategory, function(key) {
      key.isOpen = false;
    });
    // console.log($scope.allcategory);
  });

  $scope.isFeature = function(id) {
    for (var i = 0; i < $scope.allcategory.length; i++) {
      if ($scope.allcategory[i].id == id && $scope.allcategory[i].featureimage !== "") {
        $scope.featureimage = $scope.allcategory[i].featureimage;
        return true;
      }
    }
    return false;
  };

  NavigationService.getEachCategory($stateParams.id, function(data) {
    $scope.category = data;
    // console.log('Category: ', $scope.category);
    // console.log('State: ', $stateParams.id);
  });


  $scope.products = [];
  //$scope.images = [];
  $scope.categoryid = $stateParams.id;
  $scope.pagenumber = 1;
  var lastpage = 1;
  $scope.objfilter = {};
  $scope.objfilter.id = $stateParams.id;
  $scope.objfilter.pagenumber = 1;
  $scope.objfilter.subcat = '';

  NavigationService.getAllSeries(function(data) {
    $scope.allSeries = data;
  });

  $scope.getProductBuCategory = function() {
    NavigationService.getProductBuCategory($scope.objfilter, function(data) {
      NavigationService.getSeriesByCategory($stateParams.id, function(data) {
        console.log("dsfasdfasdf");
        $scope.series = data;
        $scope.series[0].class="cat-active";
        if ($stateParams.subid != 0) {
          _.each($scope.series, function(n) {
            if (n.id == $stateParams.subid)
              n.class = "cat-active";
            else
              n.class = "";
          });
        }
         //$scope.series[0].class="cat-active";
      });
        //$scope.series[0].class="cat-active";
      // if (data.filter.subcategory.Length >= $scope.series.length) {
      //   $scope.series = data.filter.subcategory;
      // }

      console.log(data);
      lastpage = data.data.lastpage;
      _.each(data.data.queryresult, function(n) {
        $scope.products.push(n);
      });

      // console.log('Length of products: ', $scope.products.length);
      //console.log('Series: ', $scope.seriesProducts);
      // console.log('products: ', $scope.products)
      // $scope.images[0] = $scope.products[0];
      // $scope.images[1] = $scope.products[1];
      // $scope.images[2] = $scope.products[2];
      // console.log('img0',$scope.images[0]);
      //   console.log('img1',$scope.images[1]);
      //     console.log('img2',$scope.images[2]);

    });
  };


  $scope.loadMore = function() {
    // console.log('$scope.images.length:',$scope.images.length);
    // var last = $scope.images.length;
    // for (var i = 0; i < 3; i++) {
    //   if ($scope.images.length < $scope.products.length) {
    //     $scope.images.push($scope.products[last + i]);
    //   }
    // }
    // console.log('images length:',$scope.images.length);
    // console.log('product 21:',$scope.products[21]);

    if (lastpage > $scope.objfilter.pagenumber) {
      ++$scope.objfilter.pagenumber;
      $scope.getProductBuCategory();
    }
  };
  console.log('pr before', $scope.products);
  $scope.eachSeries = function(id, code) {
    $scope.products = [];
    console.log('pr after', $scope.products);
    $scope.objfilter.pagenumber = 1;
    $scope.objfilter.subcat = code;
    $stateParams.subid = code;
    _.each($scope.series, function(n) {
      if (n.id == code)
        n.class = "cat-active";
      else
        n.class = "";
    });
    $scope.getProductBuCategory();
    // console.log('Id: ', id);
    // console.log('Code: ', code);
    // NavigationService.getEachSeriesPdts(id, code, function(data) {
    //   // $state.go('category.series', {code: name})
    //   $scope.isSeries = true;
    //   $scope.seriesProducts = data.data.queryresult;
    //   // if($stateParams.isSeries)
    // });
  };

  if ($stateParams.subid == 0) {
    NavigationService.getSeriesByCategory($stateParams.id, function(data) {
      console.log(data);
      $scope.objfilter.subcat = data[0].id;
      $scope.getProductBuCategory();
    });
  } else {
    $scope.eachSeries(0, $stateParams.subid);
  }

  $scope.oneAtATime = true;
  $scope.open = function(data) {
    $scope.showpop = data;
    ngDialog.open({
      template: 'views/content/quickview.html',
      scope: $scope,
      controller: 'CategoryCtrl'
    });
  };

  NavigationService.getfeature(function(data) {
    $scope.features = data;
    $scope.allFeatures = _.cloneDeep($scope.features);
    console.log('Feature:', $scope.features);
    // console.log(data);
  });
  $scope.feature = function(feature) {
    // var foundindex = _.findIndex($scope.allFeatures, {
    //   "id": catid
    // });
    // if (foundindex != -1) {
    //   $scope.featureimage = $scope.allFeatures[foundindex].featureimage;
    //   if ($scope.featureimage) {
    //
    //   }
    // }
    // $scope.feature = feature;
    ngDialog.open({
      template: 'views/content/featurespopup.html',
      scope: $scope,
      // controller: 'CategoryCtrl'
    });
  };

})

.controller('headerctrl', function($scope, TemplateService, NavigationService, $stateParams, $rootScope) {
  $scope.template = TemplateService;

  // NavigationService.getEachCategory($stateParams.id, function (data) {
  //   $scope.cat = data;
  //   // console.log('Category: ', $scope.category);
  //   // console.log('State: ', $stateParams.id);
  // });


  $scope.getclass = "down-yes";

  $scope.getsearch = function(name) {
    if ($scope.getclass === "down-yes")

      $scope.getclass = "down-no";
    else
      $scope.getclass = "down-yes";
  };
  // $scope.name = "";
  // $scope.getsearchresult = function() {
  //   NavigationService.getsearchresult($stateParams.name,function (data) {
  //     $scope.products = data;
  //    console.log($scope.products);
  //  });
  // };

  // $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  //   $(window).scrollTop(0);
  // });
  $scope.top = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  };

  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams) {
      // window.scrollTop = 0;
      setTimeout(function() {
        $(window).scrollTop(0);
      },100);


    });

});
