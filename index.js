const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { sequelize } = require('./models');
const employeeRoutes = require('./routes/employee.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/employees', employeeRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
