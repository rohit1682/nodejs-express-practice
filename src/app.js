const express = require('express');
const itemRoutes = require('./routes/itemRoutes');
const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Core middlewares
app.use(express.json());
app.use(logger);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API routes
app.use('/api/items', itemRoutes);

// 404 and error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;

