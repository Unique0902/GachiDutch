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

const Taxi = ({ route, navigation }) => {
  const { userData } = route.params;
  const [location, setLocation] = useState(null);
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  return (
    <View style={[styles.container]}>
      <View>
        <Text>이 기능은 아직 준비중이에요. ㅜ</Text>
      </View>
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

export default Taxi;
