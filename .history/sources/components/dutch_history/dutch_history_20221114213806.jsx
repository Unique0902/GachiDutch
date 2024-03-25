import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const Dutch_history = ({ receipt, time, userData, navigation }) => {
  const [status, setStatus] = useState(null);
  const [isShowBox, setIsShowBox] = useState(false);
  const statusStyle = (istatus) => {
    if (istatus == '약속 완료') {
      return {
        color: '#fbba00',
      };
    } else if (istatus == '매치 진행중' || istatus == '약속 진행중') {
      return {
        color: 'blue',
      };
    } else if (istatus == '매치 취소됨' || istatus == '약속 취소됨') {
      return {
        color: 'gray',
      };
    }
  };
  useEffect(() => {
    if (receipt.status == 'complete') {
      setStatus('약속 완료');
    } else if (receipt.status == 'promiseCancel') {
      setStatus('약속 취소됨');
    } else if (receipt.status == 'matchCancel') {
      setStatus('매치 취소됨');
    } else if (receipt.status == 'matchNow') {
      setStatus('매치 진행중');
    } else if (receipt.status == 'promiseNow') {
      setStatus('약속 진행중');
    } else {
      console.log(receipt.status);
    }
  }, [receipt]);
  return (
    <>
      <View style={styles.ductchHistory}>
        <View style={styles.historyTop}>
          <View style={styles.topLeft}>
            <Text style={styles.topText}>
              {time &&
                `${time.getFullYear()}/${
                  time.getMonth() + 1
                }/${time.getDate()} ${time.getHours()}:${
                  time.getMinutes() < 10
                    ? '0' + time.getMinutes()
                    : time.getMinutes()
                }`}
            </Text>
            <Text
              style={[styles.topText, { marginLeft: 10 }, statusStyle(status)]}
            >
              {receipt && status}
            </Text>
          </View>
          <View style={styles.topRight}>
            {(receipt.status == 'complete' ||
              receipt.status == 'promiseCancel' ||
              receipt.status == 'matchCancel') && (
              <Pressable
                style={styles.detailBtn}
                onPress={() => {
                  navigation.navigate('ReceiptDetail', {
                    receipt,
                    time,
                    userData,
                  });
                }}
              >
                <View style={styles.detailBtnBox}>
                  <Text style={styles.detailText}>더치상세</Text>
                </View>
              </Pressable>
            )}
            <Pressable
              styles={styles.optionBtn}
              onPress={() => {
                setIsShowBox(true);
                // navigation.navigate('Report', {
                //   opponentUser: receipt.opponentUser,
                //   receipt,
                //   time,
                //   praiseData: receipt.praiseData ? receipt.praiseData : null,
                //   blameData: receipt.blameData ? receipt.blameData : null,
                //   status: 'amend',
                //   userData,
                //   coming: 'Receipt',
                //   reviewData: receipt.reviewData
                //     ? receipt.reviewData.review
                //     : null,
                // });
              }}
            >
              <SimpleLineIcons
                name='options-vertical'
                size={18}
                color='black'
              />
            </Pressable>
            {isShowBox && (
              <View style={styles.showBox}>
                <Pressable
                  style={styles.showBoxCancelBtn}
                  onPress={() => {
                    setIsShowBox(false);
                  }}
                >
                  <Text style={styles.showBoxCancelBtnText}>X</Text>
                </Pressable>
                <Pressable style={styles.showBoxBtn}>
                  <Text style={styles.showBoxBtnText}>신고하기</Text>
                </Pressable>
                <Pressable style={styles.showBoxBtn}>
                  <Text style={styles.showBoxBtnText}>차단하기</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
        <View style={styles.historyCenter}>
          <Text style={styles.centerText}>
            {receipt.loc
              ? `<${receipt.loc.startLoc}>에서 <${receipt.loc.arriveLoc}>로의 약속`
              : `${receipt.opponentUser.name}님과의 매칭`}
          </Text>
        </View>
        {(receipt.status == 'matchNow' || receipt.status == 'promiseNow') && (
          <Pressable
            style={[styles.historyLow]}
            onPress={() => {
              navigation.navigate('Taxi', { userData });
            }}
          >
            <Text style={styles.historyLowText}>매치로 돌아가기</Text>
          </Pressable>
        )}
        {(receipt.status == 'promiseCancel' ||
          receipt.status == 'matchCancel') && (
          <Pressable style={[styles.historyLow]} onPress={() => {}}>
            <Text style={styles.cancelText}>취소 이유 작성하러가기</Text>
          </Pressable>
        )}
        {receipt.status == 'complete' &&
          !receipt.praiseData &&
          !receipt.blameData && (
            <Pressable
              style={[styles.historyLow]}
              onPress={() => {
                navigation.navigate('Review', {
                  receipt,
                  time,
                  praiseData: null,
                  blameData: null,
                  status: 'create',
                  userData,
                  coming: 'Receipt',
                  reviewData: receipt.reviewData
                    ? receipt.reviewData.review
                    : null,
                });
              }}
            >
              <Text style={styles.historyLowText}>더치 후기 보내기</Text>
            </Pressable>
          )}
        {receipt.status == 'complete' &&
          (receipt.praiseData || receipt.blameData) && (
            <Pressable
              style={[styles.historyLow]}
              onPress={() => {
                navigation.navigate('Review', {
                  receipt,
                  time,
                  praiseData: receipt.praiseData ? receipt.praiseData : null,
                  blameData: receipt.blameData ? receipt.blameData : null,
                  status: 'amend',
                  userData,
                  coming: 'Receipt',
                  reviewData: receipt.reviewData
                    ? receipt.reviewData.review
                    : null,
                });
              }}
            >
              <Text style={styles.amendText}>더치 후기 수정하기</Text>
            </Pressable>
          )}
      </View>
    </>
  );
};

export default Dutch_history;

const styles = StyleSheet.create({
  ductchHistory: {
    height: 130,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 15,
  },
  historyTop: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topText: {
    fontSize: 16,
  },
  centerText: {
    fontSize: 20,
  },
  detailText: {
    color: 'black',
    fontSize: 12,
    margin: 2,
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailBtn: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 12,
    height: 28,
    marginRight: 10,
  },
  detailBtnBox: {
    margin: 2,
  },
  historyCenter: {
    flex: 2.5,
    marginTop: 10,
  },
  historyLow: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyLowText: {
    color: '#fbba00',
    fontSize: 18,
    fontWeight: '600',
  },
  amendText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
  },
  showBox: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    left: -70,
    top: 0,
    zIndex: 5,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  showBoxCancelBtn: {
    position: 'absolute',
    right: 10,
  },
  showBoxCancelBtnText: {
    fontSize: 20,
  },
  showBoxBtn: {
    padding: 10,
  },
  showBoxBtnText: {
    fontSize: 22,
    fontWeight: '600',
  },
  cancelText: {
    color: 'blue',
    fontSize: 15,
    fontWeight: '600',
  },
});
