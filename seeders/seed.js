const { sequelize, Department, Role } = require('../models');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    await Department.bulkCreate([
      { name: 'Engineering' },
      { name: 'Human Resources' },
      { name: 'Marketing' }
    ]);

    await Role.bulkCreate([
      { title: 'Developer' },
      { title: 'Designer' },
      { title: 'Manager' }
    ]);

    console.log('Seed completed!');
    process.exit();
  } catch (err) {
    console.error('Error while seeding:', err);
    process.exit(1);
  }
}

seed();
