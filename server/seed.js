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
        photos: ["/pics/wenick_20131110_171.jpg", "/pics/wenick_20131110_182.jpg", "/pics/wenick_20131110_186.jpg", "/pics/wenick_20131110_190.jpg", "/pics/wenick_20131110_205.jpg"],
        storyName: "D2BS est 2013"
    });

    Stories.insert({
        photographer: "Dean",
        editor: "Dean",
        votes: 1,
        photos: ["/pics/wenick_20130409_149.jpg", "/pics/wenick_20130409_158.jpg", "/pics/wenick_20130409_203.jpg", "/pics/wenick_20130409_212.jpg", "/pics/wenick_20130409_236.jpg"],
        storyName: "Bill's Party"
    });

    Stories.insert({
        photographer: "Dean Wenick",
        editor: "Dean",
        votes: 1,
        photos: ["/pics/wenick_20130714_083.jpg", "/pics/wenick_20130714_100.jpg", "/pics/wenick_20130714_104.jpg", "/pics/wenick_20130714_108.jpg", "/pics/wenick_20130714_171.jpg"],
        storyName: "See Jane Run"
    });

}