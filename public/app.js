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
            var html = '<div class="column green">';
            html += p.name;
            html += '</div>';

            $peopleList.append(html);
        })
    }
};

$(function () {
    App.init();
});
