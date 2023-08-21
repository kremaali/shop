const Product = require('../models/Product');


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};


exports.createProduct = async (req, res) => {
  const { product_name, order_id, price } = req.body;
  try {
    const newProduct = await Product.create({ product_name, order_id, price });
    res.json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error: error.message });
  }
};
