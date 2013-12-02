/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allStories', function() {
  return Stories.find();
});

// Publish a single item

Meteor.publish('singleStory', function(id) {
  return Stories.find(id);
});