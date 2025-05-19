import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const todayRecipes = [
  { id: '1', name: '영양만점 제육볶음', image: require('../../assets/img/recipe1.jpg') },
  { id: '2', name: '삼겹살 숙주볶음', image: require('../../assets/img/recipe2.jpg') },
  { id: '3', name: '담백한 닭가슴살 샐러드', image: require('../../assets/img/recipe5.jpg') },
  { id: '4', name: '시원한 오이냉국', image: require('../../assets/img/recipe6.jpg') },
];

const TodayRecipeListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.recipeItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>오늘의 추천 레시피</Text>
      <FlatList
        data={todayRecipes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default TodayRecipeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  list: {
    paddingBottom: 100,
  },
  recipeItem: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});
