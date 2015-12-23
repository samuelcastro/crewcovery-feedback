'use strict';

/**
 * NavBar Controller
 * @description Defining our navbar
 * @author Samuel Castro
 * @since 12/22/15
 */
class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
    {
    'title': 'Feedback',
    'state': 'feedback'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('crewcoveryFeedbackApp')
  .controller('NavbarController', NavbarController);
