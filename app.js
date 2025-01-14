const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/financas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
