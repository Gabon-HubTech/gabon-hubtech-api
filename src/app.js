const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const eventRoutes = require('./routes/eventRoutes');
const formationRoutes = require('./routes/formationRoutes');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/formations', formationRoutes);

app.get('/', (req, res) => {
  res.send('Gabon HubTech API is running...');
});

module.exports = app;