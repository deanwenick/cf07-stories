if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to metTest.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
        //append p with contents of h1
        $('body').append('<p>' + $('h1').html() + '</p>');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("I am Meteor, hello.");
  });
}
