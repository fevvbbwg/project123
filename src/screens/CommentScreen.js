//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
//
//const CommentScreen = ({ navigation }) => {
//  return (
//    <View style={styles.container}>
//      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//        <Text style={styles.backText}>← 뒤로</Text>
//      </TouchableOpacity>
//
//      <Text style={styles.title}>🍳 계란말이 황금 레시피</Text>
//      <Text style={styles.commentTitle}>💬 댓글 3</Text>
//
//      <ScrollView style={styles.commentContainer}>
//        <View style={styles.commentBox}>
//          <Text style={styles.username}>dss0577</Text>
//          <Text style={styles.comment}>오늘도 귀중한 레시피 감사합니다!</Text>
//          <Text style={styles.date}>2025.04.11</Text>
//        </View>
//
//        <View style={styles.commentBox}>
//          <Text style={styles.username}>ko77</Text>
//          <Text style={styles.comment}>재료가 생각보다 많이 필요하네요.</Text>
//          <Text style={styles.date}>2025.04.11</Text>
//        </View>
//
//        <View style={styles.commentBox}>
//          <Text style={styles.username}>oracle22</Text>
//          <Text style={styles.comment}>덕분에 맛있게 요리했어요 😊</Text>
//          <Text style={styles.date}>2025.04.11</Text>
//        </View>
//      </ScrollView>
//
//      <TouchableOpacity
//        style={styles.writeButton}
//        onPress={() => navigation.navigate('WriteCommentScreen')}
//      >
//        <Text style={styles.writeButtonText}>✏️ 댓글 쓰기</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingHorizontal: 20,
//    paddingTop: 50,
//    backgroundColor: '#FAFAFA',
//  },
//  backButton: {
//    position: 'absolute',
//    top: 20,
//    left: 20,
//    padding: 8,
//  },
//  backText: {
//    fontSize: 18,
//    color: '#333',
//  },
//  title: {
//    fontSize: 20,
//    fontWeight: 'bold',
//    textAlign: 'center',
//    marginBottom: 8,
//    color: '#222',
//  },
//  commentTitle: {
//    fontSize: 18,
//    fontWeight: '600',
//    color: '#007AFF',
//    marginBottom: 12,
//    textAlign: 'center',
//  },
//  commentContainer: {
//    flex: 1,
//  },
//  commentBox: {
//    backgroundColor: '#ffffff',
//    borderRadius: 12,
//    padding: 14,
//    marginBottom: 10,
//    shadowColor: '#000',
//    shadowOpacity: 0.1,
//    shadowRadius: 4,
//    shadowOffset: { width: 0, height: 2 },
//    elevation: 3,
//  },
//  username: {
//    fontWeight: 'bold',
//    fontSize: 14,
//    color: '#333',
//  },
//  comment: {
//    fontSize: 15,
//    marginVertical: 6,
//    color: '#555',
//  },
//  date: {
//    fontSize: 12,
//    color: '#999',
//    textAlign: 'right',
//  },
//  writeButton: {
//    backgroundColor: '#FF6B6B',
//    paddingVertical: 12,
//    borderRadius: 10,
//    alignItems: 'center',
//    marginTop: 12,
//    marginBottom: 20,
//  },
//  writeButtonText: {
//    color: '#fff',
//    fontWeight: 'bold',
//    fontSize: 16,
//  },
//});
//
//export default CommentScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CommentScreen = ({ navigation, comments }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← 뒤로</Text>
      </TouchableOpacity>

      <Text style={styles.title}>🍳 계란말이 황금 레시피</Text>
      <Text style={styles.commentTitle}>💬 댓글 {comments.length}</Text>

      <ScrollView style={styles.commentContainer}>
        {comments.map((comment) => (
          <View key={comment.id} style={styles.commentBox}>
            <Text style={styles.username}>{comment.username}</Text>
            <Text style={styles.comment}>{comment.text}</Text>
            <Text style={styles.date}>{comment.date}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.writeButton}
        onPress={() => navigation.navigate('WriteCommentScreen')}
      >
        <Text style={styles.writeButtonText}>✏️ 댓글 쓰기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#FAFAFA',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 8,
  },
  backText: {
    fontSize: 18,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#222',
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  commentContainer: {
    flex: 1,
  },
  commentBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  comment: {
    fontSize: 15,
    marginVertical: 6,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  writeButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  writeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CommentScreen;
