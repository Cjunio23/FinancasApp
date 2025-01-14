import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import { FinancialProvider } from './context/FinancialContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <FinancialProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Transactions" component={TransactionsScreen} />
          <Tab.Screen name="Add Transaction" component={AddTransactionScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </FinancialProvider>
  );
}
