'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Favorites.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Favorites',
    }
  );
  return Favorites;
};
