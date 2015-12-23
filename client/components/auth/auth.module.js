'use strict';

angular.module('crewcoveryFeedbackApp.auth', [
  'crewcoveryFeedbackApp.constants',
  'crewcoveryFeedbackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
