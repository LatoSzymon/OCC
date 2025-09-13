// const express = require('express');
const cors = require("cors");
import express from 'express';
require('dotenv').config();
const morgan = require('morgan');

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Backend is running");
})
