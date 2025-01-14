import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FinancialContext from '../context/FinancialContext';

export default function TransactionsScreen() {
  const { state } = useContext(FinancialContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transações</Text>
      <FlatList
        data={state.transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.amount}>
              {item.type === 'income' ? '+' : '-'} R$ {item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  category: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
