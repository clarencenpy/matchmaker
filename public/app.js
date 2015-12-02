var Data = {
    people: [
        {
            name: "Ivy",
            age: 21,
            sex: "F",
            status: "Single",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: [],
            flips: 12, //num of people that flipped the card
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
            sex: "M",
            status: "Attached",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: []
        },
        {
            name: "Wei Jie",
            age: 24,
            sex: "M",
            status: "Attached",
            image: "http://sis.smu.edu.sg/sites/default/files/sis/students/BSc-ISM/2013/lee_chian_yee.jpg",
            interests: []
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
            var template = '<div class="column">\
            <div class="ui fluid card">\
                <div class="image">\
                <img src="{{image}}">\
                </div>\
                <div class="content">\
                <div class="header">{{name}}</div>\
            <div class="meta">\
                <a>Friends</a>\
                </div>\
                <div class="description">\
                Matthew is an interior designer living in New York.\
            </div>\
            </div>\
            <div class="extra content">\
                <span class="right floated">\
                Joined in 2013\
                </span>\
                <span>\
                <i class="user icon"></i>\
                75 Friends\
            </span>\
            </div>\
            </div>\
            </div>';

            $peopleList.append(Mustache.render(template,p));
        })
    }
};

$(function () {
    App.init();
});
