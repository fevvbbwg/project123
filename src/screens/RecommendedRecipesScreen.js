//import React, { useState } from 'react';
//import {
//  View,
//  Text,
//  Image,
//  TextInput,
//  StyleSheet,
//  ScrollView,
//  TouchableOpacity,
//} from 'react-native';
//
//const categories = ['한식', '중식', '일식', '양식'];
//
//// ✅ 여기서 사과, 당근 제거하고 양파, 계란 추가함
//const allIngredients = [
//  { id: 1, name: '양파', dday: 10, image: require('../../assets/img/onion.jpg') },
//  { id: 2, name: '계란', dday: 7, image: require('../../assets/img/egg.jpg') },
//  { id: 3, name: '치즈', dday: 15, image: require('../../assets/img/cheese.jpg') },
//  { id: 4, name: '오이', dday: 14, image: require('../../assets/img/cucumber.jpg') },
//  { id: 5, name: '우유', dday: 7, image: require('../../assets/img/milk.jpg') },
//  { id: 6, name: '오렌지', dday: 5, image: require('../../assets/img/orange.jpg') },
//  { id: 7, name: '배', dday: 11, image: require('../../assets/img/pear.jpg') },
//  { id: 8, name: '감자', dday: 2, image: require('../../assets/img/potato.jpg') },
//];
//
//const RecommendedRecipesScreen = ({ navigation }) => {
//  const [selectedCategory, setSelectedCategory] = useState('한식');
//  const [checkedItems, setCheckedItems] = useState({});
//  const [searchText, setSearchText] = useState('');
//
//  const toggleCheck = (id) => {
//    setCheckedItems((prev) => ({
//      ...prev,
//      [id]: !prev[id],
//    }));
//  };
//
//  const filteredIngredients = allIngredients.filter(item =>
//    item.name.toLowerCase().includes(searchText.toLowerCase())
//  );
//
//  const selectedIngredients = allIngredients.filter(item => checkedItems[item.id]);
//
//  const handleRecommend = () => {
//    console.log(`선택한 카테고리: ${selectedCategory}`);
//    console.log(`선택한 재료: ${selectedIngredients.map(i => i.name).join(', ')}`);
//    navigation.navigate('RecipeResultScreen', {
//      category: selectedCategory,
//      ingredients: selectedIngredients,
//    });
//  };
//
//  return (
//    <View style={styles.wrapper}>
//      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//        <Text style={styles.backButtonText}>← 뒤로가기</Text>
//      </TouchableOpacity>
//
//      <ScrollView contentContainerStyle={styles.container}>
//        <TextInput
//          style={styles.searchInput}
//          placeholder="재료 검색"
//          value={searchText}
//          onChangeText={setSearchText}
//        />
//
//        <View style={styles.categoryContainer}>
//          {categories.map((cat) => (
//            <TouchableOpacity
//              key={cat}
//              style={[
//                styles.categoryButton,
//                selectedCategory === cat && styles.categorySelected,
//              ]}
//              onPress={() => setSelectedCategory(cat)}
//            >
//              <Text
//                style={[
//                  styles.categoryText,
//                  selectedCategory === cat && styles.categoryTextSelected,
//                ]}
//              >
//                {cat}
//              </Text>
//            </TouchableOpacity>
//          ))}
//        </View>
//
//        <View style={styles.grid}>
//          {filteredIngredients.map((item) => (
//            <View key={item.id} style={styles.itemContainer}>
//              <Text style={styles.dday}>D-{item.dday}</Text>
//              <Image source={item.image} style={styles.image} />
//              <Text style={styles.name}>{item.name}</Text>
//              <TouchableOpacity
//                style={[styles.checkbox, checkedItems[item.id] && styles.checked]}
//                onPress={() => toggleCheck(item.id)}
//              >
//                {checkedItems[item.id] && <Text style={styles.checkmark}>✓</Text>}
//              </TouchableOpacity>
//            </View>
//          ))}
//        </View>
//
//        <TouchableOpacity style={styles.recommendButton} onPress={handleRecommend}>
//          <Text style={styles.recommendText}>레시피 추천 받기</Text>
//        </TouchableOpacity>
//      </ScrollView>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  wrapper: {
//    flex: 1,
//    backgroundColor: '#fff',
//  },
//  container: {
//    paddingVertical: 20,
//    alignItems: 'center',
//    paddingTop: 90,
//  },
//  backButton: {
//    position: 'absolute',
//    top: 40,
//    left: 20,
//    zIndex: 1,
//    paddingVertical: 6,
//    paddingHorizontal: 12,
//    backgroundColor: '#f0f0f0',
//    borderRadius: 8,
//  },
//  backButtonText: {
//    fontSize: 16,
//    fontWeight: 'bold',
//    color: '#007aff',
//  },
//  searchInput: {
//    width: '90%',
//    height: 40,
//    borderWidth: 1,
//    borderColor: '#ccc',
//    paddingHorizontal: 10,
//    borderRadius: 10,
//    marginBottom: 15,
//  },
//  categoryContainer: {
//    flexDirection: 'row',
//    justifyContent: 'center',
//    marginBottom: 10,
//    flexWrap: 'wrap',
//  },
//  categoryButton: {
//    borderWidth: 1,
//    borderColor: '#ccc',
//    borderRadius: 20,
//    paddingHorizontal: 15,
//    paddingVertical: 5,
//    margin: 10,
//  },
//  categorySelected: {
//    backgroundColor: '#007aff',
//    borderColor: '#007aff',
//  },
//  categoryText: {
//    color: '#000',
//  },
//  categoryTextSelected: {
//    color: '#fff',
//  },
//  grid: {
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'center',
//  },
//  itemContainer: {
//    width: 100,
//    height: 150,
//    margin: 8,
//    alignItems: 'center',
//    backgroundColor: '#e6f0ff',
//    borderRadius: 10,
//    padding: 5,
//    position: 'relative',
//  },
//  image: {
//    width: 90,
//    height: 70,
//    resizeMode: 'contain',
//    marginVertical: 15,
//  },
//  dday: {
//    fontSize: 12,
//    fontWeight: 'bold',
//  },
//  name: {
//    fontSize: 15,
//    fontWeight: '600',
//  },
//  checkbox: {
//    width: 22,
//    height: 22,
//    borderWidth: 1,
//    borderColor: '#333',
//    position: 'absolute',
//    bottom: 5,
//    right: 5,
//    alignItems: 'center',
//    justifyContent: 'center',
//    borderRadius: 4,
//  },
//  checked: {
//    backgroundColor: '#007aff',
//    borderColor: '#007aff',
//  },
//  checkmark: {
//    color: 'white',
//    fontWeight: 'bold',
//  },
//  recommendButton: {
//    backgroundColor: '#28a745',
//    paddingHorizontal: 20,
//    paddingVertical: 10,
//    borderRadius: 12,
//    marginTop: 20,
//  },
//  recommendText: {
//    color: '#fff',
//    fontSize: 16,
//    fontWeight: 'bold',
//  },
//});
//
//export default RecommendedRecipesScreen;
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const categories = ['한식', '중식', '일식', '양식'];

const allIngredients = [
  { id: 1, name: '양파', dday: 10, image: require('../../assets/img/onion.jpg') },
  { id: 2, name: '계란', dday: 7, image: require('../../assets/img/egg.jpg') },
  { id: 3, name: '치즈', dday: 15, image: require('../../assets/img/cheese.jpg') },
  { id: 4, name: '오이', dday: 14, image: require('../../assets/img/cucumber.jpg') },
  { id: 5, name: '우유', dday: 7, image: require('../../assets/img/milk.jpg') },
  { id: 6, name: '오렌지', dday: 5, image: require('../../assets/img/orange.jpg') },
  { id: 7, name: '배', dday: 11, image: require('../../assets/img/pear.jpg') },
  { id: 8, name: '감자', dday: 2, image: require('../../assets/img/potato.jpg') },
];

const RecommendedRecipesScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('한식');
  const [checkedItems, setCheckedItems] = useState({});
  const [searchText, setSearchText] = useState('');

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredIngredients = allIngredients.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const selectedIngredients = allIngredients.filter(item => checkedItems[item.id]);

  const handleRecommend = () => {
    console.log(`선택한 카테고리: ${selectedCategory}`);
    console.log(`선택한 재료: ${selectedIngredients.map(i => i.name).join(', ')}`);
    navigation.navigate('RecipeResultScreen', {
      category: selectedCategory,
      ingredients: selectedIngredients,
    });
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← 뒤로가기</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="재료 검색"
          value={searchText}
          onChangeText={setSearchText}
        />

        <View style={styles.categoryContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryButton,
                selectedCategory === cat && styles.categorySelected,
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextSelected,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.grid}>
          {filteredIngredients.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.itemContainer,
                checkedItems[item.id] && styles.itemSelected,
              ]}
              onPress={() => toggleCheck(item.id)}
            >
              <Text style={styles.dday}>D-{item.dday}</Text>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.recommendButton} onPress={handleRecommend}>
          <Text style={styles.recommendText}>레시피 추천 받기</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingTop: 90,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007aff',
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 10,
  },
  categorySelected: {
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  categoryText: {
    color: '#000',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemContainer: {
    width: 100,
    height: 150,
    margin: 8,
    alignItems: 'center',
    backgroundColor: '#e6f0ff',
    borderRadius: 10,
    padding: 5,
    position: 'relative',
  },
  itemSelected: {
    borderWidth: 2,
    borderColor: '#007aff',
  },
  image: {
    width: 90,
    height: 70,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  dday: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
  },
  recommendButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 20,
  },
  recommendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecommendedRecipesScreen;
