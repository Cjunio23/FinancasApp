const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true, enum: ['income', 'expense'] },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
