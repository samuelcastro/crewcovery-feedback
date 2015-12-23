'use strict';

/**
 * Main routes
 * @description Defining the main routes
 * @author Samuel Castro
 * @since 12/22/15
 */
angular.module('crewcoveryFeedbackApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
