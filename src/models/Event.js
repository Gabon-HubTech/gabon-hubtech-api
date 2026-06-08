const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: 'À venir' },
  location: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'Globe' },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
