/*
seed data if database is empty
## Fixtures ##
*/

//default "Fixture" data
if (Stories.find().count() === 0) {

    Stories.insert({
        photographer: "Dean",
        editor: "Dean",
        votes: 0,
        photos: ["wenick_20131110_171.jpg", "wenick_20131110_182.jpg", "wenick_20131110_186.jpg", "wenick_20131110_190.jpg", "wenick_20131110_205.jpg"],
        storyName: "D2BS est 2013"
    });

    Stories.insert({
        photographer: "Dean",
        editor: "Dean",
        votes: 1,
        photos: ["wenick_20130409_149.jpg", "wenick_20130409_158.jpg", "wenick_20130409_203.jpg", "wenick_20130409_212.jpg", "wenick_20130409_236.jpg"],
        storyName: "Bill's Party"
    });

    Stories.insert({
        photographer: "Dean Wenick",
        editor: "Dean",
        votes: 1,
        photos: ["wenick_20130714_083.jpg", "wenick_20130714_100.jpg", "wenick_20130714_104.jpg", "wenick_20130714_108.jpg", "wenick_20130714_171.jpg"],
        storyName: "See Jane Run"
    });

}