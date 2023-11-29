const express = require("express");

const app = express();

require('dotenv').config();

const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParse());
app.use(bodyParser.json());

// database connection
const connectionString = process.env.URI;
mongoose.connect(connectionString)
.then(
    res => app.listen(process.env.PORT)
)
.catch(
    err => console.error(err)
)

// define routes and controllers 
const routes = require('./routes');
//const controllers = require('./controllers');

app.use('/', routes);

app.get('/api', (req, res) => {

})

