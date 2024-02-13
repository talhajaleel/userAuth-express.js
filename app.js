// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(bodyParser.json());

// Sync the database models
sequelize.sync().then(() => {
  console.log('Database synced');
});

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
