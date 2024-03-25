import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Test = ({ route, navigation }) => {
  return (
    <View>
      <WebView
        source={{ url: 'https://naver.com' }}
        style={{
          opacity: 0.99,
          minHeight: 1,
        }}
      />
    </View>
  );
};

export default Test;
