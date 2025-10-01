const express = require("express");
const app = express();
require('dotenv').config();
const connectDB = require('./models/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductROuter = require('./routes/ProductROuter');
const MaskRouter = require('./routes/MaskRouter');

const PORT = process.env.PORT ||8000;



app.use(bodyParser.json());
app.use(cors());
connectDB();
app.use(express.json());



app.use('/auth',AuthRouter);
app.use('/products',ProductROuter);
app.use('/mask',MaskRouter);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})