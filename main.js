if (Meteor.isClient) {
  $('document').ready(function(){$('body').css({"background-color": "#dddddd"});
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("I am Meteor, hello.");
  });
}
