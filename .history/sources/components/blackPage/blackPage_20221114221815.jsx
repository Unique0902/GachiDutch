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

const BlackPage = ({ userDataService, route, navigation }) => {
  const { userData, opponentUser } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading1, setIsLoading1] = useState(false);
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
      } else {
        setIsExisted(false);
        setIsLoading(false);
      }
    });
  }, []);

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
        <Text style={styles.headerText}>사용자 차단</Text>
      </View>
      <View style={styles.main}>
        {isLoading ? (
          <ActivityIndicator size='large' color='#FBBA00' />
        ) : (
          <ScrollView>
            {!isExisted ? (
              <>
                <View style={styles.title}>
                  <Text
                    style={styles.titleText}
                  >{`${opponentUser.name}님을 이미 차단 하셨습니다.`}</Text>
                </View>
                <Pressable style={styles.blacklistBtn}>
                  <Text style={styles.blacklistBtnText}>차단 목록 관리</Text>
                </Pressable>
              </>
            ) : (
              <>
                <View style={styles.title}>
                  <Text
                    style={styles.titleText}
                  >{`${opponentUser.name}님을 차단`}</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.contentText}>
                    차단 이후에는 상대에게 오는 메세지가 보이지 않으며, 상대와
                    매칭이 되지 않습니다.
                  </Text>
                </View>
                <Pressable
                  style={styles.blackBtn}
                  onPress={() => {
                    setIsLoading1(true);
                    userData
                      .updateBlacklist(userData.uid, opponentUser.uid)
                      .then((data) => {
                        setIsLoading1(false);
                        navigation.goBack();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  {isLoading1 ? (
                    <ActivityIndicator size='small' color='white' />
                  ) : (
                    <Text style={styles.blackBtnText}>차단하기</Text>
                  )}
                </Pressable>
              </>
            )}
          </ScrollView>
        )}
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
    fontSize: 30,
    color: 'blue',
  },
  content: {
    marginTop: 15,
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: 'gray',
  },
  blackBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 10,
    marginTop: 25,
    height: 60,
  },
  blacklistBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 10,
    marginTop: 25,
    height: 60,
  },
  blackBtnText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  blacklistBtnText: {
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
