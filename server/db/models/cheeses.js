const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('cheeses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      'https://image.shutterstock.com/image-vector/yellow-smiley-face-your-design-260nw-1480904153.jpg'
  }
})
