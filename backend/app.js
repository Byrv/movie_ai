// app.js
const cors = require('cors');
const express = require('express');
const apiRouter = require('./routes/apiRouter');

const app = express();
app.use(cors({
  origin: 'http://localhost:8080', // Adjust according to the client URL
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());
app.use('/api', apiRouter);


module.exports = app;
