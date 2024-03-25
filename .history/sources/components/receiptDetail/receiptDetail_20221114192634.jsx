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

const ReceiptDetail = ({ route, navigation }) => {
  const { receipt, time } = route.params;
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
        <ScrollView>
          <View style={styles.statusSec}>
            <Text style={styles.statusText}>{`약속이 완료되었어요`}</Text>
          </View>
          <View style={styles.promiseSec}>
            <Text
              style={styles.promiseLoc}
            >{`${receipt.loc.startLoc} => ${receipt.loc.arriveLoc}`}</Text>
            <Text style={styles.promiseTime}>
              {time &&
                `${time.getFullYear()}년 ${
                  time.getMonth() + 1
                }월 ${time.getDate()}일 ${time.getHours()}시 ${time.getMinutes()}분`}
            </Text>
            <View style={styles.promiseInform}>
              <Image style={styles.profileImage} />
              <Text style={styles.nameText}>{`상대방: ${
                receipt && receipt.opponentUser.name
              }`}</Text>
            </View>
          </View>
          <View style={styles.promiseDetailSec}>
            <View style={styles.myDetailSec}>
              <Text style={styles.detailTitleText}>
                내가 설정한 출발 중심 주소
              </Text>
              <Text style={styles.detailContentText}>
                경기도 고양시 일산동구 하늘마을로 65
              </Text>
              <Text style={styles.detailTitleText}>
                내가 설정한 출발 원 반지름
              </Text>
              <Text style={styles.detailContentText}>100m</Text>
              <Text style={styles.detailTitleText}>
                내가 설정한 도착 중심 주소
              </Text>
              <Text style={styles.detailContentText}>
                경기도 고양시 일산동구 하늘마을로 65
              </Text>
              <Text style={styles.detailTitleText}>
                내가 설정한 도착 원 반지름
              </Text>
              <Text style={styles.detailContentText}>100m</Text>
            </View>
          </View>
          <View style={styles.btnSec}>
            <Pressable style={styles.reviewBtn}>
              <Text style={styles.reviewBtnText}>약속 후기</Text>
            </Pressable>
            <Pressable style={styles.reportBtn}>
              <Text style={styles.reportBtnText}>상대방 신고</Text>
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
  main: {
    flex: 12,
    padding: 10,
  },
  statusSec: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  statusText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'blue',
  },
  promiseSec: {
    padding: 15,
  },
  promiseLoc: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },
  promiseTime: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  promiseInform: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 25,
    marginLeft: 15,
  },
  profileSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  promiseDetailSec: {
    paddingHorizontal: 15,
  },

  detailTitleText: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: '500',
  },

  detailContentText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
    marginVertical: 5,
  },
  btnSec: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  reviewBtn: {
    width: '46%',
    height: 65,
    backgroundColor: '#FBBA00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  reviewBtnText: {
    color: 'white',
    fontSize: 20,
  },
  reportBtn: {
    width: '46%',
    height: 65,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  reportBtnText: {
    color: 'white',
    fontSize: 20,
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
