// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL,
      // prevents null values
      allowNull: false,
      // will only allow decimal characters
      validate: {
        isDecimal: true,
      },
    },

    stock: {
      type: DataTypes.INTEGER,
      // prevents null values
      allowNull: false,
      // will only allow decimal characters
      validate: {
        isInt: true,
      },
      defaultValue: 10
    },

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `category` model, which we set in `Category.js` as its `modelName` property
        model: 'category',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
