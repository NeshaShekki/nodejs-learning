const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const studentRoutes = require('./routes/students');
const roleRoutes = require('./routes/roles');
const teacherRoutes = require('./routes/teachers');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/students', studentRoutes);
app.use('/roles', roleRoutes);
app.use('/teachers', teacherRoutes);

const PORT = process.env.PORT || 3000;

module.exports = app;
