'use strict';

/**
 * Crewcovery app
 * @description Defining all necessary modules of the crewcovery app
 * @author Samuel Castro
 * @since 12/22/15
 */
angular.module('crewcoveryFeedbackApp', [
  'crewcoveryFeedbackApp.auth',
  'crewcoveryFeedbackApp.admin',
  'crewcoveryFeedbackApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
