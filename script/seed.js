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
      name: 'Klare Melk Truffle Gouda',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1688/1_TruffleGouda1.jpg',
      description:
        'A rich, flavorful semi-firm cheese from Holland. Velvety notes of sweet cream and butter, generously laced with earthy truffles.'
    }),
    Cheese.create({
      name: 'Esquirrou Petit Ossau-Iraty',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1689/2_EsquirrouPetitOssauIraty.jpg',
      description:
        'The 2018 World Champion Cheese. A semi-firm sheep’s milk wonder — rich, nutty with aromas of fresh wheat'
    }),
    Cheese.create({
      name: 'Kaltbach Cave-Aged Le Gruyère',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1690/3_KaltbachCaveAgedLeGruyere.jpg',
      description:
        'A firm, almost crumbly alpine cheese from Switzerland. Robust, deeply flavored, with tangy fruit notes and classic nuttiness. Aged in sandstone caves.'
    }),
    Cheese.create({
      name: 'Vermont Creamery Bijou',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1702/4_VermontCreameryBijou.jpg',
      description:
        'A gem of a fresh cheese from Vermont. Creamy with unique sweetness from goat’s milk and a hint of yeast. Flavors evolve as it ages — excellent at 30 days.'
    }),
    Cheese.create({
      name: 'Hervé Mons Camembert',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1703/5_HerveMonsCamembert.jpg',
      description:
        'A classic from Normandy, aged to perfection by a third-generation affineur. Full-flavored, creamy and earthy with mushroom overtones. Only found at Whole Foods Market.'
    }),
    Cheese.create({
      name: 'Neal’s Yard Dairy Keen’s Cheddar',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1704/6_NealsYardDairyKeensCheddar.jpg',
      description:
        'This is a true Cheddar (actually from Cheddar Gorge, England) produced with raw milk. Dense, yet creamy with complex flavors ranging from fruity to mustardy. Five generations of cheesemaking = yes, please.'
    }),
    Cheese.create({
      name: 'Cypress Grove Humboldt Fog',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1706/7_CypressGroveHumboldtFog.jpg',
      description:
        'A goat’s milk soft-ripened original from California. Floral, herbaceous overtones, buttermilk, fresh cream flavors. Beautiful ribbon of edible ash through the center.'
    }),
    Cheese.create({
      name: 'Uplands Cheese Pleasant Ridge Reserve',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1705/8_UplandsCheesePleasantRidgeReserve.jpg',
      description:
        'A cow’s milk alpine-style cheese from Wisconsin. Washing in brine brings out a brothy sweetness. Flavors range from grassy to butterscotch and fruit. Made only from May to October, when the grass-fed milk is best.'
    }),
    Cheese.create({
      name: 'Saxon Creamery Hika Bay',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1707/9_SaxonCreameryHikaBay.jpg',
      description:
        'This semi-soft, Gouda-style cheese from Wisconsin was awarded Best In Class at the 2018 World Cheese Championships. Smooth, creamy, buttery. Lovely fruit notes. Made exclusively for Whole Foods Market.'
    }),
    Cheese.create({
      name: 'Rogue Creamery Organic Enraptured Blue',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1708/10_RogueCreameryOrganicEnrapturedBlue.jpg',
      description:
        'An organic blue cheese from Oregon. Soaking in a blend of organic grapes brings out rich, buttery notes of currants and berries. Earthy, herbaceous undertones. Savory finish. One of the few organic blues in the world from one of the best artisan producers in the United States. Whole Foods Market exclusive!'
    }),
    Cheese.create({
      name: 'Mitica Mini Drunken Goat',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1700/11_MiticaMiniDrunkenGoat.jpg',
      description:
        'A semi-firm goat’s milk cheese from Spain that’s nutty and aromatic. A three-day bath in Mourvèdre wine adds complexity and balances the mild creaminess.'
    }),
    Cheese.create({
      name: 'The Cellars at Jasper Hill Farm Willoughby, Kombucha Washed',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1701/12_Willoughby.jpg',
      description:
        'Soft-ripened, succulent and buttery. Aromas of roast beef and onion. The first and only kombucha-washed cheese in the world. Washing with kombucha brings out herb and peach flavors in the finish. Made exclusively for Whole Foods Market.'
    })
  ])

  const wine = await Promise.all([
    Wine.create({
      name: 'Bench Pinot Noir',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1688/1_TruffleGouda1.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Jacques Bardelot Champagne Brut Rosé',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1689/2_EsquirrouPetitOssauIraty.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Oyster Bay Rosé',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1690/3_KaltbachCaveAgedLeGruyere.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Paul Buisse Touraine Sauvignon Blanc',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1702/4_VermontCreameryBijou.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Jacques Bardelot Champagne Brut',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1703/5_HerveMonsCamembert.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Château Miqueu Haut-Médoc',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1704/6_NealsYardDairyKeensCheddar.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Grace Hale Sparkling Sauvignon Blanc',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1706/7_CypressGroveHumboldtFog.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Domaine Chanson Vire-Clesse',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1705/8_UplandsCheesePleasantRidgeReserve.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Bread & Butter Chardonnay',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1707/9_SaxonCreameryHikaBay.jpg',
      description: ''
    }),
    Wine.create({
      name: '5th & Bowie Bourbon Barrel Aged Cabernet Sauvignon',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1708/10_RogueCreameryOrganicEnrapturedBlue.jpg',
      description: ''
    }),
    Wine.create({
      name: 'Bodini Cielo Rojo',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1700/11_MiticaMiniDrunkenGoat.jpg',
      description: ''
    }),
    Wine.create({
      name: 'G.D. Vajra Barbera d’Alba',
      imageUrl:
        'https://holiday.wholefoodsmarket.com/static/1701/12_Willoughby.jpg',
      description: ''
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
