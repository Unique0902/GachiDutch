import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Setting = ({ route, navigation, userData }) => {
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  return (
    <View style={[headerStyle, styles.container]}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={40} color='black' />
        </Pressable>
        <Text>프로필</Text>
      </View>
      <ScrollView>
        <View style={styles.profileSec}>
          <View styles={styles.profile}>
            <Image style={styles.profileImage} />
            <Text style={styles.nameText}>{userData && userData.name}</Text>
          </View>
        </View>
      </ScrollView>
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

export default Setting;
