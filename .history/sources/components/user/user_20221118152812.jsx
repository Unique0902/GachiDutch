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
import { FontAwesome } from '@expo/vector-icons';

export default function User({
  login,
  setLogin,
  navigation,
  setUserData,
  userData,
}) {
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight + 20,
  };

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={[styles.header]}>
        <Text style={styles.headerText}>내 정보</Text>
      </View>
      <Pressable
        style={styles.profileBtn}
        onPress={() => {
          if (userData) {
            navigation.navigate('Profile', {
              userData,
              setUserData,
              isMe: true,
            });
          } else {
            navigation.navigate('Login', { setLogin, setUserData });
          }
        }}
      >
        <View>
          <FontAwesome name='user-circle' size={50} color='black' />
        </View>
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
          <Pressable
            style={styles.enterMenu}
            onPress={() => {
              navigation.navigate('Ready');
            }}
          >
            <Text style={styles.menuText}>선물함</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable
            style={styles.enterMenu}
            onPress={() => {
              navigation.navigate('Ready');
            }}
          >
            <Text style={styles.menuText}>쿠폰함</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable
            style={styles.enterMenu}
            onPress={() => {
              navigation.navigate('Ready');
            }}
          >
            <Text style={styles.menuText}>친구목록</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable
            style={styles.enterMenu}
            onPress={() => {
              navigation.navigate('BlacklistPage', { userData });
            }}
          >
            <Text style={styles.menuText}>차단목록</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable
            style={styles.enterMenu}
            onPress={() => {
              navigation.navigate('Setting', {
                setUserData,
                setLogin,
                login,
                userData,
              });
            }}
          >
            <Text style={styles.menuText}>환경설정</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
          <Pressable
            style={styles.enterMenu}
            onPress={() => {
              navigation.navigate('Setting', {
                setUserData,
                setLogin,
                login,
                userData,
              });
            }}
          >
            <Text style={styles.menuText}>문의하기</Text>
            <AntDesign style={styles.enter} name='right' size={20} />
          </Pressable>
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
  },
  menuText: {
    fontSize: 20,
    fontWeight: '500',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '500',
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
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
  },
  profileName: {
    marginLeft: 20,
  },
  enter: {
    position: 'absolute',
    right: 7,
    color: '#FBBA00',
  },
});
