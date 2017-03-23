(function() {
    //namespace
    window.AppJugador = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };
    //Single model
    AppJugador.Models.Jugador = Backbone.Model.extend({
        defaults: {
            name: 'anyNameHere',
            surname: 'perez',
            position: 'posicion',
            number: '1',
            peso: 100,
            altura: 104,
            mote: 'el carnicero',
            imagen: '/img/example.jpg',
            equipo: 'canoe',
            imagenEquipo: '/img/equipos/canoe.jpg'

        }
    });
    //Collection model
    AppJugador.Collections.Jugadores = Backbone.Collection.extend({
        model: AppJugador.Models.Jugador
    });

    //Funcion para cambiar template
    window.template = function(id) {
        return _.template($('#' + id).html());
    };
    //single View
    AppJugador.Views.Jugador = Backbone.View.extend({
        tagName: 'li',
        //llamamos a la funcion template(id);
        template: template('jugadorTemplate'),

        //Imprimir
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    //collection view
    AppJugador.Views.Jugadores = Backbone.View.extend({
        tagName: 'ul',

        render: function() {
            this.collection.each(function(jugador) {
                var jugadorView = new AppJugador.Views.Jugador({ model: jugador })
                this.el.append(jugadorView.render().el)
            }, this)
            return this;
        }
    });
    var jugadoresCollection = new AppJugador.Collections.Jugadores([{
            name: 'Santiago',
            surname: 'Ojeda Botan',
            position: 'Pilier',
            number: '8',
            peso: 108,
            altura: 197,
            mote: 'el bokeron',
            imagen: '/img/example.jpg',
            equipo: 'Club Deportivo Español',
            imagenEquipo: '/img/equipos/canoe.jpg'
        },
        {
            name: 'Javier',
            surname: 'Couce Langa',
            position: 'Suplente',
            number: '99',
            peso: 96,
            altura: 195,
            mote: 'el gordo',
            imagen: '/img/example.jpg',
            equipo: 'Club Real Madrid',
            imagenEquipo: '/img/equipos/canoe.jpg'
        },
        {
            name: 'Pablo',
            surname: 'Desantes Fernandez',
            position: 'Medio Melee',
            number: '4',
            peso: 68,
            altura: 189,
            mote: 'el negro',
            imagen: '/img/example.jpg',
            equipo: 'Club Real Canoe',
            imagenEquipo: '/img/equipos/canoe.jpg'
        }
    ]);
    var jugadoresView = new AppJugador.Views.Jugadores({ collection: jugadoresCollection });
    $("#main").html(jugadoresView.render().el);

    //$(document.body).append(jugadoresView.render().el);
})();