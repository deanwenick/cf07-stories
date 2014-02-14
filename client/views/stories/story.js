/*
code for the story template
*/

Template.story.rendered = function () {

    $('#storyView').sortable();

    if(Meteor.user()){
        $( "#storyView" ).on( "sort", function( event, ui ) {
            $('#createStory').removeClass('disabled');
        } );
    }

};

Template.story.events ({
    'click #seeShow' : function() {

        var list = $('#storyView li img');
        var photos = _.map(list, function(pic){
           return $(pic).attr('src');
        });

        $.iLightBox(

            photos,

            {
                skin: 'metro-black',
                maxScale: 1,
                fullViewPort: 'fill',
                fullStretchTypes: 'image',
                fullAlone: true,
                path: 'horizontal',
                controls: {
                    slideshow: true,
                    thumbnail: false
                },
                slideshow: {
                    startPaused: false,
                    pauseTime: 2000
                },
                overlay: {
                    opacity: 1
            }
        });
    },

    'click #vote' : function(evt, templ) {
        if(Meteor.user()){
        Stories.update(this._id, {$inc: {votes: 1}});
        } else {
            var tip = $('#vote').attr('data-user');
            tip = "<div title='Log in please'><p>" + tip + "</p></div>";
            $(tip).dialog({
                height: 140,
                modal: true
                });
        }
    },

    'click #createStory' : function() {

        var list = $('#storyView li img');
        var photos = _.map(list, function(pic){
            return $(pic).attr('src');
        });

        Stories.insert(
                {
                photographer: this.photographer,
                editor: Meteor.user().username,
                votes: 0,
                voters: [Meteor.userId()],
                photos: photos,
                storyName: this.storyName
                },
                function(err, result) {
                    if(err) {
                        alert(err);
                    } else {
                        alert(result);
                        Router.go('/stories/'+result);
                    }
                }
            );
    }
});// /events

Template.story.isUser = function() {
    return Meteor.userId();
};

Template.story.getUser = function() {
    return Meteor.users.findOne(this).username;
};

