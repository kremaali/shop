const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 
const Order = require('./Order'); 

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2)
  }
});


Product.belongsTo(Order, { foreignKey: 'order_id' });

module.exports = Product;
