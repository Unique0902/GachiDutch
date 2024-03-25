import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Test = ({ route, navigation }) => {
  const { text } = route.params;
  return (
    <View>
      <Text>{text}</Text>
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
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default Test;
