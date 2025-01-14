const express = require('express');
const { getTransactions, createTransaction } = require('../controllers/transactionController');

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);

module.exports = router;
