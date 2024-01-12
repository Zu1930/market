'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, CartLine }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(CartLine, { foreignKey: 'cart_id' });
    }
  }
  Cart.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
