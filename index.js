const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { sequelize } = require('./models');
const employeeRoutes = require('./routes/employee.routes');
const projectRoutes = require('./routes/project.routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/employees', employeeRoutes);
app.use('/projects', projectRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
