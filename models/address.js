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
      address.belongsTo(models.student,{foreignKey:'student_id'});
    }
  }
  address.init({
    address_id: {allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    state: {type: DataTypes.STRING,allowNull: false},
    district:{type: DataTypes.STRING,allowNull: false},
    pincode: {type: DataTypes.INTEGER,allowNull: false},
    city: {type: DataTypes.STRING,allowNull: false},
    house_no:{type: DataTypes.STRING,allowNull: false},
    student_id:{type: DataTypes.INTEGER,allowNull: false},
    address_live: DataTypes.BOOLEAN,
    createdAt: {allowNull: false,type: DataTypes.DATE,defaultValue: sequelize.literal('NOW()')},
    updatedAt: {allowNull: false,type: DataTypes.DATE,defaultValue: sequelize.literal('NOW()')}
  },
   {
    sequelize,
    modelName: 'address',
  });
  // address.associate = function (models) {address.belongsTo(models.student, { foreignKey: 'student_id'})};
  return address;
};