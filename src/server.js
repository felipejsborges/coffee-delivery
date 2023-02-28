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
        tags: ['espresso', 'espresso', 'espresso'],
        title: 'Espresso',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 2.5,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '2',
        tags: ['cappuccino', 'cappuccino', 'cappuccino'],
        title: 'Cappuccino',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.5,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '3',
        tags: ['latte', 'latte', 'latte'],
        title: 'Latte',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.0,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '4',
        tags: ['mocha', 'mocha', 'mocha'],
        title: 'Mocha',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.5,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '5',
        tags: ['americano', 'americano', 'americano'],
        title: 'Americano',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 2.5,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '6',
        tags: ['macchiato', 'macchiato', 'macchiato'],
        title: 'Macchiato',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.0,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '7',
        tags: ['flat_white', 'flat_white', 'flat_white'],
        title: 'Flat White',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.0,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
      })
      server.create('coffee', {
        id: '8',
        tags: ['affogato', 'affogato', 'affogato'],
        title: 'Affogato',
        description: 'Mocha is a chocolate-flavored variant of a latte.',
        price: 3.5,
        imageUrl: 'https://unsplash.com/photos/nBJHO6wmRWw',
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
