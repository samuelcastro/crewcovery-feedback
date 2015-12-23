'use strict';

/**
 * Footer directive
 * @description Creating our footer section
 * @author Samuel Castro
 * @since 12/22/15
 */
angular.module('crewcoveryFeedbackApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });
