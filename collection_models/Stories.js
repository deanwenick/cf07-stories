/*
create new class by extending Meteor Collection class
*/

Stories = new Meteor.Collection('stories', {idGeneration: 'STRING'});

//global function to get current user email
getCurrentEmail = function() {
    return Meteor.user() &&
        Meteor.user().emails &&
        Meteor.user().emails[0].address;
};