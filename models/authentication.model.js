const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  name: { type: String },
  password: { type: String },
});

module.exports = mongoose.model('Account', Account);