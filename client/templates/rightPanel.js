Template.rightPanel.onRendered(function () {
    //init dimmer
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});

Template.rightPanel.helpers({
    people: function () {
        return Data.people;
    },
    compare: function () {
        return Session.get('activeComparison');
    }
});

Template.rightPanel.events({
    'click .btn-check': function () {
        var other = this;
        var activeComparison = {};
        activeComparison.interestPercent = _.intersection(Data.self.interests, other.interests).length / _.union(Data.self.interests, other.interests).length * 100;
        activeComparison.other = other;

        Session.set('activeComparison',  activeComparison);

        //show modal
        $('#compare-modal')
            .modal('show')
        ;

        //init progress bars
        $('#interest-progress').progress({percent: activeComparison.interestPercent});
        $('#astrology-progress').progress();

    }
});