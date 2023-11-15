const express = require("express");

const app = express();

require('dotenv').config();

const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParse());

// database connection
const connectionString = process.env.URI;
mongoose.connect(connectionString)
.then(
    res => app.listen(process.env.PORT)
)
.catch(
    err => console.error(err)
)

app.get('/api', (req, res) => {

})

