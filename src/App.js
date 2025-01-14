import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FinancialProvider } from './context/FinancialContext';
import HomeScreen from './screens/HomeScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FinancialProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Transactions" component={TransactionsScreen} />
          <Stack.Screen name="Add Transaction" component={AddTransactionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FinancialProvider>
  );
};

export default App;
