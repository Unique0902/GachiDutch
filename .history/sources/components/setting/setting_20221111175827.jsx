import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Setting = ({ route, navigation }) => {
  const { userData } = route.params;
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  return (
    <View style={[headerStyle, styles.container]}>
      <View style={styles.header}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name='arrow-back' size={30} color='black' />
        </Pressable>
        <Text style={styles.headerText}>프로필</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.profileSec}>
            <View styles={styles.profile}>
              <Image style={styles.profileImage} />
              <Text style={styles.nameText}>{userData && userData.name}</Text>
            </View>
            <Pressable>
              <Text>수정</Text>
            </Pressable>
          </View>
          <View style={styles.satisfactionSec}>
            <Text>만족률</Text>
            <Text>96퍼센트</Text>
          </View>
          <View style={styles.evaluationSec}>
            <Text>친절하고 매너가 좋아요.</Text>
            <Text>응답이 빨라요.</Text>
            <Text>시간 약속을 잘 지켜요.</Text>
          </View>
          <View style={styles.reviewSec}>
            <Text>감사합니다 ^^.</Text>
            <Text>응답이 빨라요.</Text>
            <Text>시간 약속을 잘 지켜요.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  scroll: {
    flex: 12,
  },
  profileSec: {
    padding: 10,
  },
  profile: {
    alignItems: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: 'black',
  },
  nameText: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 30,
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Setting;
