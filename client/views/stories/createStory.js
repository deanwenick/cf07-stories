
Template.createStory.events({

    'click #createNewStory': function() {
        //submit placeholder data
        Stories.insert(
            {
            photographer: Meteor.user().username,
            editor: Meteor.user().username,
            votes: 0,
            photos: "",
            storyName: ""
            },
            //this works from some routes and not others
            //router works from '/', '/stories/', not from /stories/:anything"
            function(err, result) {
                if(err) {
                    alert(err);
                } else {
                    return Router.go('/stories/' + result);
                }
            }
        );// /insert
    }// /createNewStory
});

/*
// gets file upload info
var pFile = document.getElementById('fileUpload'); console.dir(pFile.files[0])
*/