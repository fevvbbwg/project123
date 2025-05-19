//import React from 'react';
//import {
//  View,
//  Text,
//  TextInput,
//  Image,
//  TouchableOpacity,
//  StyleSheet,
//  ScrollView,
//  Alert,
//} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { useNavigation } from '@react-navigation/native';
//
//const MainScreen = () => {
//  const navigation = useNavigation();
//
//  const handleSearch = () => Alert.alert('검색 버튼 클릭됨!');
//
//  const handleMore = (section) => {
//    if (section === '오늘의 레시피') {
//      navigation.navigate('TodayRecipeListScreen');
//    } else if (section === '추천수 많은 레시피') {
//      navigation.navigate('PopularRecipeListScreen');
//    } else {
//      Alert.alert(`${section} - 더보기 클릭됨!`);
//    }
//  };
//
//  const handleTabPress = (tab) => {
//    if (tab === '냉장고') {
//      navigation.navigate('Fridge');
//    } else {
//      Alert.alert(`${tab} 탭 클릭됨!`);
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      {/* 검색창 */}
//      <View style={styles.searchBar}>
//        <TextInput placeholder="요리재료 검색" style={styles.input} />
//        <TouchableOpacity onPress={handleSearch}>
//          <Icon name="search" size={20} color="#000" />
//        </TouchableOpacity>
//        <Icon
//          name="notifications-outline"
//          size={24}
//          color="#000"
//          style={styles.bell}
//        />
//      </View>
//
//      <ScrollView style={styles.content}>
//        {/* 오늘의 레시피 */}
//        <View style={styles.cardWrapper}>
//          <View style={styles.section}>
//            <View style={styles.sectionHeader}>
//              <Text style={styles.sectionTitle}>오늘의 레시피</Text>
//              <TouchableOpacity onPress={() => handleMore('오늘의 레시피')}>
//                <Text style={styles.moreText}>더보기</Text>
//              </TouchableOpacity>
//            </View>
//            <View style={styles.recipeRow}>
//              <View style={styles.recipeCard}>
//                <Image
//                  source={require('../../assets/img/recipe1.jpg')}
//                  style={styles.recipeImage}
//                />
//                <Text style={styles.recipeLabel}>영양만점 제육볶음</Text>
//              </View>
//              <View style={styles.recipeCard}>
//                <Image
//                  source={require('../../assets/img/recipe2.jpg')}
//                  style={styles.recipeImage}
//                />
//                <Text style={styles.recipeLabel}>고소한 삼겹살 숙주볶음</Text>
//              </View>
//            </View>
//          </View>
//        </View>
//
//        {/* 추천수 많은 레시피 */}
//        <View style={styles.cardWrapper}>
//          <View style={styles.section}>
//            <View style={styles.sectionHeader}>
//              <Text style={styles.sectionTitle}>추천수 많은 레시피</Text>
//              <TouchableOpacity
//                onPress={() => handleMore('추천수 많은 레시피')}>
//                <Text style={styles.moreText}>더보기</Text>
//              </TouchableOpacity>
//            </View>
//            <View style={styles.recipeRow}>
//              <View style={styles.recipeCard}>
//                <Image
//                  source={require('../../assets/img/recipe3.jpg')}
//                  style={styles.recipeImage}
//                />
//                <Text style={styles.recipeLabel}>바삭바삭 새우튀김</Text>
//              </View>
//              <View style={styles.recipeCard}>
//                <Image
//                  source={require('../../assets/img/recipe4.jpg')}
//                  style={styles.recipeImage}
//                />
//                <Text style={styles.recipeLabel}>입맛도는 비빔국수</Text>
//              </View>
//            </View>
//          </View>
//        </View>
//      </ScrollView>
//
//      {/* 하단 탭바 */}
//      <View style={styles.tabBar}>
//        {[
//          { icon: 'snow-outline', label: '냉장고' },
//          { icon: 'barcode-outline', label: '스캔 등록' },
//          { icon: 'clipboard-outline', label: '레시피' },
//          { icon: 'person-outline', label: 'MY' },
//        ].map((tab) => (
//          <TouchableOpacity key={tab.label} onPress={() => handleTabPress(tab.label)}>
//            <View style={styles.tabItem}>
//              <Icon name={tab.icon} size={24} />
//              <Text style={styles.tabLabel}>{tab.label}</Text>
//            </View>
//          </TouchableOpacity>
//        ))}
//      </View>
//    </View>
//  );
//};
//
//export default MainScreen;
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//  },
//  searchBar: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    backgroundColor: '#e6e6e6',
//    margin: 20,
//    borderRadius: 5,
//    paddingHorizontal: 10,
//    height: 40,
//  },
//  input: { flex: 1 },
//  bell: { marginLeft: 10 },
//  content: {
//    flex: 1,
//  },
//  cardWrapper: {
//    backgroundColor: '#e0e0e0',
//    paddingVertical: 10,
//    paddingHorizontal: 10,
//    marginBottom: 15,
//  },
//  section: {
//    backgroundColor: '#fff',
//    marginTop: 20,
//    marginBottom: 30,
//    paddingHorizontal: 10,
//  },
//  sectionHeader: {
//    flexDirection: 'row',
//    justifyContent: 'space-between',
//    marginBottom: 10,
//  },
//  sectionTitle: {
//    fontWeight: 'bold',
//    fontSize: 14,
//  },
//  moreText: {
//    fontSize: 12,
//    color: 'black',
//  },
//  recipeRow: {
//    flexDirection: 'row',
//    justifyContent: 'space-around',
//  },
//  recipeCard: {
//    alignItems: 'center',
//    width: '45%',
//  },
//  recipeImage: {
//    width: '100%',
//    height: 100,
//    borderRadius: 5,
//  },
//  recipeLabel: {
//    marginTop: 5,
//    fontSize: 12,
//  },
//  tabBar: {
//    position: 'absolute',
//    bottom: 80,
//    left: 0,
//    width: '100%',
//    flexDirection: 'row',
//    justifyContent: 'space-around',
//    backgroundColor: '#fff',
//    paddingVertical: 10,
//    borderTopWidth: 1,
//    borderTopColor: '#000',
//    borderBottomColor: '#000',
//    borderBottomWidth: 1,
//  },
//  tabItem: {
//    alignItems: 'center',
//    paddingVertical: 8,
//  },
//  tabLabel: {
//    fontSize: 15,
//    marginTop: 5,
//  },
//});
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleSearch = () => {
    Alert.alert('검색 버튼 클릭됨!');
  };

  const handleMore = (section) => {
    if (section === '오늘의 레시피') {
      navigation.navigate('TodayRecipeListScreen');
    } else if (section === '추천수 많은 레시피') {
      navigation.navigate('PopularRecipeListScreen');
    } else {
      Alert.alert(`${section} - 더보기 클릭됨!`);
    }
  };

  const handleTabPress = (tab) => {
    if (tab === '냉장고') {
      navigation.navigate('Fridge');
    } else if (tab === 'MY') {
      navigation.navigate('MyPageScreen'); // ✅ 마이페이지 이동
    } else {
      Alert.alert(`${tab} 탭 클릭됨!`);
    }
  };

  return (
    <View style={styles.container}>
      {/* 🔍 검색창 */}
      <View style={styles.searchBar}>
        <TextInput placeholder="요리재료 검색" style={styles.input} />
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
        <Icon name="notifications-outline" size={24} color="#000" style={styles.bell} />
      </View>

      <ScrollView style={styles.content}>
        {/* 🍽️ 오늘의 레시피 */}
        <View style={styles.cardWrapper}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>오늘의 레시피</Text>
              <TouchableOpacity onPress={() => handleMore('오늘의 레시피')}>
                <Text style={styles.moreText}>더보기</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recipeRow}>
              <View style={styles.recipeCard}>
                <Image
                  source={require('../../assets/img/recipe1.jpg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeLabel}>영양만점 제육볶음</Text>
              </View>
              <View style={styles.recipeCard}>
                <Image
                  source={require('../../assets/img/recipe2.jpg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeLabel}>고소한 삼겹살 숙주볶음</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 🌟 추천수 많은 레시피 */}
        <View style={styles.cardWrapper}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>추천수 많은 레시피</Text>
              <TouchableOpacity onPress={() => handleMore('추천수 많은 레시피')}>
                <Text style={styles.moreText}>더보기</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recipeRow}>
              <View style={styles.recipeCard}>
                <Image
                  source={require('../../assets/img/recipe3.jpg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeLabel}>바삭바삭 새우튀김</Text>
              </View>
              <View style={styles.recipeCard}>
                <Image
                  source={require('../../assets/img/recipe4.jpg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeLabel}>입맛도는 비빔국수</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* ⬇️ 하단 탭바 */}
      <View style={styles.tabBar}>
        {[
          { icon: 'snow-outline', label: '냉장고' },
          { icon: 'barcode-outline', label: '스캔 등록' },
          { icon: 'clipboard-outline', label: '레시피' },
          { icon: 'person-outline', label: 'MY' },
        ].map((tab) => (
          <TouchableOpacity key={tab.label} onPress={() => handleTabPress(tab.label)}>
            <View style={styles.tabItem}>
              <Icon name={tab.icon} size={24} />
              <Text style={styles.tabLabel}>{tab.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    margin: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    flex: 1,
  },
  bell: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  cardWrapper: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  moreText: {
    fontSize: 12,
    color: 'black',
  },
  recipeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  recipeCard: {
    alignItems: 'center',
    width: '45%',
  },
  recipeImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  recipeLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  tabBar: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#000',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 15,
    marginTop: 5,
  },
});
