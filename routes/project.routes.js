const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

router.post('/', projectController.create);
router.post('/assign', projectController.assignEmployee);
router.get('/',projectController.list)

module.exports = router;
