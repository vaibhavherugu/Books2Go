import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import RouterScreen from './components/RouterScreen';
import LendABook from './components/LendABook';
import SignUp from './components/SignUp';
import HomeScreen from './components/Home';
import Book from './components/Book';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Router" component={RouterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lend a Book" component={LendABook} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Book" component={Book} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
