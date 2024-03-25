import React, { useEffect, useRef, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { isLogin, logout } from '../../services/asyncstorage';

export default function User({
  login,
  setLogin,
  navigation,
  setUserData,
  userData,
}) {
  const onProfilePress = () => {
    console.log('profile pressed');
  };
  const onProfileInfoPress = () => {
    if (login) {
    } else {
      navigation.navigate('Login', { setLogin: setLogin });
    }
  };
  useEffect(() => {
    console.log(login);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text style={styles.header}>내 정보</Text>
      </View>

      <View>
        <View style={styles.profileArea}>
          <Pressable onPress={onProfilePress}>
            <Image style={styles.profileImage} />
          </Pressable>

          <Pressable
            onPress={() => {
              onProfileInfoPress();
            }}
            style={styles.infoClickArea}
          >
            <View>
              {login ? (
                <>
                  <Text style={styles.pointText}>nickname</Text>
                  <Text style={styles.pointText}>**동</Text>
                </>
              ) : (
                <>
                  <Text>로그인해주세요</Text>
                </>
              )}
            </View>
            <AntDesign name='right' size={24} color='black' />
          </Pressable>
        </View>

        <Pressable
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text>*** </Text>
            <Text>Point</Text>
            <AntDesign name='right' size={24} color='black' />
          </View>
        </Pressable>
      </View>

      <ScrollView>
        <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>주문내역</Text>
          <AntDesign name='right' size={24} color='black' />
        </Pressable>
        <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>선물함</Text>
          <AntDesign name='right' size={24} color='black' />
        </Pressable>
        <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>쿠폰함</Text>
          <AntDesign name='right' size={24} color='black' />
        </Pressable>
        <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>설정</Text>
          <AntDesign name='right' size={24} color='black' />
        </Pressable>
        {login && (
          <Pressable style={styles.logoutBtn}>
            <Text
              style={styles.logoutText}
              onPress={() => {
                logout().then(() => {
                  setLogin(false);
                  console.log('로그아웃됨!');
                  setUserData(null);
                  navigation.navigate('Main', { screen: 'Home' });
                });
              }}
            >
              로그아웃
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
    //내정보
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    fontSize: 30,
    alignSelf: 'center',
  },
  enterMenu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 14,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '500',
  },
  pointText: {
    fontSize: 20,
    fontWeight: '500',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'black',
  },
  infoArea: {
    flexDirection: 'column',
  },
  infoClickArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 24,
    fontWeight: '500',
  },
  profileArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutBtn: {},
  logoutText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
  },
});
