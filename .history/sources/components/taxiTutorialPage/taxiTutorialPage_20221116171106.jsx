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
import { Ionicons } from '@expo/vector-icons';
import { isLogin, logout } from '../../services/asyncstorage';

const TaxiTutorialPage = ({ userDataService, route, navigation }) => {
  const { userData, setUserData, setLogin } = route.params;
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };

  return (
    <View style={[headerStyle, styles.container]}>
      <Pressable>
        <Text>건너뛰기</Text>
      </Pressable>
      <View style={styles.main}>
        <Image
          source={require('../../images/first.jpg')}
          style={styles.tutorialImg}
        />
      </View>
      <Pressable>
        <Text>이전</Text>
      </Pressable>
      <Pressable>
        <Text>다음</Text>
      </Pressable>
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
  main: {
    flex: 12,
    padding: 10,
  },

  title: {
    marginTop: 10,
    padding: 20,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 1,
    // borderStyle: 'solid',
  },

  titleText: {
    fontWeight: '500',
    fontSize: 25,
    color: '#FBBA00',
  },
  content: {
    marginTop: 5,
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: 'gray',
  },
  withdrawBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 10,
    marginTop: 50,
    height: 60,
  },

  withdrawBtnText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },

  enter: {
    position: 'absolute',
    right: 7,
    color: 'gray',
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default TaxiTutorialPage;
