/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Feedback from '../api/feedback/feedback.model';
import User from '../api/user/user.model';

Feedback.find({}).removeAsync()
  .then(() => {
    Feedback.create({
      name: 'Samuel Castro',
      info: 'Hiii Lucy, this is my awesome feedback, I hope you enjoy it. :)'
    },{
      name: 'Samuel Castro',
      info: 'Hiii Lucy, this is my awesome feedback, I hope you enjoy it. :)'
    },{
      name: 'Samuel Castro',
      info: 'Hiii Lucy, this is my awesome feedback, I hope you enjoy it. :)'
    },{
      name: 'Samuel Castro',
      info: 'Hiii Lucy, this is my awesome feedback, I hope you enjoy it. :)'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
