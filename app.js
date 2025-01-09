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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


