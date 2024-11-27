const teacherService = require('../services/teacherService');

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherService.getAllTeachers();
    res.json(teachers);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await teacherService.getTeacherById(req.params.id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: 'teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTeacher = async (req, res) => {
  try {
    const teacher = await teacherService.createTeacher(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await teacherService.updateTeacher(req.params.id, req.body);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: 'teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const result = await teacherService.deleteTeacher(req.params.id);
    if (result) {
      res.json({ message: 'Teacher deleted successfully' });
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
