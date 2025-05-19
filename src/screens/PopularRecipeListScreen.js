//import React from 'react';
//import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
//
//const recipes = [
//  { id: '1', name: '바삭한 새우튀김', image: require('../../assets/img/recipe3.jpg') },
//  { id: '2', name: '입맛도는 비빔국수', image: require('../../assets/img/recipe4.jpg') },
//  { id: '3', name: '매콤한 낙지볶음', image: require('../../assets/img/recipe5.jpg') },
//  { id: '4', name: '고소한 두부조림', image: require('../../assets/img/recipe6.jpg') },
//];
//
//const PopularRecipeListScreen = () => {
//  const renderItem = ({ item }) => (
//    <View style={styles.recipeItem}>
//      <Image source={item.image} style={styles.image} />
//      <Text style={styles.title}>{item.name}</Text>
//    </View>
//  );
//
//  return (
//    <View style={styles.container}>
//      <FlatList
//        data={recipes}
//        keyExtractor={(item) => item.id}
//        renderItem={renderItem}
//        contentContainerStyle={styles.list}
//      />
//    </View>
//  );
//};
//
//export default PopularRecipeListScreen;
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    padding: 15,
//  },
//  list: {
//    paddingBottom: 100,
//  },
//  recipeItem: {
//    marginBottom: 20,
//  },
//  image: {
//    width: '100%',
//    height: 150,
//    borderRadius: 10,
//  },
//  title: {
//    marginTop: 10,
//    fontSize: 16,
//  },
//});
//
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const recipes = [
  { id: '1', name: '바삭한 새우튀김', image: require('../../assets/img/recipe3.jpg'), likes: 128 },
  { id: '2', name: '입맛도는 비빔국수', image: require('../../assets/img/recipe4.jpg'), likes: 210 },
  { id: '3', name: '매콤한 낙지볶음', image: require('../../assets/img/recipe5.jpg'), likes: 175 },
  { id: '4', name: '고소한 두부조림', image: require('../../assets/img/recipe6.jpg'), likes: 98 },
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40;

const PopularRecipeListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.likesContainer}>
          <Text style={styles.likeIcon}>🔥</Text>
          <Text style={styles.likes}>{item.likes}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔥 인기 레시피</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularRecipeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingTop: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
    color: '#333',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  likes: {
    color: '#fff',
    fontSize: 16,
  },
});
