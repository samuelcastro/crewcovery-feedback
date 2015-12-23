'use strict';

/**
 * Feedback routes
 * @description Defining the feedback routes
 * @author Samuel Castro
 * @since 12/22/15
 */
angular.module('crewcoveryFeedbackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        templateUrl: 'app/feedback/feedback.html',
        controller: 'FeedBackController',
        controllerAs: 'feedBackController'
      });
  });
