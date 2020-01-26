const router = require('express').Router()

router.use('/users', require('./users'))

const Cheese = require('../db/models/cheeses')
const Wine = require('../db/models/wines')

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

router.get('/cheeses', async (req, res, next) => {
  try {
    const allCheese = await Cheese.findAll()
    res.json(allCheese)
  } catch (error) {
    next(error)
  }
})

router.get('/wines', async (req, res, next) => {
  try {
    const allWine = await Wine.findAll()
    res.json(allWine)
  } catch (error) {
    next(error)
  }
})
module.exports = router
