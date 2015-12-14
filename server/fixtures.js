Meteor.startup(function () {
    if (Profiles.find().count() === 0) {
        Profiles.insert({
            name: "Clarence",
            age: 22,
            sex: "male",
            status: "green",
            views: 2,
            displayMessage: "Single and available",
            image: "images/avatar.jpg",
            interests: ['basketball', 'sports']
        })
    }
});