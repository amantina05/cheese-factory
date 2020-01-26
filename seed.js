const {db} = require('./server/db')
const {green, red} = require('chalk')
const Cheese = require('./server/db/models/cheeses')
const Wine = require('./server/db/models/wines')

const seed = async () => {
  await db.sync({force: false})

  // seed your database here!

  Cheese.create({
    name: 'Cheese 1',
    imageUrl: 'https://www.',
    description: '2'
  })
  Cheese.create({
    name: 'Cheese 2',
    imageUrl: 'https://www.',
    description: '1'
  })

  Wine.create({
    name: 'Wine 1',
    imageUrl: 'https://www.',
    description: '2'
  })
  Wine.create({
    name: 'Wine 2',
    imageUrl: 'https://www.',
    description: '1'
  })

  console.log(green('Seeding success!'))
  // db.close();
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
