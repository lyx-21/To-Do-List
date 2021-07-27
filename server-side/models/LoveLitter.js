const sequelize = require('./db');
const { DataTypes } = require('sequelize');

// 创建小记模型对象
const LoveLitter = sequelize.define(
    'LoveLitter',
    {
        contentup: {
            type: DataTypes.STRING,
        },
        mark: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contentdown: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'type1',
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true,
    }
)

module.exports = LoveLitter;