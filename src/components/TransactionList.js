import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import FinancialContext from '../context/FinancialContext';

const TransactionList = () => {
  const { state } = useContext(FinancialContext);

  return (
    <FlatList
      data={state.transactions}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.category}: {item.type} - R$ {item.amount}</Text>
        </View>
      )}
    />
  );
};

export default TransactionList;
