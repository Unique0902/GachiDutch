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
  // const { setLogin } = route.params;
  const debugging = `
  setTimeout(function() { window.alert('hi') }, 2000);
     `;
  const html = `
      <html>
      <head></head>
      <body>
        <script>
          setTimeout(function () {
            window.ReactNativeWebView.postMessage("Hello!")
          }, 2000)
        </script>
      </body>
      </html>
    `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://unique0902.github.io/dutchLogin' }}
        style={{
          opacity: 0.99,
          minHeight: 1,
        }}
        injectedJavaScript={debugging}
        onMessage={(event) => {
          alert('sdfsd');
          const data = event.nativeEvent.data;
          console.log(data);
          AsyncStorage.setItem('loginDatas', data, () => {
            console.log('loginDatas:' + data);
            // setLogin(true);
            navigation.navigate('Main');
          });
        }}
      />
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={40} color='black' />
      </Pressable>
      <StatusBar />
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
