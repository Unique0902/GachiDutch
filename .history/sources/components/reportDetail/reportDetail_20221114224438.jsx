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

const ReportDetail = ({
  type,
  goReview,
  reportService,
  userDataService,
  userData,
  opponentUser,
  receipt,
  navigation,
  status,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reportText, setReportText] = useState('');
  const [isCanApply, setIsCanApply] = useState(false);
  useEffect(() => {
    if (reportText.length > 0 && reportText.length <= 300) {
      setIsCanApply(true);
    } else {
      setIsCanApply(false);
    }
  }, [reportText]);
  const applyStyle = (canApply) => {
    if (canApply) {
      return {
        backgroundColor: '#FBBA00',
      };
    } else {
      return {
        backgroundColor: 'gray',
      };
    }
  };
  const restrictStyle = (canApply) => {
    if (canApply) {
      return {
        color: 'gray',
      };
    } else {
      return {
        color: 'red',
      };
    }
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{type && type}</Text>
        {type == '욕설을 해요' && (
          <>
            <Text style={styles.descriptionText}>
              상대방을 비하/조롱/모욕/반말 등의 언행을 하면 이용 제제를 받을 수
              있습니다.
            </Text>
            <Text style={styles.descriptionText}>
              위의 경우가 아니라면 신고보다는 비매너 평가를 해주세요.
            </Text>
          </>
        )}
        {type == '불법 이용자 신고' && (
          <>
            <Text style={styles.descriptionText}>
              같이 더치는 나라에서 금지하고 있는 불법 내용에 대한 활동을
              금지하고 있어요.
            </Text>
            {status != 'matchCancel' && status != 'matchNow' && (
              <Text style={styles.descriptionText}>
                위의 경우가 아니라면 신고보다는 비매너 평가를 해주세요.
              </Text>
            )}
          </>
        )}
        {type == '프로필 사진 신고' && (
          <>
            <Text style={styles.descriptionText}>
              사생활 침해/저작권침해/선정성이 있는 프로필 사진일 경우 신고해
              주세요.
            </Text>
            {status != 'matchCancel' && status != 'matchNow' && (
              <Text style={styles.descriptionText}>
                위의 경우가 아니라면 신고보다는 비매너 평가를 해주세요.
              </Text>
            )}
          </>
        )}
        {type == '신고 항목 제안' && (
          <>
            <Text style={styles.descriptionText}>
              앞의 신고 항목들에서 적당한 사유를 찾지 못하셨다면 제안 해주세요.
              검토 후 신고 항목 개선에 도움을 주실 수 있어요.
            </Text>
            {status != 'matchCancel' && status != 'matchNow' && (
              <Text style={styles.descriptionText}>
                위의 경우가 아니라면 신고보다는 비매너 평가를 해주세요.
              </Text>
            )}
          </>
        )}
        {status != 'matchCancel' && status != 'matchNow' && (
          <Pressable
            style={styles.reviewBtn}
            onPress={() => {
              goReview();
            }}
          >
            <Text style={styles.reviewBtnText}>비매너 평가하러 가기</Text>
          </Pressable>
        )}
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
          style={[styles.restrictText, restrictStyle(isCanApply)]}
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
      <Pressable
        style={[styles.applyBtn, applyStyle(isCanApply)]}
        onPress={() => {
          if (!isLoading && isCanApply) {
            setIsLoading(true);
            reportService
              .createReport(
                type,
                reportText,
                userData.uid,
                opponentUser.uid,
                receipt.roomId
              )
              .then((data) => {
                userDataService
                  .updateBlacklist(userData.uid, opponentUser.uid)
                  .then((data) => {
                    setIsLoading(false);
                    navigation.navigate('Home');
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }}
      >
        {isLoading ? (
          <ActivityIndicator size='small' color='white' />
        ) : (
          <Text style={[styles.applyBtnText]}>신고 제출하기</Text>
        )}
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
    marginBottom: 30,
  },
  reviewBtn: {
    marginTop: 2,
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
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: {
    color: 'white',
    fontSize: 16,
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
