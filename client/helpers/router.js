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

    this.route('photog', {

        path: '/photog/:photographer',

        waitOn: function() {
            return Meteor.subscribe('photog', this.params.photographer);
        },

        data: function() {
            return {
                photog: Stories.find({photographer: this.params.photographer})
            };
        }
    });

    this.route('theEditor', {

        path: '/editor/:editor',

        waitOn: function() {
            return Meteor.subscribe('theEditor', this.params.editor);
        },

        data: function() {
            return {
                theEditor: Stories.find({editor: this.params.editor})
            };
        }
    });

    this.route('create', {
        path: '/create'
    });
});