import React, { createContext, useReducer } from 'react';

const initialState = {
  transactions: [],
  balance: 0,
};

const FinancialContext = createContext();

const financialReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      const updatedBalance =
        action.payload.type === 'income'
          ? state.balance + action.payload.amount
          : state.balance - action.payload.amount;
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        balance: updatedBalance,
      };
    default:
      return state;
  }
};

export const FinancialProvider = ({ children }) => {
  const [state, dispatch] = useReducer(financialReducer, initialState);

  return (
    <FinancialContext.Provider value={{ state, dispatch }}>
      {children}
    </FinancialContext.Provider>
  );
};

export default FinancialContext;
