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
      <View>
        <Text style={[styles.header, headerStyle]}>내 정보</Text>
      </View>
      <View>
        <Pressable style={styles.profileArea}>
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
          <AntDesign
            style={styles.enter}
            name='right'
            size={24}
            color='black'
          />
        </Pressable>
        {/* <Pressable
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
        </Pressable> */}
      </View>

      <View style={styles.menus}>
        {/* <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>주문내역</Text>
          <AntDesign name='right' size={24} color='black' />
        </Pressable> */}
        <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>선물함</Text>
          <AntDesign name='right' size={24} color='black' />
        </Pressable>
        <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>쿠폰함</Text>
          <AntDesign name='right' size={24} color='black' />
        </Pressable>
        <Pressable style={styles.enterMenu}>
          <Text style={styles.menuText}>환경설정</Text>
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
      </View>
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
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
  },
  enterMenu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 14,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
  },
  menus: {
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
  profileArea: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutBtn: {},
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
    right: 2,
  },
});
