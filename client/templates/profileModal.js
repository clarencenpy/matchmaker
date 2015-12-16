Template.profileModal.onRendered(function () {
    $('select.dropdown')
        .dropdown()
    ;
});

Template.profileModal.helpers({
    self: function () {
        return Meteor.user().profile;
    },
    equals: function (a, b) {
        return a === b;
    },
    contains: function (arr, i) {
        return arr.indexOf(i) !== -1;
    }
});