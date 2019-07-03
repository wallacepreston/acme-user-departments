const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.use(morgan)

// Set up Body Parsing middleware for urlencoded form data.
app.use(express.urlencoded({ extended: true }))
// Set up Body Parsing middleware for JSON.
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('cors')());
app.use('/api', require('./api'))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error (unknown)')
})

module.exports = app;