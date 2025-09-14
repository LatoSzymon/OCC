'use strict';

const express = require('express');
const cors = require("cors");
require('dotenv').config();
const morgan = require('morgan');
const basicRoutes = require("./routes/basicRoutes");

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/heroes", basicRoutes);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Elo żelo")
    console.log("GIT MAJONEZ");
})

app.listen(port, () => {
    console.log(`Backend is running, port ${port}`);
})
