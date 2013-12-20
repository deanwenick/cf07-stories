/*
code for the header template
*/
  
//sample use of getCurrentEmail()  
/*Template.header.events({
    'click h1': function(e, templ) {
        var email = getCurrentEmail();
        alert(email);
    }
});*/

Template.header.rendered = function () {
    console.log(1);
    $("#instructions").tooltip({
         show: {
            effect: "slideDown",
            delay: 250
        }
    });
};