const { Employee, Department, Role } = require('../models');

// CREATE
exports.create = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
exports.findAll = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [Department, Role],
      where: { deleted: false }
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.findOne = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {
      include: [Department, Role]
    });
    if (!employee) return res.status(404).json({ error: 'Not found' });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    const [updated] = await Employee.update(req.body, {
      where: { id: req.params.id }
    });
    updated
      ? res.json({ message: 'Employee updated' })
      : res.status(404).json({ error: 'Not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.delete = async (req, res) => {
  // try {
  //   const deleted = await Employee.destroy({
  //     where: { id: req.params.id }
  //   });
  //   deleted
  //     ? res.json({ message: 'Employee deleted' })
  //     : res.status(404).json({ error: 'Not found' });
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }

  try {
    const [updated] = await Employee.update(req.body, {
      where: { id: req.params.id }
    });
    updated
      ? res.json({ message: 'Employee deleted' })
      : res.status(404).json({ error: 'Not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
