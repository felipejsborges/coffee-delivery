import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      coffee: Model,
    },

    seeds(server) {
      server.create('coffee', {
        id: '1',
        type: 'espresso',
        title: 'Espresso',
        description:
          'Espresso is a coffee brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely ground coffee beans.',
        price: 2.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '2',
        type: 'cappuccino',
        title: 'Cappuccino',
        description:
          'Cappuccino is an Italian coffee drink that is traditionally prepared with double espresso, hot milk, and steamed milk foam.',
        price: 3.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '3',
        type: 'latte',
        title: 'Latte',
        description:
          'A latte is a coffee drink made with espresso and steamed milk.',
        price: 3.0,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '4',
        type: 'mocha',
        title: 'Mocha',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '5',
        type: 'americano',
        title: 'Americano',
        description:
          'Americano is a type of coffee drink prepared by brewing espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee.',
        price: 2.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '6',
        type: 'macchiato',
        title: 'Macchiato',
        description:
          'Macchiato is a coffee drink consisting of one or two shots of espresso marked with a small amount of foamed milk.',
        price: 3.0,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '7',
        type: 'flat_white',
        title: 'Flat White',
        description:
          'Flat White is a coffee drink consisting of espresso with microfoam.',
        price: 3.0,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '8',
        type: 'affogato',
        title: 'Affogato',
        description:
          'Affogato is a coffee-based dessert. It consists of one or more scoops of vanilla ice cream topped with a shot of hot espresso.',
        price: 3.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/coffees', (schema) => {
        return schema.coffees.all()
      })
    },
  })

  return server
}
