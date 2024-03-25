import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Test = ({ route, navigation }) => {
  return (
    <WebView
      source={{ html: '<h1>Hello world</h1>' }}
      style={{
        opacity: 0.99,
        minHeight: 1,
      }}
    />
  );
};

export default Test;
