//import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//
//import MainScreen from './src/screens/MainScreen';
//import FridgeScreen from './src/screens/FridgeScreen';
//import CategorySelect from './src/screens/CategorySelect'; // 파일 이름이 'CategorySelect.js'일 경우
//import RecommendedRecipesScreen from './src/screens/RecommendedRecipesScreen'; // 이 파일이 없으면 아래 참고
//
//const Stack = createStackNavigator();
//
//export default function App() {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
//        <Stack.Screen name="Main" component={MainScreen} />
//        <Stack.Screen name="Fridge" component={FridgeScreen} />
//        <Stack.Screen name="CategorySelect" component={CategorySelect} />
//        <Stack.Screen name="RecommendedRecipesScreen" component={RecommendedRecipesScreen} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import FridgeScreen from './src/screens/FridgeScreen';
import CategorySelect from './src/screens/CategorySelect';
import RecommendedRecipesScreen from './src/screens/RecommendedRecipesScreen';
import RecipeResultsScreen from './src/screens/RecipeResultsScreen'; // 추가된 레시피 결과 화면

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Fridge" component={FridgeScreen} />
        <Stack.Screen name="CategorySelect" component={CategorySelect} />
        <Stack.Screen name="RecommendedRecipesScreen" component={RecommendedRecipesScreen} />
        <Stack.Screen name="RecipeResultsScreen" component={RecipeResultsScreen} /> {/* 추가 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
