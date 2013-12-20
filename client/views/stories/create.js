
Template.create.events({

'click #createNew': function() {

    Stories.insert(
                {
                photographer: Meteor.user().username,
                editor: Meteor.user().username,
                votes: 0,
                photos: photos,
                storyName: name
                },
                function(err, result) {
                    if(err) {
                        alert(err);
                    } else {
                        return Router.go/stories/result;
                    }
                }
            );
}
});