(function() {

    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };
    App.Models.Player = Backbone.Model.extend({
        defaults: {
            name: 'anyNameHere',
            surname: 'perez',
            position: 'posicion',
            number: '1',
            peso: 100,
            altura: 104,
            mote: 'el carnicero',
            imagen: '/img/example.jpg',
            equipo: 'canoe'

        }
    });
    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'show': 'show',
            'show/:id': 'show',
            'download/*random': 'download',
            '*default': 'default'

        },
        index: function() {
            $('#main').html("Index route has been called..");
        },
        show: function() {
            $('#main').html("Show route has been called..");
        },
        show: function(id) {
            $('#main').html("Show route has been called.. with id equals : " + id);
        },
        download: function(random) {
            $('#main').html("download route has been called.. with random equals : " + random);
        },
        default: function(other) {
            $('#main').html("This route is not hanled.. you tried to access: " + other);
        }
    })

    new App.Router;
    Backbone.history.start();
})();