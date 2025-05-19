//import React from 'react';
//import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
//
//const categories = [
//  { label: '고기', image: require('../../assets/img/meat.jpg') },
//  { label: '과일', image: require('../../assets/img/fruit.jpg') },
//  { label: '채소', image: require('../../assets/img/vege.jpg') },
//  { label: '해산물', image: require('../../assets/img/seafood.jpg') },
//  { label: '유제품', image: require('../../assets/img/dairy.jpg') },
//  { label: '조미료', image: require('../../assets/img/seasoning.jpg') },
//  { label: '음료', image: require('../../assets/img/drink.jpg') },
//  { label: '주류', image: require('../../assets/img/alcohol.jpg') },
//];
//
//const CategorySelect = ({ navigation }) => {
//  const handleRecommend = () => {
//    navigation.navigate('RecommendedRecipesScreen');
//  };
//
//  return (
//    <ScrollView contentContainerStyle={styles.container}>
//      <Text style={styles.title}>카테고리</Text>
//
//      <View style={styles.searchBar}>
//        <TextInput placeholder="검색" style={styles.input} />
//      </View>
//
//      <View style={styles.grid}>
//        {categories.map((item, index) => (
//          <TouchableOpacity key={index} style={styles.card}>
//            <Image source={item.image} style={styles.image} />
//            <Text style={styles.label}>{item.label}</Text>
//          </TouchableOpacity>
//        ))}
//      </View>
//
//      <Text style={styles.question}>냉장고에서 선택해 추천받으시겠습니까?</Text>
//
//      <TouchableOpacity style={styles.recommendButton} onPress={handleRecommend}>
//        <Text style={styles.recommendButtonText}>추천받기</Text>
//      </TouchableOpacity>
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    padding: 16,
//    alignItems: 'center',
//    backgroundColor: '#e3f2fd',
//  },
//  title: {
//    fontSize: 26,
//    fontWeight: 'bold',
//    color: '#1565c0',
//    marginBottom: 12,
//  },
//  searchBar: {
//    flexDirection: 'row',
//    borderWidth: 1,
//    borderColor: '#90caf9',
//    borderRadius: 8,
//    marginBottom: 20,
//    paddingHorizontal: 12,
//    alignItems: 'center',
//    width: '90%',
//  },
//  input: {
//    flex: 1,
//    height: 40,
//  },
//  grid: {
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'center',
//    gap: 10,
//  },
//  card: {
//    width: 90,
//    alignItems: 'center',
//    margin: 8,
//    padding: 8,
//    backgroundColor: '#ffffff',
//    borderRadius: 12,
//    elevation: 3,
//  },
//  image: {
//    width: 50,
//    height: 50,
//    marginBottom: 6,
//  },
//  label: {
//    fontSize: 14,
//    fontWeight: 'bold',
//  },
//  question: {
//    marginTop: 24,
//    fontSize: 16,
//    color: '#37474f',
//    textAlign: 'center',
//  },
//  recommendButton: {
//    backgroundColor: '#1976d2',
//    paddingVertical: 14,
//    paddingHorizontal: 32,
//    borderRadius: 10,
//    marginTop: 16,
//    marginBottom: 40,
//    elevation: 4,
//  },
//  recommendButtonText: {
//    color: '#ffffff',
//    fontSize: 16,
//    fontWeight: 'bold',
//  },
//});
//
//export default CategorySelect;
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

const categories = [
  { label: '고기', image: require('../../assets/img/meat.jpg') },
  { label: '과일', image: require('../../assets/img/fruit.jpg') },
  { label: '채소', image: require('../../assets/img/vege.jpg') },
  { label: '해산물', image: require('../../assets/img/seafood.jpg') },
  { label: '유제품', image: require('../../assets/img/dairy.jpg') },
  { label: '조미료', image: require('../../assets/img/seasoning.jpg') },
  { label: '음료', image: require('../../assets/img/drink.jpg') },
  { label: '주류', image: require('../../assets/img/alcohol.jpg') },
];

const CategorySelect = ({ navigation }) => {
  const handleRecommend = () => {
    navigation.navigate('RecommendedRecipesScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← 뒤로가기</Text>
      </TouchableOpacity>

      <Text style={styles.title}>카테고리</Text>

      <View style={styles.searchBar}>
        <TextInput placeholder="검색" style={styles.input} />
      </View>

      <View style={styles.grid}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.question}>냉장고에서 선택해 추천받으시겠습니까?</Text>

      <TouchableOpacity style={styles.recommendButton} onPress={handleRecommend}>
        <Text style={styles.recommendButtonText}>추천받기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingTop: 80, // 뒤로가기 버튼 공간 확보
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#ffffffcc',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#1976d2',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: '#90caf9',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    width: '90%',
  },
  input: {
    flex: 1,
    height: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  card: {
    width: 90,
    alignItems: 'center',
    margin: 8,
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 60,
    marginBottom: 6,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  question: {
    marginTop: 24,
    fontSize: 16,
    color: '#37474f',
    textAlign: 'center',
  },
  recommendButton: {
    backgroundColor: '#1976d2',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 40,
    elevation: 4,
  },
  recommendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default CategorySelect;
