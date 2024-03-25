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
import { isLogin, logout } from '../../services/asyncstorage';

const Setting = ({ route, navigation }) => {
  const { setUserData, setLogin, login, userData } = route.params;
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
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>알림 및 소리</Text>
            </Pressable>
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>진동</Text>
            </Pressable>
          </View>
          <View style={styles.settingSec}>
            <Text style={styles.secTitle}>사용자 설정</Text>
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>계정/정보 관리</Text>
            </Pressable>
            {login && (
              <Pressable
                style={styles.settingBtn}
                onPress={() => {
                  logout().then(() => {
                    setLogin(false);
                    setUserData(null);
                    navigation.navigate('Main', { screen: 'Home' });
                  });
                }}
              >
                <Text style={styles.settingText}>로그아웃</Text>
              </Pressable>
            )}
            {login && (
              <Pressable
                style={styles.settingBtn}
                onPress={() => {
                  navigation.navigate('WithdrawPage', {
                    userData,
                    setUserData,
                    setLogin,
                  });
                }}
              >
                <Text style={[styles.settingText, styles.red]}>탈퇴하기</Text>
              </Pressable>
            )}
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>기타 설정</Text>
            </Pressable>
          </View>
          <View style={styles.settingSec}>
            <Text style={styles.secTitle}>기타</Text>
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>공지사항</Text>
            </Pressable>
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>언어 설정</Text>
            </Pressable>
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>Version 1.0.1</Text>
            </Pressable>
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.settingText}>캐시 정리</Text>
            </Pressable>
            <Pressable
              style={styles.settingBtn}
              onPress={() => {
                navigation.navigate('PrivacyInformPage');
              }}
            >
              <Text style={styles.settingText}>개인정보 처리 방침</Text>
            </Pressable>
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
  red: {
    color: 'red',
  },
  settingSec: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  secTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 20,
  },
  settingBtn: {
    marginBottom: 15,
  },
  settingText: {
    fontSize: 18,
    fontWeight: '500',
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

export default Setting;
