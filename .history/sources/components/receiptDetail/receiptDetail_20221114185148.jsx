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
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { updateName } from '../../services/asyncstorage';

const ReceiptDetail = ({ userService, route, navigation }) => {
  const { userData, setUserData } = route.params;
  const [isLoading, setIsLoading] = useState(false);

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
        <Text style={styles.headerText}>더치 상세</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.receiptSec}>
          <Text>{`안곡고 => 짬뽕지존`}</Text>
        </View>
        <View style={styles.promiseSec}>
          <Image style={styles.profileImage} />
          <View style={styles.promiseInform}>
            <Text
              style={styles.promiseLoc}
            >{`${receipt.loc.startLoc} => ${receipt.loc.arriveLoc}`}</Text>
            <Text style={styles.nameText}>{`${
              receipt && receipt.opponentUser.name
            } 님과의 약속이 완료되었어요`}</Text>
            <Text style={styles.promiseTime}>
              {time &&
                `${time.getFullYear()}/${
                  time.getMonth() + 1
                }/${time.getDate()} ${time.getHours()}:${time.getMinutes()}`}
            </Text>
          </View>
        </View>
        <View style={styles.promiseDetailSec}>
          <View style={styles.myDetailSec}>
            <Text style={styles.nameTitleText}>
              내가 설정한 출발 중심 주소: 경기도 고양시 일산동구 하늘마을로 65
            </Text>
            <Text style={styles.nameTitleText}>
              내가 설정한 출발 원 반지름: 100m
            </Text>
            <Text style={styles.nameTitleText}>
              내가 설정한 도착 중심 주소: 경기도 고양시 일산동구 하늘마을로 65
            </Text>
            <Text style={styles.nameTitleText}>
              내가 설정한 도착 원 반지름: 100m
            </Text>
          </View>
        </View>
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
  profileSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  nameTitle: {
    marginTop: 20,
  },
  nameTitleText: {
    fontWeight: '500',
    fontSize: 20,
  },
  pictureSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  nameInput: {
    height: 50,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#FBBA00',
    borderRadius: 8,
    padding: 10,
  },
  applyBtn: {
    position: 'absolute',
    right: 12,
  },
  applyText: {
    color: '#FBBA00',
  },
  warnText: {
    color: 'red',
    marginTop: 7,
    marginLeft: 5,
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default ReceiptDetail;
