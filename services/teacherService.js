const Teacher = require('../models/teacherModel');

exports.getAllTeachers = async () => {
  return await Teacher.findAll();
};

exports.getTeacherById = async (id) => {
  return await Teacher.findByPk(id);
};

exports.createTeacher = async (teacherData) => {
  return await Teacher.create(teacherData);
};

exports.updateTeacher = async (id, teacherData) => {
  const teacher = await Teacher.findByPk(id);
  if (teacher) {
    return await Teacher.update(teacherData);
  }
  return null;
};

exports.deleteTeacher = async (id) => {
  const teacher = await Teacher.findByPk(id);
  if (teacher) {
    await teacher.destroy();
    return true;
  }
  return false;
};
