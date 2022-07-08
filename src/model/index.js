const dbConfig = require('../config/dbconfig');
const Sequelize = require('sequelize');

const { pool } = dbConfig
const { MAX, MIN, ACQUIRE, IDLE } = pool

const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool: {
            max: MAX,
            min: MIN,
            aquire: ACQUIRE,
            idle: IDLE,
        }
    }
)

const db = {
    Sequelize,
    sequelize,
}
db.users = require('./user.model')(db.sequelize, db.Sequelize),
db.users.sync()

module.exports = db;