import { View, Text, FlatList, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import SafeScreen from '../../components/SafeScreen';

const width = Dimensions.get("screen").width;


function CategoryExpenseDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, expenses, setExpenses } = route.params;


  const filteredExpenses = expenses.filter(exp => exp.category === category);


  const totalAmount = filteredExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);


  return (
        <SafeScreen>
            <View style={{ flex: 0.95, padding: 20 }}>
            <Text style={{ fontSize: 36, textAlign: "center", color: "dodgerblue" }}>Expenses for {category}</Text>

            <FlatList
                data={filteredExpenses}
                renderItem={({ item }) => ( 
                <View  style={{ padding: 15, backgroundColor: "F0F0F0", marginVertical: 5, borderRadius: 5, borderColor: "black" }}>
                    <Text style={{ color: "black", fontSize: 18, fontWeight:"bold" }}>Title: {item.title}</Text>
                    <Text style={{ color: "black", fontWeight:"bold" }}>Amount: {item.amount} ₺</Text>
                    <Text style={{ color: "black" }}>Date: {item.date}</Text>
                    <Text style={{ color: "black" }}>Category: {item.category}</Text>
                </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20 }}>No expenses found for this category.</Text>}
            />

            <Text style={{ fontSize: 18, fontWeight: "bold", margin:"auto", color: "#2c3e50" }}>
                Total Amount Spent for {category}: {totalAmount.toFixed(2)} ₺
            </Text>

            <View style={{ alignSelf: "center", marginTop: 20, marginBottom: 25 }}>
                <Button title="Go Back" onPress={() => navigation.dispatch(StackActions.popTo("HomeScreen"))} />
            </View>

            </View>
        </SafeScreen>
 );
}

export default CategoryExpenseDetail;