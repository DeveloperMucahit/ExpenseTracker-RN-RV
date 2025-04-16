import { View, Text, Dimensions, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import Button from '../../components/Button';
import SafeScreen from '../../components/SafeScreen';

const width = Dimensions.get("screen").width;

function DetailScreen({ route }) {
  const { expense, deleteExpense } = route.params;
  const { title, amount, date, category } = expense;


  const navigation = useNavigation();

  const handleDelete = () => {
    deleteExpense(expense);
    navigation.dispatch(StackActions.popTo("HomeScreen"));
  };

  return (
    <SafeScreen>
      <Text style={{fontSize:36, textAlign: "center", color: "#1F91DC"}}>Expense Detail</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.custom}>
          <Text style={{ fontSize: 18, color: "black",fontWeight: "bold" }}>{title} expense details</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: "black",fontWeight: "bold" }}>Amount: {amount} ₺</Text>
            <Text style={{ fontSize: 16, color: "black" }}>Date: {date}</Text>
            <Text style={{ fontSize: 16, color: "black" }}>Category: {category}</Text>
          </View>
          <View style={{ marginTop: 20, alignSelf: "center" }}>
            <Button title="Delete Expense" onPress={handleDelete} />
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 100,  left: 0, right: 0, alignItems: 'center'}}>
          <Button title="Go Back" onPress={() => navigation.dispatch(StackActions.popTo("HomeScreen"))} />
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  custom: {
    backgroundColor: "#F0F0F0",
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: "flex-start",
  }
});

export default DetailScreen;