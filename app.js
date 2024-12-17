// contains express and routes also middleware

const express = require('express');
const goalsRoutes= require('./routes/goals');
const usersRoutes= require('./routes/users');
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON
app.use(express.urlencoded({ extended: true })); // For parsing form data

// Routes
app.use('/goals', goalsRoutes);
app.use('/users', usersRoutes);

// Export the app
module.exports = app;
