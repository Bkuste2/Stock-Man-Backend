const Sequelize = require('sequelize');
const sequelize = require('../config/dbconfig');

const { pool } = sequelize
const { MAX, MIN, ACQUIRE, IDLE } = pool

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