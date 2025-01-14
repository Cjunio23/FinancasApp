const Transaction = require('../models/transactionModel');

// Obter todas as transações
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar uma nova transação
exports.createTransaction = async (req, res) => {
  try {
    const { amount, category, type } = req.body;
    const transaction = new Transaction({ amount, category, type });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
