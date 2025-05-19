// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
// import MainScreen from './src/screens/MainScreen';
// import FridgeScreen from './src/screens/FridgeScreen';
// import CategorySelect from './src/screens/CategorySelect';
// import RecommendedRecipesScreen from './src/screens/RecommendedRecipesScreen';
// import RecipeResultScreen from './src/screens/RecipeResultScreen';
// import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
// import CommentScreen from './src/screens/CommentScreen';
// import WriteCommentScreen from './src/screens/WriteCommentScreen';
// import TodayRecipeListScreen from './src/screens/TodayRecipeListScreen';
// import PopularRecipeListScreen from './src/screens/PopularRecipeListScreen';
//
// const Stack = createStackNavigator();
//
// export default function App() {
//   const [comments, setComments] = useState([
//     { id: 1, username: 'dss0577', text: '오늘도 귀중한 레시피 감사합니다!', date: '2025.04.11' },
//     { id: 2, username: 'ko77', text: '재료가 생각보다 많이 필요하네요.', date: '2025.04.11' },
//     { id: 3, username: 'oracle22', text: '덕분에 맛있게 요리했어요 😊', date: '2025.04.11' },
//   ]);
//
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Main" component={MainScreen} />
//         <Stack.Screen name="Fridge" component={FridgeScreen} />
//         <Stack.Screen name="CategorySelect" component={CategorySelect} />
//         <Stack.Screen name="RecommendedRecipesScreen" component={RecommendedRecipesScreen} />
//         <Stack.Screen name="RecipeResultScreen" component={RecipeResultScreen} />
//         <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
//
//         {/* CommentScreen과 WriteCommentScreen에 comments props 넘겨주기 */}
//         <Stack.Screen name="CommentScreen">
//           {(props) => (
//             <CommentScreen
//               {...props}
//               comments={comments}
//               setComments={setComments}
//             />
//           )}
//         </Stack.Screen>
//
//         <Stack.Screen name="WriteCommentScreen">
//           {(props) => (
//             <WriteCommentScreen
//               {...props}
//               comments={comments}
//               setComments={setComments}
//             />
//           )}
//         </Stack.Screen>
//
//         <Stack.Screen
//           name="TodayRecipeListScreen"
//           component={TodayRecipeListScreen}
//           options={{ headerShown: true, title: '오늘의 레시피' }}
//         />
//         <Stack.Screen
//           name="PopularRecipeListScreen"
//           component={PopularRecipeListScreen}
//           options={{ headerShown: true, title: '인기 레시피' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 📌 스크린 import
import MainScreen from './src/screens/MainScreen';
import FridgeScreen from './src/screens/FridgeScreen';
import CategorySelect from './src/screens/CategorySelect';
import RecommendedRecipesScreen from './src/screens/RecommendedRecipesScreen';
import RecipeResultScreen from './src/screens/RecipeResultScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import CommentScreen from './src/screens/CommentScreen';
import WriteCommentScreen from './src/screens/WriteCommentScreen';
import TodayRecipeListScreen from './src/screens/TodayRecipeListScreen';
import PopularRecipeListScreen from './src/screens/PopularRecipeListScreen';
import MyPageScreen from './src/screens/MyPageScreen'; // ✅ 마이페이지 추가

const Stack = createStackNavigator();

export default function App() {
  // 📌 댓글 상태 관리
  const [comments, setComments] = useState([
    { id: 1, username: 'dss0577', text: '오늘도 귀중한 레시피 감사합니다!', date: '2025.04.11' },
    { id: 2, username: 'ko77', text: '재료가 생각보다 많이 필요하네요.', date: '2025.04.11' },
    { id: 3, username: 'oracle22', text: '덕분에 맛있게 요리했어요 😊', date: '2025.04.11' },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        {/* 📌 메인 화면 */}
        <Stack.Screen name="Main" component={MainScreen} />

        {/* 📌 냉장고 화면 */}
        <Stack.Screen name="Fridge" component={FridgeScreen} />

        {/* 📌 카테고리 선택 */}
        <Stack.Screen name="CategorySelect" component={CategorySelect} />

        {/* 📌 추천 레시피 화면 */}
        <Stack.Screen name="RecommendedRecipesScreen" component={RecommendedRecipesScreen} />

        {/* 📌 레시피 결과 화면 */}
        <Stack.Screen name="RecipeResultScreen" component={RecipeResultScreen} />

        {/* 📌 레시피 상세 화면 */}
        <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />

        {/* 📌 댓글 목록 화면 (props 전달) */}
        <Stack.Screen name="CommentScreen">
          {(props) => (
            <CommentScreen
              {...props}
              comments={comments}
              setComments={setComments}
            />
          )}
        </Stack.Screen>

        {/* 📌 댓글 작성 화면 (props 전달) */}
        <Stack.Screen name="WriteCommentScreen">
          {(props) => (
            <WriteCommentScreen
              {...props}
              comments={comments}
              setComments={setComments}
            />
          )}
        </Stack.Screen>

        {/* 📌 오늘의 레시피 목록 */}
        <Stack.Screen
          name="TodayRecipeListScreen"
          component={TodayRecipeListScreen}
          options={{ headerShown: true, title: '오늘의 레시피' }}
        />

        {/* 📌 인기 레시피 목록 */}
        <Stack.Screen
          name="PopularRecipeListScreen"
          component={PopularRecipeListScreen}
          options={{ headerShown: true, title: '인기 레시피' }}
        />

        {/* 📌 마이페이지 화면 */}
        <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
