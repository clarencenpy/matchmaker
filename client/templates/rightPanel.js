Template.rightPanel.onRendered(function () {
    //init dimmer
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});

Template.rightPanel.helpers({
   people: function () {
       return Data.people;
   }
});