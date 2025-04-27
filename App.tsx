import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation'
import { ExpenseProvider } from './src/context/ExpenseContext';
import MainScreen from './src/screens/HomeScreenV2/MainScreen';


function App() {
  return (
      <ExpenseProvider>
        <SafeAreaProvider>
          <MainScreen />
        </SafeAreaProvider>
      </ExpenseProvider>
  );
}

export default App;
 