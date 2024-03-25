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
import { FontAwesome } from '@expo/vector-icons';
const InquiryPage = ({ navigation, route }) => {
  const { userData } = route.params;
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');
  const [isCanSend, setIsCanSend] = useState(false);

  useEffect(() => {
    if (titleText && contentText) {
      setIsCanSend(true);
    } else {
      setIsCanSend(false);
    }
  }, [titleText, contentText]);

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
        <Text style={styles.headerText}>문의하기</Text>
      </View>
      <View style={styles.scroll}>
        <Text
          style={styles.inquiryText}
        >{`${userData.name}님 어떤 문제가 있으신가요?`}</Text>
        <Text style={styles.inquiryInformText}>
          문의와 관련된 답변은 쪽지함으로 확인하실 수 있습니다.
        </Text>
        <TextInput
          style={styles.titleInput}
          onChangeText={setTitleText}
          value={titleText}
          placeholder={'제목을 입력해주세요'}
        />
        <TextInput
          style={styles.contentInput}
          onChangeText={setContentText}
          value={contentText}
          placeholder={'내용을 입력해주세요'}
          textAlign={'left'}
          textAlignVertical={'top'}
          multiline
        />
        <Pressable style={styles.inquireBtn}>
          <Text style={styles.inquireBtnText}>문의하기</Text>
        </Pressable>
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
  scroll: {
    flex: 12,
    padding: 20,
  },
  inquiryText: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: '600',
  },
  inquiryInformText: {
    marginTop: 15,
    color: 'gray',
    fontSize: 15,
  },

  titleInput: {
    padding: 10,
    height: 40,
    marginTop: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  contentInput: {
    marginTop: 10,
    padding: 10,
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  inquireBtn: {
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  warnText: {
    color: 'red',
    fontSize: 15,
    marginTop: 10,
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default InquiryPage;
