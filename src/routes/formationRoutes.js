const express = require('express');
const router = express.Router();
const { getFormations, createFormation, updateFormation, deleteFormation } = require('../controllers/formationController');

router.get('/', getFormations);
router.post('/', createFormation);
router.put('/:id', updateFormation);
router.delete('/:id', deleteFormation);

module.exports = router;
