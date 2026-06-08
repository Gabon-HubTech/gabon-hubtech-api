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

exports.updateFormation = async (req, res) => {
  try {
    const formation = await Formation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!formation) return res.status(404).json({ success: false, error: "Formation non trouvée." });
    res.status(200).json({ success: true, data: formation });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteFormation = async (req, res) => {
  try {
    const formation = await Formation.findByIdAndDelete(req.params.id);
    if (!formation) return res.status(404).json({ success: false, error: "Formation non trouvée." });
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
