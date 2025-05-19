import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // ← 아이콘용 라이브러리

const FridgeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="#000" />
          <Text style={styles.backText}>뒤로가기</Text>
        </TouchableOpacity>
      </View>

      {/* 카테고리 버튼 */}
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('CategorySelect')}>
        <Text style={styles.categoryButtonText}>카테고리</Text>
      </TouchableOpacity>

      {/* 식재료 목록 */}
      <Text style={styles.categoryTitle}>유통기한 임박</Text>
      <View style={styles.row}>
        <Ingredient image={require('../../assets/img/yogurt.jpg')} label="D-1" />
        <Ingredient image={require('../../assets/img/potato.jpg')} label="D-2" />
        <Ingredient image={require('../../assets/img/sweetpotato.jpg')} label="D-4" />
        <Ingredient image={require('../../assets/img/cucumber.jpg')} label="D-5" />
      </View>

      <Text style={styles.categoryTitle}>채소(5)</Text>
      <View style={styles.row}>
        <Ingredient image={require('../../assets/img/carrot.jpg')} label="D-20" />
        <Ingredient image={require('../../assets/img/lettuce.jpg')} label="D-14" />
        <Ingredient image={require('../../assets/img/potato.jpg')} label="D-2" />
        <Ingredient image={require('../../assets/img/sweetpotato.jpg')} label="D-14" />
      </View>

      <Text style={styles.categoryTitle}>과일(5)</Text>
      <View style={styles.row}>
        <Ingredient image={require('../../assets/img/apple.jpg')} label="D-8" />
        <Ingredient image={require('../../assets/img/watermelon.jpg')} label="D-10" />
        <Ingredient image={require('../../assets/img/orange.jpg')} label="D-5" />
        <Ingredient image={require('../../assets/img/strawberry.jpg')} label="D-15" />
      </View>

      <Text style={styles.categoryTitle}>유제품(3)</Text>
      <View style={styles.row}>
        <Ingredient image={require('../../assets/img/milk.jpg')} label="D-7" />
        <Ingredient image={require('../../assets/img/cheese.jpg')} label="D-15" />
        <Ingredient image={require('../../assets/img/yogurt.jpg')} label="D-1" />
      </View>
    </ScrollView>
  );
};

const Ingredient = ({ image, label }) => (
  <View style={styles.ingredientCard}>
    <Image source={image} style={styles.image} />
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f8ff',
    padding: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    marginLeft: 4,
    color: '#000',
  },
  categoryButton: {
    backgroundColor: '#b3e5fc',
    borderColor: '#2196f3',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  ingredientCard: {
    width: 70,
    alignItems: 'center',
    margin: 6,
  },
  image: {
    width: 90,
    height: 60,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 2,
  },
});

export default FridgeScreen;

