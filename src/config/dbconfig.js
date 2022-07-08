module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'postgres',
    DB: 'stockman_db',
    DIALECT: 'postgres',
    pool: {
        MAX: 5,
        MIN: 0,
        ACQUIRE: 30000,
        IDLE:10000,
    }
}
