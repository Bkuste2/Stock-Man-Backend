module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(100),
            notNull: true,
        },
        description: {
            type: Sequelize.STRING(500),
            notNull: true,
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            notNull: true,
        },
        quantity: {
            type: Sequelize.INTEGER,
            notNull: true,
        },
    },
    {
        timestamps: false,
    });
    return Product;
}