const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bake = new Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  price: {type: Number},
  quantity: { type: Number},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bake', Bake);