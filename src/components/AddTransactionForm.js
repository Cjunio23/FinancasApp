import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../services/api';
import FinancialContext from '../context/FinancialContext';

const AddTransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');
  const { dispatch } = useContext(FinancialContext);

  const handleAddTransaction = async () => {
    const newTransaction = { amount: parseFloat(amount), category, type };
    const response = await api.post('/transactions', newTransaction);
    dispatch({ type: 'ADD_TRANSACTION', payload: response.data });
  };

  return (
    <View>
      <TextInput placeholder="Categoria" onChangeText={setCategory} value={category} />
      <TextInput placeholder="Valor" keyboardType="numeric" onChangeText={setAmount} value={amount} />
      <Button title="Adicionar Receita" onPress={() => setType('income')} />
      <Button title="Adicionar Despesa" onPress={() => setType('expense')} />
      <Button title="Salvar Transação" onPress={handleAddTransaction} />
    </View>
  );
};

export default AddTransactionForm;
