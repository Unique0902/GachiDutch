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
import ReportDetail from '../reportDetail/reportDetail';

const BlackPage = ({ reportService, userDataService, route, navigation }) => {
  const {
    opponentUser,
    receipt,
    time,
    praiseData,
    blameData,
    userData,
    coming,
    reviewData,
  } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [isExisted, setIsExisted] = useState(false);
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  useEffect(() => {
    setIsLoading(true);
    userDataService.getBlacklist(userData.uid).then((data) => {
      if (data.blacklist) {
        const opponent = data.blacklist.find((a) => a == opponentUser.uid);
        if (opponent) {
          setIsExisted(true);
        } else {
          setIsExisted(false);
        }
        setIsLoading(false);
      }
    });
  });

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
        <Text style={styles.headerText}>사용자 신고</Text>
      </View>
      <View style={styles.main}>
        {(!type || type == 'etc') && (
          <View style={styles.title}>
            <Text
              style={styles.nameTitleText}
            >{`상대 닉네임: ${opponentUser.name}`}</Text>
            <Text style={styles.titleText}>
              이 사용자를 신고하는 이유를 선택해주세요.
            </Text>
          </View>
        )}
        <ScrollView>
          {!type && (
            <View style={styles.btns}>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('욕설을 해요');
                }}
              >
                <Text style={styles.btnText}>욕설을 해요</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('성희롱을 해요');
                }}
              >
                <Text style={styles.btnText}>성희롱을 해요</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('거래 분쟁 신고');
                }}
              >
                <Text style={styles.btnText}>거래 분쟁 신고</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('연애 목적의 대화를 시도해요');
                }}
              >
                <Text style={styles.btnText}>연애 목적의 대화를 시도해요</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('etc');
                }}
              >
                <Text style={styles.btnText}>기타 문제</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
            </View>
          )}
          {type == 'etc' && (
            <View style={styles.btns}>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('불법 이용자 신고');
                }}
              >
                <Text style={styles.btnText}>불법 이용자 신고</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('프로필 사진 신고');
                }}
              >
                <Text style={styles.btnText}>프로필 사진 신고</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('불건전 닉네임 신고');
                }}
              >
                <Text style={styles.btnText}>불건전 닉네임 신고</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('채팅으로 정치/종교 대화를 시도해요');
                }}
              >
                <Text style={styles.btnText}>
                  채팅으로 정치/종교 대화를 시도해요
                </Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  setType('신고 항목 제안');
                }}
              >
                <Text style={styles.btnText}>신고 항목 제안</Text>
                <AntDesign style={styles.enter} name='right' size={20} />
              </Pressable>
            </View>
          )}
          {type != 'etc' && type && (
            <ReportDetail
              type={type}
              goReview={goReview}
              reportService={reportService}
              userDataService={userDataService}
              userData={userData}
              opponentUser={opponentUser}
              receipt={receipt}
              navigation={navigation}
            />
          )}
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
    padding: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  nameTitleText: {
    fontWeight: '500',
    fontSize: 22,
  },
  titleText: {
    fontWeight: '500',
    fontSize: 20,
  },
  btns: {},
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '400',
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

export default BlackPage;
