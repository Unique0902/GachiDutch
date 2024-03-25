import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Test = ({ route, navigation }) => {
  return (
    <View>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('Test')}
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button
        title='Go back to first screen in stack'
        onPress={() => navigation.popToTop()}
      />
      <WebView
        source={{ uri: 'https://naver.com' }}
        style={{
          height: webViewHeight,
          opacity: 0.99,
          minHeight: 1,
        }}
      />
    </View>
  );
};

export default Test;
