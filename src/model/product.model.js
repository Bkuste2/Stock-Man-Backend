module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            notNull: true,
        },
        units: {
            type: Sequelize.INTEGER,
            notNull: true,
        },
        price: {
            type: Sequelize.DECIMAL(10,2),
            notNull: true,
        },
    },
    {
       timestamps: false, 
    })
}