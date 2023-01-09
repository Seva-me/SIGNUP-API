'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // address.associate = function (models) {address.belongsTo(models.student, { foreignKey: 'student_id'})};
      address.hasOne(models.student,{foreignKey:'address_id'});
    }
  }
  address.init({
    id: {allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    home: {type: DataTypes.STRING,allowNull: false},
    landmark: {type: DataTypes.STRING,allowNull: false},
    city: {type: DataTypes.STRING,allowNull: false},
    state: {type: DataTypes.STRING,allowNull: false},
    pincode: {type: DataTypes.STRING,allowNull: false},
    country: {type: DataTypes.STRING,allowNull: false},
    address_live: {type:DataTypes.BOOLEAN,allowNull: false},
    createdAt: {allowNull: false,type: DataTypes.DATE,},
    updatedAt: {allowNull: false,type: DataTypes.DATE,},
  },
   {
    sequelize,
    modelName: 'address',
    timeStamps: true
  });
  return address;
};