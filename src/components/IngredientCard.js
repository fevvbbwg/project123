import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // 필요시 설치: npm install @react-native-community/checkbox

const categories = ['한식', '중식', '일식', '양식'];

const ingredients = [
  { id: 1, name: '당근', dday: 20, image: require('./assets/carrot.png') },
  { id: 2, name: '계란', dday: 14, image: require('./assets/egg.png') },
  { id: 3, name: '감자', dday: 2, image: require('./assets/potato.png') },
  { id: 4, name: '양파', dday: 4, image: require('./assets/onion.png') },
  { id: 5, name: '오이', dday: 14, image: require('./assets/cucumber.png') },
  { id: 6, name: '사과', dday: 8, image: require('./assets/apple.png') },
  { id: 7, name: '수박', dday: 10, image: require('./assets/watermelon.png') },
  { id: 8, name: '오렌지', dday: 5, image: require('./assets/orange.png') },
  { id: 9, name: '딸기', dday: 15, image: require('./assets/strawberry.png') },
  { id: 10, name: '배', dday: 11, image: require('./assets/pear.png') },
  { id: 11, name: '우유', dday: 7, image: require('./assets/milk.png') },
  { id: 12, name: '치즈', dday: 15, image: require('./assets/cheese.png') },
  { id: 13, name: '요거트', dday: 1, image: require('./assets/yogurt.png') },
];

const IngredientSelectScreen = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('한식');
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredIngredients = ingredients.filter((item) =>
    item.name.includes(searchText)
  );

  const renderIngredient = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.dday}>D-{item.dday}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <CheckBox
        value={selectedItems.includes(item.id)}
        onValueChange={() => toggleItem(item.id)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="재료 검색"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCuisine === cat && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCuisine(cat)}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredIngredients}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefeff',
    padding: 10,
  },
  searchWrapper: {
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  selectedCategory: {
    backgroundColor: '#ffdddd',
    borderColor: '#f00',
  },
  categoryText: {
    fontWeight: '600',
  },
  grid: {
    gap: 12,
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    backgroundColor: '#99d8ff',
    borderRadius: 10,
    padding: 6,
    alignItems: 'center',
    margin: 5,
  },
  dday: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  name: {
    marginBottom: 4,
    fontSize: 14,
  },
});

export default IngredientSelectScreen;
