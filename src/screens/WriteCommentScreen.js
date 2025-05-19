//import React, { useState } from 'react';
//import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
//
//const WriteCommentScreen = ({ navigation }) => {
//  const [comment, setComment] = useState('');
//
//  const handleSubmit = () => {
//    if (comment.trim() === '') {
//      Alert.alert('알림', '댓글을 입력해주세요!');
//      return;
//    }
//    Alert.alert('등록 완료', '댓글이 등록되었습니다!');
//    navigation.goBack();
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//        <Text style={styles.backText}>← 뒤로</Text>
//      </TouchableOpacity>
//
//      <Text style={styles.title}>✏️ 댓글 작성</Text>
//
//      <TextInput
//        style={styles.input}
//        placeholder="댓글을 입력하세요."
//        multiline
//        value={comment}
//        onChangeText={setComment}
//      />
//
//      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//        <Text style={styles.submitButtonText}>등록하기</Text>
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
//    fontSize: 22,
//    fontWeight: 'bold',
//    textAlign: 'center',
//    marginBottom: 30,
//    color: '#222',
//  },
//  input: {
//    height: 200,
//    backgroundColor: '#fff',
//    borderRadius: 12,
//    padding: 16,
//    fontSize: 16,
//    textAlignVertical: 'top',
//    shadowColor: '#000',
//    shadowOpacity: 0.05,
//    shadowRadius: 4,
//    shadowOffset: { width: 0, height: 2 },
//    elevation: 2,
//  },
//  submitButton: {
//    backgroundColor: '#FF6B6B',
//    paddingVertical: 14,
//    borderRadius: 10,
//    alignItems: 'center',
//    marginTop: 30,
//  },
//  submitButtonText: {
//    color: '#fff',
//    fontWeight: 'bold',
//    fontSize: 18,
//  },
//});
//
//export default WriteCommentScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const WriteCommentScreen = ({ navigation, comments, setComments }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim() === '') {
      Alert.alert('알림', '댓글을 입력해주세요!');
      return;
    }

    const newComment = {
      id: comments.length + 1, // 단순히 마지막 id + 1
      username: '익명', // 또는 사용자 이름을 따로 받아올 수도 있음
      text: comment,
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'), // yyyy.mm.dd 형태
    };

    setComments([...comments, newComment]);

    Alert.alert('등록 완료', '댓글이 등록되었습니다!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← 뒤로</Text>
      </TouchableOpacity>

      <Text style={styles.title}>✏️ 댓글 작성</Text>

      <TextInput
        style={styles.input}
        placeholder="댓글을 입력하세요."
        multiline
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>등록하기</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#222',
  },
  input: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  submitButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default WriteCommentScreen;
