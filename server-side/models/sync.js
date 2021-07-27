// 同步模型

require("./Admin");
require("./LoveLitter");
const sequelize = require("./db");
sequelize.sync({alter: true}).then(() => {
    console.log("所有模块导入完成");
})