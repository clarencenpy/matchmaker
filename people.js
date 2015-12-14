Profiles = new Mongo.Collection('profiles');

Profiles.attachSchema(new SimpleSchema({
    userId: {
        type: String,
        defaultValue: ''
    },
    name: {
        type: String,
        max: 50
    },
    age: {
        type: Number,
        decimal: false
    },
    sex: {
        type: String,
        allowedValues: ['male', 'female']
    },
    status: {
        type: String,
        allowedValues: ['red', 'green', 'yellow']
    },
    views: {
        type: Number,
        decimal: false,
        defaultValue: 0
    },
    displayMessage: {
        type: String,
        max: 120
    },
    image: {
        type: String
    },
    interests: {
        type: [String],
        defaultValue: []
    }
}));
