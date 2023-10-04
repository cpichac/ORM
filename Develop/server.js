const express = require('express');
const routes = require('./routes');
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes

// Create a Sequelize instance and configure the database connection
const sequelize = new Sequelize({
  dialect: 'postgres', // Change this to your database dialect (e.g., 'mysql', 'sqlite', etc.)
  host: 'localhost', // Your database host
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// Define a Sequelize model (e.g., for a 'User' table)
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Define associations between models if needed

// Synchronize Sequelize models with the database
sequelize.sync().then(() => {
  console.log('Database synced.');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
