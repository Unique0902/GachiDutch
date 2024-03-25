import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Test = ({ route, navigation }) => {
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
    </View>
  );
};

export default Test;
