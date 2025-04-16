import { View, Text, FlatList, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import SafeScreen from '../../components/SafeScreen';

const width = Dimensions.get("screen").width;

function CategoryScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  

  const { expenses } = route.params;


  const [categories, setCategories] = useState([...new Set(expenses.map(item => item.category))]); 


  const handleCategoryPress = (category) => {
    navigation.navigate("CategoryExpenseDetail", { category, expenses });
  };

  return (

      <SafeScreen>
        <View style={{ flex: 0.95, padding: 20 }}>
          <Text style={{ fontSize: 36, textAlign: "center", color:"dodgerblue" }}>Category Screen</Text>

          <FlatList style ={{flex: 0.50}}
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCategoryPress(item)}>
                <View style={{ padding: 15, backgroundColor: "#F0F0F0", marginVertical: 15, borderRadius: 5, borderWidth:1 }}>
                  <Text style={{ color: "black", fontSize: 16 }}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20, color: "snow" }}>No categories found.</Text>}
          />

            <View style={{alignSelf:"center",marginBottom: 25}}>
              <Button title="Go Back" onPress={() => navigation.dispatch(StackActions.popTo("HomeScreen"))} />
            </View>
        </View>
      </SafeScreen>
  );
}

export default CategoryScreen;