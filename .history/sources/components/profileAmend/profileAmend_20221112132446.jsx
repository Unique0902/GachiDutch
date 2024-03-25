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
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProfileAmend = ({ route, navigation }) => {
  const { userData } = route.params;
  const [text, setText] = useState('');
  const [isCanAmend, setIsCanAmend] = useState(true);
  useEffect(() => {
    console.log(text);
    if (!text) {
      setIsCanAmend(false);
    } else {
      setIsCanAmend(true);
    }
  }, [text]);
  useEffect(() => {
    if (userData) {
      setText(userData.name);
    }
  }, []);
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
        <Text style={styles.headerText}>프로필 수정</Text>
        <Pressable
          style={styles.applyBtn}
          onPress={() => {
            if (isCanAmend) {
            }
          }}
        >
          <Text style={styles.applyText}>완료</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <View style={styles.pictureSec}>
          <Image style={styles.profileImage} />
        </View>
        <View style={styles.nameSec}>
          <View style={styles.nameTitle}>
            <Text style={styles.nameTitleText}>닉네임</Text>
          </View>
          <TextInput
            style={styles.nameInput}
            onChangeText={setText}
            placeholder='닉네임을 입력해주세요'
            value={text}
          />
          {!isCanAmend && (
            <Text style={styles.warnText}>닉네임을 입력해주세요</Text>
          )}
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

export default ProfileAmend;
