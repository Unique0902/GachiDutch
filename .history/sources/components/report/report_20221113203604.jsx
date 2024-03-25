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

const Report = ({ userService, route, navigation }) => {
  const { opponentUser } = route.params;
  const [text, setText] = useState('');
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
        <Text style={styles.headerText}>사용자 신고</Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.title}>
            <Text
              style={styles.nameTitleText}
            >{`상대 닉네임: ${opponentUser.name}`}</Text>
            <Text style={styles.titleText}>
              이 사용자를 신고하는 이유를 선택해주세요.
            </Text>
          </View>
          <View style={styles.btns}>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>욕설을 해요</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>성희롱을 해요</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>거래 분쟁 신고</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>연애 목적의 대화를 시도해요</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>기타 문제</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
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
  profileSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  nameTitleText: {
    fontWeight: '500',
    fontSize: 20,
  },
  titleText: {
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

export default Report;
