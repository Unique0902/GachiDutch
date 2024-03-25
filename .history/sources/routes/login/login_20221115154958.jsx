import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ route, navigation }) => {
  const { setLogin, setUserData } = route.params;
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };

  return (
    <View style={[styles.container, headerStyle]}>
      <WebView
        source={{ uri: 'https://unique0902.github.io/dutchLogin' }}
        style={{
          opacity: 0.99,
          minHeight: 1,
        }}
        onMessage={(event) => {
          const data = event.nativeEvent.data;
          console.log(data);
          AsyncStorage.setItem('loginDatas', data, () => {
            setUserData(JSON.parse(data));
            setLogin(true);
            navigation.navigate('Main');
          });
        }}
      />
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={40} color='black' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch', // 이부분 중요 이거 안써주면 WebView 에 width 값을 지정해야함..
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: 'white',
  },
});

export default Login;
