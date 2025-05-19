//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import MainScreen from '../screens/MainScreen';
//import FridgeScreen from '../screens/FridgeScreen';
//import CategorySelect from '../screens/CategorySelect';
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => (
//  <Stack.Navigator initialRouteName="Main">
//    <Stack.Screen name="Main" component={MainScreen} />
//    <Stack.Screen name="Fridge" component={FridgeScreen} />
//    <Stack.Screen name="CategorySelect" component={CategorySelect} />
//  </Stack.Navigator>
//);
//
//export default AppNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import FridgeScreen from '../screens/FridgeScreen';
import CategorySelect from '../screens/CategorySelect';
import RecommendedRecipesScreen from '../screens/RecommendedRecipesScreen'; // ✅ 이 줄 추가

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Fridge" component={FridgeScreen} />
    <Stack.Screen name="CategorySelect" component={CategorySelect} />
    <Stack.Screen name="RecommendedRecipes" component={RecommendedRecipesScreen} /> {/* ✅ 이 줄 추가 */}
  </Stack.Navigator>
);

export default AppNavigator;


