const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const api = process.env.API_URL;

const productRouter = require('./routers/products');

//middleware that have control of the req and the res of any api

//middlewares
app.use(cors());
app.options('*',cors());
//this middleware is  from express
// when the frontend send a json object, we need the backend to know that is json and analyse it and use it in the backend
app.use(express.json()); // previously we had body parser but is now deprecated and express has ability to parse the data to json without using external library
app.use(morgan('tiny'));

//Routes
app.use(`${api}/products`, productRouter);


//normally we connect to databse before starting the server
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'shop-app-db'

}).then(() => { // we need uri or connection string
    console.log('Database connection is ready..');
})
    .catch((err) =>
        console.group(err));



app.listen(3000, () => {
    console.log(api);
    console.log('server is running on http://localhost:3000')
});