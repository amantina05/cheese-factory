const router = require('express').Router()

router.use('/users', require('./users'))

const Cheese = require('../db/models/cheeses')
const Wine = require('../db/models/wines')

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

router.get('/cheeses/:id', async (req, res, next) => {
  try {
    const singleCheese = await Cheese.findByPk(req.params.id)
    if (!singleCheese) {
      const error = Error('Our apologies we currently do not have that listed')
      error.status = 404
      return next(error)
    }
    res.json(singleCheese)
  } catch (error) {
    next(error)
  }
})

router.get('/wines/:id', async (req, res, next) => {
  try {
    const singleWine = await Cheese.findByPk(req.params.id)
    if (!singleWine) {
      const error = Error('Our apologies we currently do not have that listed')
      error.status = 404
      return next(error)
    }
    res.json(singleWine)
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
