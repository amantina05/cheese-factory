// const Sequelize = require('sequelize')
// const pkg = require('../../package.json')

// const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// const db = new Sequelize(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
//   {
//     logging: false
//   }
// )
// module.exports = db

// // This is a global Mocha hook used for resource cleanup.
// // Otherwise, Mocha v4+ does not exit after tests.
// if (process.env.NODE_ENV === 'test') {
//   after('close database connection', () => db.close())
// }

/////////

'use strict'

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

// create the database instance that can be used in other database files
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false // so we don't see all the SQL queries getting made
})

module.exports = db
