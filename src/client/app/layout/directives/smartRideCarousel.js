define(['layout/module','angular-bootstrap','bootstrap'], function (module) {

    'use strict';

    return module.registerDirective('smartRideCarousel', function () {
        return {
            restrict: 'A',
            compile: function (tElement, tAttributes) {
                
                tElement.carousel(tElement.data());
            }
        }
    });
});
