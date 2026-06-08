const express = require('express');
const router = express.Router();
const { getFormations, createFormation } = require('../controllers/formationController');

router.get('/', getFormations);
router.post('/', createFormation);

module.exports = router;
