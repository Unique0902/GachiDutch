import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Review = ({ userDataService, route, navigation }) => {
  const { userData } = route.params;
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');

  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };

  return (
    <View style={[headerStyle, styles.container]}>
      <View style={styles.header}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name='arrow-back' size={30} color='black' />
        </Pressable>
        <Text style={styles.headerText}>문의하기</Text>
      </View>
      <View style={styles.scroll}>
        <Text>문의와 관련된 답변은 쪽지함으로 전달됩니다.</Text>
        <TextInput
          style={styles.titleInput}
          onChangeText={setTitleText}
          value={titleText}
        />
        <TextInput
          style={styles.contentInput}
          onChangeText={setContentText}
          value={contentText}
        />
        <Pressable style={styles.inquireBtn}>
          <Text style={styles.inquireBtnText}>문의하기</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  scroll: {
    flex: 12,
  },
  selectSec: {
    flexDirection: 'row',
    height: 60,
  },
  selectBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  promiseSec: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 30,
  },
  profileSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: 'gray',
    marginRight: 20,
  },
  promiseLoc: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FBBA00',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
  },
  promiseTime: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
  },
  promiseInform: {
    marginLeft: 20,
  },
  evaluationSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  evaluationTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
  },
  evaluation: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 25,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
  },
  reviewSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  check: {
    color: 'white',
    position: 'absolute',
    bottom: 0.5,
    left: 2,
    fontSize: 20,
  },
  evaluationText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  reviewInput: {
    padding: 15,
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  applyBtn: {
    margin: 20,
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    alignSelf: 'center',
  },
  warnText: {
    color: 'red',
    fontSize: 15,
    marginTop: 10,
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Review;
