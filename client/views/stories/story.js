/*
code for the story template
*/

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
    }
});

