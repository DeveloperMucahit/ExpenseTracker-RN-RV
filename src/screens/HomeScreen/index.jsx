import { View, Text, FlatList, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import components from '../../components'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import data from "../../mockdata/expenseData.json"

const { SafeScreen } = components;

const width = Dimensions.get("screen").width;

function ListItem({ item, onPress }) {
  const deNavigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} style={{height: 100, marginHorizontal: 10, 
    marginVertical: 15, justifyContent: "center", borderBottomWidth: 1, borderColor: "dodgerblue"}} onPress={() => deNavigation.navigate("DetailScreen", { expense: item, deleteExpense: onPress })}>
      <View style={{ marginLeft: 10 }}>
      <Text style={{ color: "Black", fontWeight: "bold", fontSize: 16 }}>{item.title}</Text>
      <Text style={{ color: "Black", fontWeight: "bold", fontSize: 14 }}>{item.amount} ₺</Text>
      <Text style={{ color: "#2c3e50", fontSize: 14, fontWeight:400 }}>Date: {item.date}</Text>
      <Text style={{ color: "#2c3e50", fontSize: 14, fontWeight:400 }}>Category: {item.category}</Text>
    </View>
    </TouchableOpacity>
  );
}

function HomeScreen({ route }) {
  const navigation = useNavigation();
  const [expenses, setExpenses] = useState(data); //delete data and add [] to remove mock_data
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (route && route.params && route.params.expense) {
      setExpenses((prevExpenses) => [...prevExpenses, route.params.expense]);
    }
  }, [route]);

  useEffect(() => {
    const newCategories = [...new Set(expenses.map(exp => exp.category))];
    setCategories(newCategories);
  }, [expenses]);

  const deleteExpense = (expenseToDelete) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.created !== expenseToDelete.created));
  };

  return (

        <SafeScreen>
          <View style={{flex: 0.92}}>
            <Text style={{fontSize:36, textAlign: "center", color: "#1F91DC"}}>Expense Tracker</Text>

            <View style={{ flex: 0.82, backgroundColor: "808080", borderRadius:8 }}>
              <FlatList
                data={expenses}
                renderItem={({ item }) => <ListItem item={item} onPress={deleteExpense} />}
                ListEmptyComponent={<Text style={{ marginTop: 20, marginLeft: 20, color:"dodgerblue", fontWeight:"bold", borderRadius:0.9 }}>No expenses added yet.</Text>
                }
              />
            </View>
          </View>

          <View style={{marginHorizontal: 25, borderRadius: 8, marginVertical: 25, width: width * 0.65, alignSelf: "center" }}>
              <Button title='Add Expense' onPress={() => navigation.navigate("AddExpenseScreen")} />
            </View>
            <View style={{borderRadius: 8, width: width * 0.65, alignSelf: "center", marginBottom:25 }}>
              <Button title='Categories' onPress={() => navigation.navigate("CategoryScreen", { expenses })} />
            </View>
      </SafeScreen>
  );
}

export default HomeScreen;