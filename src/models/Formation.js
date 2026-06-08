const mongoose = require('mongoose');

const FormationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, required: true },
  duration: { type: String, required: true },
  icon: { type: String, default: 'Code' },
  color: { type: String, default: 'from-blue-500 to-cyan-400' },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Formation', FormationSchema);
