// src/components/AddExpense.tsx

import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { ExpenseContext } from '../../context/ExpenseContext';

const AddExpense: React.FC = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [amount, setAmount] = useState<string>('');

  const addExpense = () => {
    const newExpense = { id: Date.now(), amount: parseFloat(amount) };
 dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
    setAmount('');
  };

  return (
    <View>
      <TextInput
        placeholder="Harcama Miktarı"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Ekle" onPress={addExpense} />
    </View>
  );
};

export default AddExpense;