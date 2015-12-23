'use strict';

(function() {

  /**
   * Main Controller
   * @description this is the main controller with the main feedback
   * @author Samuel Castro
   * @since 12/22/15
   */
class MainController {

  constructor($http) {
    this.$http = $http;
    this.mainFeedbacks = [];

    /**
     * Getting all feedback on the home screen
     */
    $http.get('/api/feedbacks').then(response => {
      this.mainFeedbacks = response.data;
    });
  }
}

angular.module('crewcoveryFeedbackApp')
  .controller('MainController', MainController);

})();
