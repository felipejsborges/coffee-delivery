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
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 2.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '2',
        type: 'cappuccino',
        title: 'Cappuccino',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '3',
        type: 'latte',
        title: 'Latte',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
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
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 2.5,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '6',
        type: 'macchiato',
        title: 'Macchiato',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.0,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '7',
        type: 'flat_white',
        title: 'Flat White',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.0,
        image: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '8',
        type: 'affogato',
        title: 'Affogato',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
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
