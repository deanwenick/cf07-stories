/*
client side router
using iron router
*/

//config

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('home', {
    path: '/'
});