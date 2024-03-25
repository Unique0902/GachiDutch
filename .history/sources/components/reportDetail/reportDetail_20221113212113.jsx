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

const ReportDetail = ({ userService, route, navigation }) => {
  const [reportText, setReportText] = useState('');

  return (
    <View style={[styles.container]}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{`욕설을 해요`}</Text>
        <Text style={styles.descriptionText}>
          상대방을 비하/조롱/모욕/반말 등의 언행을 하면 이용 제제를 받을 수
          있습니다.
        </Text>
        <Text style={styles.descriptionText}>
          위의 경우가 아니라면 신고보다는 비매너 평가를 해주세요.
        </Text>
        <Pressable style={styles.reviewBtn}>
          <Text style={styles.reviewBtnText}>비매너 평가하러 가기</Text>
        </Pressable>
        <Text style={styles.descriptionText}>
          비매너 평가 내용과 신고 내용이 사실과 다를 경우 이용 제제를 받을 수
          있습니다.
        </Text>
      </View>
      <View style={styles.inputSec}>
        <TextInput
          style={styles.reportInput}
          onChangeText={setReportText}
          placeholder='신고 내용을 입력해주세요.'
          value={reportText}
          textAlign={'left'}
          textAlignVertical={'top'}
          multiline
        />
        <Text
          style={styles.restrictText}
        >{`글자 수 제한: (${reportText.length}/300)`}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.blackText}>
          신고 이후에는 상대에게 오는 메세지가 보이지 않으며, 상대와 매칭이 되지
          않습니다.
        </Text>
        <Text
          style={styles.blackText2}
        >{`('내 정보 > 차단목록'에서 차단을 취소할 수 있어요.)`}</Text>
      </View>
      <Pressable style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>신고 제출하기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flex: 12,
    padding: 10,
  },
  reportInput: {
    padding: 15,
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  inputSec: {
    padding: 10,
  },

  title: {
    padding: 10,
  },
  nameTitleText: {
    fontWeight: '500',
    fontSize: 22,
  },
  titleText: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 10,
  },
  descriptionText: {
    fontWeight: '400',
    fontSize: 15,
    color: 'gray',
    marginBottom: 10,
  },
  blackText: {
    fontWeight: '500',
    fontSize: 15,
    color: 'gray',
    marginBottom: 5,
  },
  blackText2: {
    fontWeight: '400',
    fontSize: 15,
    color: 'gray',
    marginBottom: 5,
  },
  reviewBtn: {
    marginBottom: 10,
  },
  reviewBtnText: {
    color: '#FBBA00',
  },
  restrictText: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  applyBtn: {
    backgroundColor: '#FBBA00',
    color: 'white',
    height: 20,
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default ReportDetail;
