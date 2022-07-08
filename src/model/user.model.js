module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING,
            unique: true,
            notNull: true,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            notNull: true,
        },
        password: {
            type: Sequelize.STRING,
            notNull: true,
        }
    },
    {
       timestamps: false, 
    })
    
    return User;
}