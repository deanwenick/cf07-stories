/*
code for the story template
*/
Template.story.votes = function() {
    return Session.get('votes') || this.votes;
};

Template.story.events({
    'click #seeShow' : function() {
        var photos = this.photos;
        photos = _.map(photos,function(url){return "/pics/"+url;});
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

    'click #vote' : function() {
        //alert($('h3').html());
        //alert(this.photographer);
        this.votes ++;
        //$('p span').html(this.votes);
        console.log("voting");
        Session.set(this.votes);
    },

    'click #createStory' : function() {
        Stories.insert(
                {
                photographer: "albert",
                editor: "test Editor",
                votes: 1,
                photos: ["wenick_20130409_149.jpg", "wenick_20130409_158.jpg", "wenick_20130409_203.jpg", "wenick_20130409_212.jpg", "wenick_20130409_236.jpg"],
                comments: "Bill's Party"
                },
                function(err, result) {
                    if(err) {
                        alert(err);
                    } else {
                        alert(result);
                    }
                }
            );

    }
});

