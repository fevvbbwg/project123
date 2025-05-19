import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RecipeDetailScreen = ({ navigation }) => {
  const [likes, setLikes] = useState(2); // 초기 추천 수 2

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    navigation.navigate('CommentScreen'); // ❗ 'CommentScreen'을 Stack에 추가해야 함
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← 뒤로</Text>
      </TouchableOpacity>

      <Image source={require('../../assets/img/recipe6.jpg')} style={styles.mainImage} />
      <Text style={styles.recipeTitle}>계란말이 황금 레시피</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>조리 순서</Text>
        <Text style={styles.step}>1. 재료를 준비해 주세요.</Text>
        <Image source={require('../../assets/img/step1.jpg')} style={styles.stepImage} />
        <Text style={styles.step}>2. 대파 기름을 내주세요.</Text>
        <Image source={require('../../assets/img/step2.jpg')} style={styles.stepImage} />
        <Text style={styles.step}>...</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleComment}>
          <Text>💬 댓글 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Text>❤️ 추천수 {likes}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>이 레시피에 마음에 드셨다면</Text>
      <View style={styles.recommendations}>
        <View style={styles.recommendationItem}>
          <Image source={require('../../assets/img/recipe8.jpg')} style={styles.smallImage} />
          <Text style={styles.recommendationText}>치즈계란찜</Text>
        </View>
        <View style={styles.recommendationItem}>
          <Image source={require('../../assets/img/recipe9.jpg')} style={styles.smallImage} />
          <Text style={styles.recommendationText}>계란국</Text>
        </View>
        <View style={styles.recommendationItem}>
          <Image source={require('../../assets/img/recipe10.jpg')} style={styles.smallImage} />
          <Text style={styles.recommendationText}>에그샌드위치</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  backText: {
    fontSize: 25,
  },
  mainImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  recipeTitle: {
    textAlign: 'center',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  step: {
    fontSize: 14,
    marginVertical: 4,
  },
  stepImage: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: -2,
  },
  actionButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 6,
    marginHorizontal: 10,
  },
  footerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 1,
  },
  recommendations: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 2,
    paddingHorizontal: 10,
  },
  recommendationItem: {
    alignItems: 'center',
    width: 90,
  },
  smallImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  recommendationText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RecipeDetailScreen;
