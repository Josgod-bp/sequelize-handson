const { Project, Employee } = require('../models');

exports.create = async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.assignEmployee = async (req, res) => {
    try {
      const { projectId, employeeId } = req.body;
  
      const project = await Project.findByPk(projectId);
      if (!project) return res.status(404).json({ error: 'Proyecto no encontrado' });
  
      const employee = await Employee.findByPk(employeeId);
      if (!employee) return res.status(404).json({ error: 'Empleado no encontrado' });
  
      await project.addEmployee(employee); // Sequelize crea la relación en tabla intermedia
  
      res.json({ message: 'Empleado asignado al proyecto correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.list = async (req, res) => {
    try {
      const projects = await Project.findAll({
        attributes: [
            'name'
        ],
        include: {
            model: Employee,
            attributes: [
                'firstname', 'lastname', 'email'
            ],
            through: { attributes: [
                // 'projectId'
            ] }
        }
      });
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };