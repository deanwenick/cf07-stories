/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allStories', function() {
  return Stories.find( {}, {sort: {storyName: 1}} );
});

// Publish a single item

Meteor.publish('singleStory', function(id) {
  return Stories.find(id);
});

//Publish a photographer's stories
//return in desc order
Meteor.publish('photog', function(photographer) {
    return Stories.find( {photographer: photographer},{sort: {votes: -1}} );
});

//Publish stories by an editor
//return in desc order
Meteor.publish('theEditor', function(editor) {
    return Stories.find( {editor: editor}, {sort: {votes: -1}} );
});