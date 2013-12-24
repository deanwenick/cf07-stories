/*
** This page loads last
*/

if (Meteor.isClient) {
    // code to run on client at startup after client directory

    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });
}

if (Meteor.isServer) {
    // code to run on server at startup after server directory
    
  Meteor.startup(function () {
  });
}
