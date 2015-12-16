Template.rightPanel.onRendered(function () {
    //init dimmer
    this.autorun(function () {
        Meteor.users.find({_id: {$ne: Meteor.userId()}});
        Meteor.setTimeout(function () {
            $('.special.cards .image').dimmer({
                on: 'hover'
            });
        },300);

    })
});

Template.rightPanel.helpers({
    people: function () {
        return Meteor.users.find({_id: {$ne: Meteor.userId()}});
    },
    compare: function () {
        return Session.get('activeComparison');
    }
});

Template.rightPanel.events({
    'click .btn-check': function () {
        var other = this.profile;
        var self = Meteor.user().profile;
        var activeComparison = {};
        activeComparison.interestPercent = _.intersection(self.interests, other.interests).length / _.union(self.interests, other.interests).length * 100;
        activeComparison.self = self;
        activeComparison.other = other;

        HTTP.post('https://api.vedicrishiastro.com/v1/match_making_report/', {
            data: {
                m_day: self.day,
                m_month: self.month,
                m_year: self.year,
                m_hour: 0,
                m_min: 0,
                m_lat: 0,
                m_lon: 0,
                m_tzone: 0,
                f_day: other.day,
                f_month: other.month,
                f_year: other.year,
                f_hour: 0,
                f_min: 0,
                f_lat: 0,
                f_lon: 0,
                f_tzone: 0
            },
            headers: {
                Authorization: 'Basic ' + btoa('5336:f511b3f93a36787f087adf65b8746d28')
            }
        }, function (error, result) {
            activeComparison.astrologyPercent = Math.round(result.data.ashtakoota.received_points / 36 * 100);
            activeComparison.advice = result.data.conclusion.match_report;
            Session.set('activeComparison',  activeComparison);

            //show modal
            $('#compare-modal')
                .modal('show')
            ;

            //init progress bars
            $('#interest-progress').progress({percent: activeComparison.interestPercent});
            $('#astrology-progress').progress({percent: activeComparison.astrologyPercent});
        });



    }
});