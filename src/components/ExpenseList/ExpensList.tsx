// src/components/ExpenseList.tsx

import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { ExpenseContext } from '../../context/ExpenseContext';

const ExpenseList: React.FC = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  const removeExpense = (id: number) => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: id });
  };

  return (
    <View>
      <FlatList
        data={state.expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.amount} TL</Text>
            <Button title="Sil" onPress={() => removeExpense(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default ExpenseList;