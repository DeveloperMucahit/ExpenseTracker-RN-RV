import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../screens';
import { createStaticNavigation } from '@react-navigation/native';

const MyStack = createNativeStackNavigator({

    screenOptions: {
        headerShown: false
    },
    screens: {
        HomeScreen: screens.HomeScreen,
        CategoryScreen: screens.CategoryScreen,
        DetailScreen: screens.DetailScreen,
        CategoryExpenseDetail: screens.CategoryExpenseDetail,
        AddExpenseScreen: {
            screen: screens.AddExpenseScreen,
            options: {
                headerShown: true,
                headerTitle: "Add Expense Screen",
                headerTintColor: "snow",
                headerStyle: {
                backgroundColor: '#2c3e50',
                },
            }
        }
    }
})


export default createStaticNavigation(MyStack);