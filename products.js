(function() {
    var app = angular.module('store-products', []);

    app.directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict: 'A',
            templateUrl: "product-specs.html"
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controllerAs: 'panel',
            controller: function() {
                this.tab = 1;

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                }

                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                }
            }
        };
    });

    app.directive("productGallery", function() {
        return {
            restrict: "E",
            templateUrl: "product-gallery.html",
            controllerAs: 'gallery',
            controller: function() {
                this.current = 0;
                this.setCurrent = function(imageNumber) {
                    this.current = imageNumber || 0;
                };
            }
        };
    });
})();