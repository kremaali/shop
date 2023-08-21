const Customer = require('../models/Customer');


exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers', error: error.message });
  }
};


exports.createCustomer = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  try {
    const newCustomer = await Customer.create({ first_name, last_name, email });
    res.json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: 'Error creating customer', error: error.message });
  }
};
