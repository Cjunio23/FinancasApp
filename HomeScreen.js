import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FinancialContext from '../context/FinancialContext';

export default function HomeScreen() {
  const { state } = useContext(FinancialContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo Atual</Text>
      <Text style={styles.balance}>R$ {state.balance.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 32,
    color: 'green',
    marginTop: 10,
  },
});
