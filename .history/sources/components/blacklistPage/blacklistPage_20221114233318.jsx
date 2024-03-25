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

const BlacklistPage = ({ userDataService, route, navigation }) => {
  const { userData } = route.params;
  const [type, setType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [blacklistArr, setBlacklistArr] = useState(null);
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  useEffect(() => {
    setIsLoading(true);
    userDataService
      .getBlacklist(userData.uid)
      .then((response) => response.json())
      .then((data) => {
        if (data.blacklist) {
          setBlacklistArr(data.blacklist);
          setIsLoading(false);
        } else {
          setBlacklistArr(null);
          setIsLoading(false);
        }
      });
  }, [userDataService]);

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
        <Text style={styles.headerText}>차단 목록 관리</Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          {blacklistArr && blacklistArr.length != 0 ? (
            blacklistArr.map((opponentUser) => (
              <View style={styles.userSec} key={opponentUser.uid}>
                <Pressable style={styles.userInform}>
                  <Text>{opponentUser.name}</Text>
                </Pressable>
                <Pressable style={styles.unlockBlackBtn}>
                  <Text style={styles.unlockBlackBtnText}>차단 해제</Text>
                </Pressable>
              </View>
            ))
          ) : (
            <Text style={styles.noUserText}>
              차단한 유저가 존재하지 않아요!
            </Text>
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
  noUserText: {
    fontSize: 26,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'gray',
    marginTop: 150,
  },
  userSec: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
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

export default BlacklistPage;
