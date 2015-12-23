'use strict';

(function() {

  /**
   * Feedback Controller
   * @description this is the feedback controller here you are able to create/edit/remove any feedbacks
   * @author Samuel Castro
   * @since 12/22/15
   */
  class FeedBackController {

    /**
     * Initializing all necssary variables
     * @param $http
     * @param $timeout
       */
    constructor($http, $timeout) {
      this.$http = $http;
      this.$timeout = $timeout;
      this.feedbacks = [];
      this.successAdded = false;
      this.errorMessage = false;

      /**
       * Getting all feedbacks if there anyone
       */
      $http.get('/api/feedbacks').then(response => {
        this.feedbacks = response.data;
    });
    }

    /**
     * Saving feedbacks
     * @param form
     */
    addFeedback(form) {
      let self = this;
      if (form.$valid) {
        if (this.newFeedback) {
          this.$http.post('/api/feedbacks', this.newFeedback)
            .then(res => {

              if(res.status === 201) {
                this.$http.get('/api/feedbacks').then(response => {
                  this.feedbacks = response.data;
                  this.successMessage = 'Your feedback has been sent successfully!';

                  form.$setPristine();
                  this.newFeedback = {};
                  $('#name').focus();

                  this.$timeout(function() {
                    self.successAdded = false;
                  }, 5000);
                });
              } else {
                this.errorMessage = res.errmsg;
              }
            });
        }
      }
    }

    /**
     * Updating feedbacks
     * @param form
     */
    updateFeedback(form) {
      let self = this;
      if (form.$valid) {
        if (this.newFeedback) {
          this.$http.put('/api/feedbacks/' + this.newFeedback._id, this.newFeedback)
            .then(res => {
              if(res.status === 200) {
                this.$http.get('/api/feedbacks').then(response => {
                  this.feedbacks = response.data;
                  this.successMessage = 'Feedback Updated successfully!';

                  form.$setPristine();
                  this.newFeedback = {};
                  $('#name').focus();

                  this.$timeout(function() {
                    self.successMessage = false;
                  }, 5000);
                });
              } else {
                this.errorMessage = res.errmsg;
              }
            });
        }
      }
    }

    /**
     * Preparing do edit
     * @param feedback
     */
    setEdit(feedback) {
      this.newFeedback = feedback;
    }

    /**
     * Removing feedbacks by id
     * @param feedback
     */
    removeFeedback(feedback) {
      this.$http.delete('/api/feedbacks/' + feedback._id)
      .then(res => {
        if(res.status === 204) {
          this.$http.get('/api/feedbacks').then(response => {
            this.feedbacks = response.data;
          });
        }
      })
    }
  }

  angular.module('crewcoveryFeedbackApp')
    .controller('FeedBackController', FeedBackController);

})();

