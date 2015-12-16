Template.leftPanel.helpers({
    self: function () {
        return Meteor.user().profile;
    }
});

Template.leftPanel.events({
    'click .btn-edit': function () {
        //show modal
        $('#profile-modal').modal({
            onApprove: function () {
                var $form = $('#profile-form');
                var p = {};
                p.name = $form.find('[name=name]').val();
                p.displayMessage = $form.find('[name=displayMessage]').val();
                p.image = $form.find('[name=image]').val();
                p.gender = $form.find('[name=gender]').val();
                p.status = $form.find('[name=status]').val();
                p.day = $form.find('[name=day]').val();
                p.month = $form.find('[name=month]').val();
                p.year = $form.find('[name=year]').val();
                p.interests = $form.find('[name=interests]').val();

                Meteor.users.update(Meteor.userId(), {$set: {profile: p}});
            }
        }).modal('show');
    }
});