// src/context/ExpenseContext.tsx

import React, { createContext, useReducer, ReactNode, } from 'react';

// Harcama tipi
interface Expense {
  id: number;
  amount: number;
}

// Başlangıç durumu
interface State {
  expenses: Expense[];
}

const initialState: State = {
  expenses: [],
};

// Reducer fonksiyonu
type Action =
  | { type: 'ADD_EXPENSE'; payload: Expense }
  | { type: 'REMOVE_EXPENSE'; payload: number };

const expenseReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'REMOVE_EXPENSE':
      return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.payload) };
    default:
      return state;
  }
};

// Context oluşturma
export const ExpenseContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

// Provider bileşeni
export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};