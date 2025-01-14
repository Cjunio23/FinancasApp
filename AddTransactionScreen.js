import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import FinancialContext from '../context/FinancialContext';

export default function AddTransactionScreen() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');
  const { dispatch } = useContext(FinancialContext);

  const addTransaction = () => {
    if (amount && category) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: { amount: parseFloat(amount), category, type },
      });
      setAmount('');
      setCategory('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Transação</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
      />
      <View style={styles.buttonGroup}>
        <Button title="Receita" onPress={() => setType('income')} />
        <Button title="Despesa" onPress={() => setType('expense')} />
      </View>
      <Button title="Adicionar" onPress={addTransaction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
