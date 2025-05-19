//// RecipeResultScreen.js
//import React from 'react';
//import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
//
//const recipes = [
//  {
//    id: 1,
//    title: '감자볶음',
//    ingredients: '감자, 양파, 간장',
//    time: '15분',
//    image: require('../../assets/img/recipe5.jpg'),
//  },
//  {
//    id: 2,
//    title: '계란말이',
//    ingredients: '계란, 당근, 파, 소금',
//    time: '10분',
//    image: require('../../assets/img/recipe6.jpg'),
//  },
//  {
//    id: 3,
//    title: '감자양파전',
//    ingredients: '감자, 양파',
//    time: '15분',
//    image: require('../../assets/img/recipe7.jpg'),
//  },
//];
//
//const RecipeResultScreen = ({ navigation }) => {
//  return (
//    <View style={styles.wrapper}>
//      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//        <Text style={styles.backText}>← 뒤로</Text>
//      </TouchableOpacity>
//
//      <Text style={styles.title}>선택한 식재료로 가능한 레시피</Text>
//
//      <View style={styles.tagContainer}>
//        <Text style={styles.tag}>감자 X</Text>
//        <Text style={styles.tag}>양파 X</Text>
//        <Text style={styles.tag}>계란 X</Text>
//        <Text style={styles.tag}>한식 X</Text>
//      </View>
//
//      <ScrollView contentContainerStyle={styles.recipeList}>
//        {recipes.map((recipe) => (
//          <View key={recipe.id} style={styles.recipeBox}>
//            <Text style={styles.hash}>#한식</Text>
//            <Image source={recipe.image} style={styles.image} />
//            <View style={styles.description}>
//              <Text style={styles.recipeTitle}>{recipe.title}</Text>
//              <Text style={styles.recipeInfo}>필요한 재료: {recipe.ingredients}</Text>
//              <Text style={styles.recipeInfo}>예상 조리시간: {recipe.time}</Text>
//              <TouchableOpacity style={styles.button}>
//                <Text style={styles.buttonText}>레시피 보기</Text>
//              </TouchableOpacity>
//            </View>
//          </View>
//        ))}
//      </ScrollView>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  wrapper: {
//    flex: 1,
//    backgroundColor: '#fff',
//    paddingTop: 50,
//  },
//  backButton: {
//    position: 'absolute',
//    top: 40,
//    left: 20,
//  },
//  backText: {
//    fontSize: 16,
//  },
//  title: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    textAlign: 'center',
//    marginBottom: 10,
//  },
//  tagContainer: {
//    flexDirection: 'row',
//    justifyContent: 'center',
//    flexWrap: 'wrap',
//    marginBottom: 10,
//  },
//  tag: {
//    backgroundColor: '#f1c40f',
//    padding: 6,
//    borderRadius: 10,
//    margin: 5,
//  },
//  recipeList: {
//    paddingHorizontal: 10,
//  },
//  recipeBox: {
//    borderWidth: 1,
//    borderColor: '#ddd',
//    borderRadius: 10,
//    marginBottom: 15,
//    padding: 10,
//    backgroundColor: '#fafafa',
//  },
//  hash: {
//    color: '#555',
//    marginBottom: 5,
//  },
//  image: {
//    width: '100%',
//    height: 130,
//    resizeMode: 'cover',
//    borderRadius: 8,
//  },
//  description: {
//    marginTop: 10,
//  },
//  recipeTitle: {
//    fontSize: 16,
//    fontWeight: 'bold',
//  },
//  recipeInfo: {
//    fontSize: 14,
//    marginTop: 2,
//  },
//  button: {
//    marginTop: 8,
//    borderWidth: 1,
//    borderRadius: 10,
//    padding: 6,
//    alignItems: 'center',
//  },
//  buttonText: {
//    fontWeight: 'bold',
//  },
//});
//
//export default RecipeResultScreen;
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const recipes = [
  {
    id: 1,
    title: '감자볶음',
    ingredients: '감자, 양파, 간장',
    time: '15분',
    image: require('../../assets/img/recipe5.jpg'),
  },
  {
    id: 2,
    title: '계란말이',
    ingredients: '계란, 당근, 파, 소금',
    time: '10분',
    image: require('../../assets/img/recipe6.jpg'),
  },
  {
    id: 3,
    title: '감자양파전',
    ingredients: '감자, 양파',
    time: '15분',
    image: require('../../assets/img/recipe7.jpg'),
  },
];

const RecipeResultScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← 뒤로</Text>
      </TouchableOpacity>

      <Text style={styles.title}>선택한 식재료로 가능한 레시피</Text>

      <View style={styles.tagContainer}>
        <Text style={styles.tag}>감자 X</Text>
        <Text style={styles.tag}>양파 X</Text>
        <Text style={styles.tag}>계란 X</Text>
        <Text style={styles.tag}>한식 X</Text>
      </View>

      <ScrollView contentContainerStyle={styles.recipeList}>
        {recipes.map((recipe) => (
          <View key={recipe.id} style={styles.recipeBox}>
            <Text style={styles.hash}>#한식</Text>
            <Image source={recipe.image} style={styles.image} />
            <View style={styles.description}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeInfo}>필요한 재료: {recipe.ingredients}</Text>
              <Text style={styles.recipeInfo}>예상 조리시간: {recipe.time}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (recipe.title === '계란말이') {
                    navigation.navigate('RecipeDetailScreen');
                  }
                }}
              >
                <Text style={styles.buttonText}>레시피 보기</Text>
              </TouchableOpacity>

            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backText: {
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#f1c40f',
    padding: 6,
    borderRadius: 10,
    margin: 5,
  },
  recipeList: {
    paddingHorizontal: 10,
  },
  recipeBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fafafa',
  },
  hash: {
    color: '#555',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  description: {
    marginTop: 10,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeInfo: {
    fontSize: 14,
    marginTop: 2,
  },
  button: {
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default RecipeResultScreen;

