import React, { createContext, useReducer, useEffect } from 'react';
import api from '../services/api';

const FinancialContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { ...state, transactions: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};

export const FinancialProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { transactions: [] });

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await api.get('/transactions');
      dispatch({ type: 'SET_TRANSACTIONS', payload: response.data });
    };
    fetchTransactions();
  }, []);

  return (
    <FinancialContext.Provider value={{ state, dispatch }}>
      {children}
    </FinancialContext.Provider>
  );
};

export default FinancialContext;
