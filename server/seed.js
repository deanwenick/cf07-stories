/*
seed data if database is empty
## Fixtures ##
*/

//default "Fixture" data
if (Stories.find().count() === 0) {

    Stories.insert({
        title: "First Story"
    });

    Stories.insert({
        title: "Second Story"
    });

    Stories.insert({
        title: "Third Story"
    });

}