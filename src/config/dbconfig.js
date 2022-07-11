const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions:{
      ssl: {
          rejectUnauthorized: false,
      },
  },
});

sequelize.authenticate().then(() => console.log("Connection has been established successfully!"))
.catch((err) => console.log("Unable to connect to database. Error: " + err));

module.exports = sequelize; 
