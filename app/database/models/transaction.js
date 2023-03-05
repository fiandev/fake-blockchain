'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    seller_id: DataTypes.BIGINT,
    buyer_id: DataTypes.BIGINT,
    token_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};