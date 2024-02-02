const { DataTypes } = require('sequelize');

const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    driverRef: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING(1234)
    },
    image: {
      type: DataTypes.STRING
    },
    nationality: {
      type: DataTypes.STRING
    },
    dob: {
      type: DataTypes.STRING
    },
  });
};