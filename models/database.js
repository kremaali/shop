const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
  define: {
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
