const express = require('express');
const app = express();
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());


app.use('/api', customerRoutes);
app.use('/api', orderRoutes);
app.use('/api', productRoutes);

//TODO: add app stuff, testing SHA

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
