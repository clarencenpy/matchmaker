var Data = {
    people: [
        {
            name: "Ivy",
            age: 21,
            sex: "female",
            status: "green",
            displayMessage: "I like hot guys!",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: ['badminton','baking','cooking'],
            views: 12, //num of people that flipped the card
            flowers: [
                {
                    flower: "Rose",
                    meaning: "I love you",
                    sender: "Jesper"
                }
            ]
        },
        {
            name: "Jesper",
            age: 24,
            sex: "male",
            status: "red",
            views: 2,
            displayMessage: "I'm sexy and i know it!",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: ['basketball','sports']
        },
        {
            name: "Wei Jie",
            age: 24,
            sex: "male",
            status: "orange",
            views: 0,
            displayMessage: "I eat well",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: ['eating']
        }
    ]
};

var App = {
    init: function () {
        App.loadPeople();
    },
    loadPeople: function () {
        var $peopleList = $('#people-list');
        Data.people.forEach(function (p) {
            var template = $('#people-list-template').html();

            $peopleList.append(Mustache.render(template,p));
            $peopleList.append(Mustache.render(template,p));
            $peopleList.append(Mustache.render(template,p));
            $peopleList.append(Mustache.render(template,p));
        });
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
    }
};

$(function () {
    App.init();
});
