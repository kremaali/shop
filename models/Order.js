
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 
const Customer = require('./Customer'); 

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_date: {
    type: DataTypes.DATE
  },
  total: {
    type: DataTypes.DECIMAL(10, 2)
  }
});


Order.belongsTo(Customer, { foreignKey: 'customer_id' });

module.exports = Order;
