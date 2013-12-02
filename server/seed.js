/*
seed data if database is empty
## Fixtures ##
*/

//default "Fixture" data
if (Stories.find().count() === 0) {

    Stories.insert({
        id: "001",
        title: "First Story",
        body: "bodyuno"
    });

    Stories.insert({
        id: "002",
        title: "Second Story",
        body: "body dos"
    });

    Stories.insert({
        id: "003",
        title: "Third Story",
        body: "body 3"
    });

}