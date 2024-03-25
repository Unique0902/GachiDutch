import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { isLogin, logout } from '../../services/asyncstorage';

const WithdrawPage = ({ userDataService, route, navigation }) => {
  const { userData, setUserData, setLogin } = route.params;
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
        <Text style={styles.headerText}>회원 탈퇴</Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.title}>
            <Text
              style={styles.titleText}
            >{`${userData.name}님 정말 떠나시나요? 정말 아쉬워요..`}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              계정을 삭제하시면 매치 기록, 채팅 등 모든 활동 정보가 삭제됩니다.
              계정 삭제 후 7일간 다시 가입할 수 없어요.
            </Text>
          </View>
          <Pressable
            style={styles.withdrawBtn}
            onPress={() => {
              logout().then(() => {
                setLogin(false);
                setUserData(null);
                navigation.navigate('Main', { screen: 'Home' });
              });
            }}
          >
            <Text style={styles.withdrawBtnText}>같이 더치 떠나기</Text>
          </Pressable>
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
  main: {
    flex: 12,
    padding: 10,
  },

  title: {
    marginTop: 10,
    padding: 20,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 1,
    // borderStyle: 'solid',
  },

  titleText: {
    fontWeight: '500',
    fontSize: 25,
    color: '#FBBA00',
  },
  content: {
    marginTop: 5,
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: 'gray',
  },
  withdrawBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 10,
    marginTop: 50,
    height: 60,
  },

  withdrawBtnText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
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

export default WithdrawPage;
