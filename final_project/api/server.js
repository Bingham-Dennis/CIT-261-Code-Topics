require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true})); // support url encoded bodies

app.get('/', (req, res) => {
  res.write('<h1>Welcome Weightloss API</h1>');
});
