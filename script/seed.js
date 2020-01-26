'use strict'

const db = require('../server/db')
const {User, Cheese, Wine} = require('../server/db/models')
// const Cheese = require('../server/db/models/cheeses')
// const Wine = require('../server/db/models/wines')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const cheese = await Promise.all([
    Cheese.create({
      name: 'Cheese 1',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1688/1_TruffleGouda1.jpg',
      description: '2'
    }),
    Cheese.create({
      name: 'Cheese 2',
      imageUrl:
        '/Users/amantinasosa/Desktop/Practice Projects/cheese-factory2/public/2_EsquirrouPetitOssauIraty.jpg',
      description: '1'
    })
  ])

  const wine = await Promise.all([
    Wine.create({
      name: 'Wine 1',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1688/1_TruffleGouda1.jpg',
      description: '2'
    }),
    Wine.create({
      name: 'Wine 2',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1688/1_TruffleGouda1.jpg',
      description: '1'
    })
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${cheese.length} cheeses`)
  console.log(`seeded ${wine.length} wines`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
