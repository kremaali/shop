const Order = require('../models/Order');


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};


exports.createOrder = async (req, res) => {
  const { customer_id, order_date, total } = req.body;
  try {
    const newOrder = await Order.create({ customer_id, order_date, total });
    res.json(newOrder);
  } catch (error) {
    res.status(400).json({ message: 'Error creating order', error: error.message });
  }
};
