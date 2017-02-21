(function() {
    var app = angular.module('store', ['store-products']);

    // var gems = [];
    // app.controller('StoreController', function() {
    //     this.products = gems;
    // });

    app.controller('StoreController', ['$http', function($http) {
        var store = this;
        store.products = [];

        $http({
            method: 'GET',
            url: '/products.json'
        }).then(function successCallback(response) {
            store.products = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }]);


    /*var gems = [{
        name: 'Dodecahedron',
        price: 5,
        description: '...',
        canPurchase: true
    }, {
        name: 'Pentagonal Gem',
        price: 2.95,
        description: '...',
        canPurchase: false
    }];*/

    /*app.controller('GalleryController', function() {
        this.current = 0;
        this.setCurrent = function(newGallery) {
            this.current = newGallery || 0;
        };
    });*/

    app.controller('ReviewController', function() {
        this.review = {};

        this.addreview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();