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
    <View style={[styles.container]}>
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
      {isLoading ? (
        <ActivityIndicator size='large' color='#FBBA00' />
      ) : (
        <View style={styles.main}>
          <ScrollView>
            {isExisted ? (
              <View>
                <Text>1</Text>
              </View>
            ) : (
              <View>
                <Text>2</Text>
              </View>
            )}
          </ScrollView>
        </View>
      )}
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
