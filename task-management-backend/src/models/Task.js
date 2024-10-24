const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');


const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Open', 'In-progress', 'Completed'),
    defaultValue: 'Open',
  },
}, {
  timestamps: true,
});

Task.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Task, { foreignKey: 'userId', as: 'tasks' });

module.exports = Task;
