const { DataTypes } = require("sequelize")
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define("Team", {
        idTeam: {
            type: DataTypes.UUID,
            defaultValue: () => uuidv4(),
            primaryKey: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo: {
            type: DataTypes.STRING,
        },
        foundation: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
    })
}