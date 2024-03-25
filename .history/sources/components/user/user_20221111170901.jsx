import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
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
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
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
      <View style={[styles.header, headerStyle]}>
        <Text style={styles.headerText}>내 정보</Text>
      </View>
      <Pressable style={styles.profileBtn}>
        <Pressable onPress={onProfilePress}>
          <Image style={styles.profileImage} />
        </Pressable>
        <View style={styles.profileName}>
          {login ? (
            <>
              <Text style={styles.nameText}>{userData && userData.name}</Text>
            </>
          ) : (
            <>
              <Text>로그인해주세요</Text>
            </>
          )}
        </View>
        <AntDesign style={styles.enter} name='right' size={20} />
      </Pressable>
      <View style={styles.menus}>
        <ScrollView>
          <Pressable style={styles.enterMenu}>
            <Text style={styles.menuText}>선물함</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable style={styles.enterMenu}>
            <Text style={styles.menuText}>쿠폰함</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable style={styles.enterMenu}>
            <Text style={styles.menuText}>친구목록</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable style={styles.enterMenu}>
            <Text style={styles.menuText}>환경설정</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          {/* {login && (
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
        )} */}
        </ScrollView>
      </View>
    </View>
    //내정보
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
  },
  enterMenu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    paddingHorizontal: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  menus: {
    flex: 8,
    backgroundColor: 'white',
    marginTop: 20,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '500',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'black',
  },
  infoArea: {
    flexDirection: 'column',
  },
  infoText: {
    fontSize: 24,
    fontWeight: '500',
  },
  profileBtn: {
    flex: 1.5,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
  },
  profileName: {
    marginLeft: 15,
  },
  enter: {
    position: 'absolute',
    right: 10,
    color: '#FBBA00',
  },
});
