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
        waitOn: function() {
            return Meteor.subscribe('allStories');
        },

        data: function() {
            return {
                stories: Stories.find()
            };
        }
    });

    this.route('story', {
        
        path: '/stories/:_id',

        waitOn: function() {
            return Meteor.subscribe('singleStory', this.params._id);
        },
        data: function() {
            return {
                story: Stories.findOne(this.params._id)
            };
        }
    });


});