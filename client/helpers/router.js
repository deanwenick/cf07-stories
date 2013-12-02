/*
client side router
using iron router
*/

//config

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.map(function() {

    //routes to pages

    this.route('home', {
        path: '/'
    });


    //routes to stories

    this.route('stories', {
        path: '/stories',

        waitOn: function() {
            return Meteor.subscribe('allItems');
        },
        data: function() {
            return {
                stories: Stories.find()
            };
        }
    });


});