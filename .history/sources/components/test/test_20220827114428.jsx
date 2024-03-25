import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Test = ({ navigation }) => {
  return (
    <View>
      <Text>Hi</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('Test')}
      />
    </View>
  );
};

export default Test;
