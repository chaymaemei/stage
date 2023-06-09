const express = require('express');
const connectDB = require('./config/db.js');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoute.js');
const categoryRoutes = require( "./routes/categoryRoutes.js");
const productRoutes  = require( "./routes/productRoutes.js");
const UserRoutes  = require( "./routes/UserRoutes.js");



const cors = require('cors');




dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
app.use('/api/v1/auth', authRoutes); 
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", UserRoutes);
// Include a leading forward slash

app.get('/', (req, res) => {
  res.send({ message: 'welcome' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

