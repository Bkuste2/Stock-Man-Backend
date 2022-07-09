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

db.users = require('./user.model')(db.sequelize, db.Sequelize)
db.products = require('./product.model')(db.sequelize, db.Sequelize)

const run = async () => {
};

db.sequelize.sync({ force: true }).then(() => {
    run();
});

module.exports = db;