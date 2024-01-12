'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartLine extends Model {
    static associate({ Cart, Product }) {
      this.belongsTo(Cart, { foreignKey: 'cart_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  CartLine.init(
    {
      cart_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'CartLine',
    }
  );
  return CartLine;
};
