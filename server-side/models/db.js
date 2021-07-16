const { Sequelize }= require("sequelize");

const sequelize = new Sequelize("todos", "root", "123123", {
    host: "localhost",
    dialect: "mysql",
    logging: null
})

module.exports = sequelize;