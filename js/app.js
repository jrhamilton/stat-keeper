App = Ember.Application.create();

App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'stat-keeper'
});

App.Router.map(function() {
  this.resource('teams', function() {
    this.resource('team', { path: '/teams/:team_name' });
  });
});

App.TeamsRoute = Ember.Route.extend({
  model: function() {
    return teams;
  }
});

App.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return teams.findBy('name', params.team_name);
  }
});

App.TeamController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});
