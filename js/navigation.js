var adminurl = "http://192.168.0.123/eurobackend/index.php/json/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "#/home"
    }]
  }, {
    name: "Features",
    active: "",
    link: "#/feature",
    classis: "active",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
    getSlider: function(callback) {
      $http.get(adminurl + 'getSlider').success(callback);
    },
    getExclusiveProduct: function(callback) {
      $http.get(adminurl + 'getExclusivePdt').success(callback);
    },
    getGallery: function(callback) {
      $http.get(adminurl + 'getAllCategories').success(callback);
    },
    getSlide: function(callback) {
      $http.get(adminurl + 'getGalleryImages').success(callback);
    },
    eachPopularProduct: function(id, callback) {
      $http.get(adminurl + 'getEachPopularProduct/'+ id).success(callback);
    },
    getEachProductGallery: function(id,callback) {
      // console.log(id);
      $http.get(adminurl + 'getEachProductGallery?id='+id).success(callback);
    },
    // getdownload:function(id,callback){
    //     $http.get(adminurl + 'getCategoryById?id='+id).success(callback);
    //
    // },
    contactSubmit:function(request,callback){

      $http({
        url: adminurl + 'contactUs',
        method: 'POST',
        withCredentials: true,
        data: {
          "name":request.name,
          "email": request.mail,
          "telephone":request.telephone,
          "comment":request.comment
        }
      }).success(callback);
    },
    getHomePics: function (callback) {
      $http.get(adminurl+'getHomePageImage').success(callback);
    //   $http({
    //     url: adminurl + 'getHomePageImage',
    //     method: 'GET',
    //     withCredentials: true,
    //     data: {
    //       "image1":"img/adhesive-banner.jpg",
    //       "image2":"img/1.jpg",
    //       "image3":"img/2.jpg"
    //     }
    //   }).success(callback);
    },

    subscribe: function (mail, callback) {
      // console.log(mail);
      $http.get(adminurl + 'getSubscribers?email='+ mail).success(callback);
    },

    getPopularPdts:function (callback) {
      $http.get(adminurl+'getPopularProduct').success(callback);
    },

    getCategoryImages:function (id, callback) {
      $http.get(adminurl+'getEachPopularProduct?id='+id).success(callback);
    },

    getAllProducts:function (callback) {
      $http.get(adminurl+'getAllCategories').success(callback);
      //$http.get('http://amit.io/selfbackend/index.php/json/getCategory').success(callback);
    },

    getEachCategory: function (id, callback) {
      // console.log('nsId: ', id);
      $http.get(adminurl + 'getCategoryById?id=' + id).success(callback);
    },

    getEachSeries: function (id, callback) {
      // console.log('Code: ', id);
      // console.log('Code: ', id);
      $http.get(adminurl + 'getProductsByCategory?categoryid=' + id).success(callback);
    },

    getEachSeriesPdts:function (id, code, callback) {
      console.log('Id: ', id);
      console.log('Code: ', code);
      $http.get(adminurl + 'getProductsByCategory?categoryid=' + id + '&subcategories=' + code).success(callback);
    }
  }
});
