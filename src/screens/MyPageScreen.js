import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyPageScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* 프로필 헤더 */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/profile.jpg')} // 아까 네가 업로드한 이미지 이 경로에 저장해둬
          style={styles.profileImage}
        />
        <Text style={styles.userName}>홍길동</Text>
        <Icon name="settings-outline" size={24} color="#000" style={styles.settingIcon} />
      </View>

      {/* 유저 정보 */}
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>성명</Text>
          <TextInput style={styles.infoInput} value="홍길동" editable={false} />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>전화번호</Text>
          <TextInput style={styles.infoInput} value="010-xxxx-eeee" editable={false} />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>이메일</Text>
          <TextInput style={styles.infoInput} value="qwer@naver.com" editable={false} />
        </View>
      </View>

      {/* 버튼 목록 */}
      {['정보 수정', '알림 설정', '로그아웃', '회원 탈퇴'].map((text) => (
        <TouchableOpacity key={text} style={styles.menuButton}>
          <Text style={styles.menuText}>{text}</Text>
        </TouchableOpacity>
      ))}

      {/* 내가 본 레시피 */}
      <Text style={styles.sectionTitle}>내가 본 레시피</Text>
      <View style={styles.recipeRow}>
        <Image source={require('../../assets/img/recipe1.jpg')} style={styles.recipeImage} />
        <Image source={require('../../assets/img/recipe2.jpg')} style={styles.recipeImage} />
        <Image source={require('../../assets/img/recipe3.jpg')} style={styles.recipeImage} />
      </View>
    </ScrollView>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userName: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingIcon: {
    position: 'absolute',
    right: 20,
  },
  infoBox: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    width: 70,
    fontWeight: 'bold',
  },
  infoInput: {
    flex: 1,
    backgroundColor: '#cce0ff',
    padding: 8,
    borderRadius: 4,
  },
  menuButton: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 20,
  },
  recipeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
