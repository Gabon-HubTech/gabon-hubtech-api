const Formation = require('../models/Formation');

exports.getFormations = async (req, res) => {
  try {
    const formations = await Formation.find();
    res.status(200).json({ success: true, data: formations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createFormation = async (req, res) => {
  try {
    const formation = await Formation.create(req.body);
    res.status(201).json({ success: true, data: formation });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
