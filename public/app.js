var Data = {
    self: {
        name: "Clarence",
        age: 22,
        sex: "male",
        status: "red",
        views: 2,
        displayMessage: "Single and available",
        image: "images/avatar.jpg",
        interests: ['basketball', 'sports']
    },
    people: [
        {
            id: 1,
            name: "Ivy",
            age: 21,
            sex: "female",
            status: "green",
            displayMessage: "I like hot guys!",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: ['badminton', 'baking', 'cooking'],
            views: 12, //num of people that flipped the card
            likes: 0,
            flowers: [
                {
                    flower: "Rose",
                    meaning: "I love you",
                    sender: "Jesper"
                }
            ]
        },
        {
            id: 2,
            name: "Jesper",
            age: 24,
            sex: "male",
            status: "red",
            views: 2,
            likes: 0,
            displayMessage: "I'm sexy and i know it!",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: ['basketball','sports']
        },
        {
            id: 3,
            name: "Wei Jie",
            age: 24,
            sex: "male",
            status: "orange",
            views: 0,
            likes: 0,
            displayMessage: "I eat well",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: ['eating']
        }
    ]
};

var App = {
    init: function () {
        App.bindEvents();
        App.loadProfile();
        App.loadPeople();
    },
    bindEvents: function () {
        var $peopleList = $('#people-list');

        //check compatibility button
        $peopleList.on('click', '.btn-check', function () {
            var id = $(this).parents('.ui.card').data("id");
            App.checkCompatibility(id);
        });

        //send gift button
        $peopleList.on('click', '.btn-check', function () {
            var id = $(this).parents('.ui.card').data("id");
        });
    },
    loadProfile: function () {
        var template = $('#profile-template').html();
        $('#profile').html(Mustache.render(template, Data.self));
    },
    loadPeople: function () {
        var $peopleList = $('#people-list');
        Data.people.forEach(function (p) {
            var template = $('#people-list-template').html();

            $peopleList.append(Mustache.render(template, p));
            $peopleList.append(Mustache.render(template, p));
            $peopleList.append(Mustache.render(template, p));
            $peopleList.append(Mustache.render(template, p));
        });
        //init dimmer
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
    },
    checkCompatibility: function (id) {

        App.incrementViews(id);

        //inject template then show the modal
        var template = $('#compare-template').html();

        //retrieve the user to compare to
        var other = _.find(Data.people, function (p) {
            return p.id === id;
        });

        var data = {};
        //calculate common interest percent
        //intersecting interests / total interests
        //OR intersecting interests / own interests

        data.interestPercent = _.intersection(Data.self.interests, other.interests) / _.union(Data.self.interests, other.interests) * 100;
        data.astrologyPercent = 66;
        data.self = Data.self;
        data.other = other;

        //inject template
        $('#compare-modal').html(Mustache.render(template, data));

        //show modal
        $('#compare-modal')
            .modal('show')
        ;

        //init progress bars
        $('#interest-progress').progress();
        $('#astrology-progress').progress();
    },
    incrementLikes: function (id) {
        var p = _.find(Data.people, function (p) {
            return p.id === id;
        });
        p.likes++;
    },
    incrementViews: function (id) {
        var p = _.find(Data.people, function (p) {
            return p.id === id;
        });
        p.views++;
    }
};

$(function () {
    App.init();
});
