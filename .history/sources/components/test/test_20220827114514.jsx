import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Test = ({ navigation }) => {
  return (
    <View>
      <Text>Hi</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('Test')}
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Test;
