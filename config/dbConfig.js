const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student_management', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres'
});
// Register all models
const modelsDir = path.join(__dirname, 'models');
fs.readdirSync(modelsDir).forEach(file => {
  const modelPath = path.join(modelsDir, file);
  require(modelPath)(sequelize, Sequelize.DataTypes);
});

// Sync all models
sequelize.sync({ alter: true }) // or { force: true } to drop and recreate tables
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });

  
module.exports = sequelize;
