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
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ route, navigation }) => {
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
        <Text style={styles.headerText}>설정</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.settingSec}>
            <Text style={styles.secTitle}>알림 설정</Text>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>알림 및 소리</Text>
            </Pressable>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>진동</Text>
            </Pressable>
          </View>
          <View style={styles.settingSec}>
            <Text style={styles.secTitle}>사용자 설정</Text>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>계정 관리</Text>
            </Pressable>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>로그아웃</Text>
            </Pressable>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>탈퇴하기</Text>
            </Pressable>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>기타 설정</Text>
            </Pressable>
          </View>
          <View style={styles.settingSec}>
            <Text style={styles.secTitle}>기타</Text>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>공지사항</Text>
            </Pressable>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>언어 설정</Text>
            </Pressable>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>버전 설정</Text>
            </Pressable>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>캐시 정리</Text>
            </Pressable>
          </View>
          <View style={styles.satisfactionSec}>
            <Text style={styles.satisfactionTitle}>만족률</Text>
            <Text style={styles.satisfactionScore}>96점 / 100점</Text>
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  amendBtn: {
    marginTop: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 5,
    padding: 8,
  },
  amendText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 30,
  },
  satisfactionSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  satisfactionTitle: {
    fontSize: 20,
  },
  satisfactionScore: {
    marginLeft: 20,
    fontSize: 30,
    color: '#FBBA00',
  },
  enter: {
    position: 'absolute',
    right: 7,
    color: 'gray',
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Profile;
