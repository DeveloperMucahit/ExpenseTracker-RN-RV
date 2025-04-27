// src/screens/MainScreen.tsx

import React from 'react';
import { View } from 'react-native';
import AddExpense from '../../components/AddExpense/AddExpense'; 
import ExpenseList from '../../components/ExpenseList/ExpensList';

const MainScreen: React.FC = () => { 
  return (
    <View>
      <AddExpense />
      <ExpenseList />
    </View>
  );
};

export default MainScreen;