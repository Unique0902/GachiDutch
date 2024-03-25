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

const Review = ({ userDataService, route, navigation }) => {
  const { receipt, time, praiseData, blameData, userData } = route.params;
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);
  const [isPraiseData, setIsPraiseData] = useState(false);
  const [isBlameData, setIsBlameData] = useState(false);
  const [review1, setReview1] = useState('');
  const [review2, setReview2] = useState('');
  const [isSelected1, setIsSelected1] = useState(true);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isCanApply1, setIsCanApply1] = useState(false);
  const [isCanApply2, setIsCanApply2] = useState(false);
  const [status, setStatus] = useState('create');
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  useEffect(() => {
    if (praiseData || blameData) {
      setStatus('amend');
    } else {
      setStatus('create');
    }
  }, [praiseData, blameData]);
  useEffect(() => {
    if (praiseData) {
      setIsSelected1(true);
      setIsSelected2(false);
      setIsChecked1(praiseData.isChecked1);
      setIsChecked2(praiseData.isChecked2);
      setIsChecked3(praiseData.isChecked3);
    } else if (blameData) {
      setIsSelected1(false);
      setIsSelected2(true);
      setIsChecked4(blameData.isChecked1);
      setIsChecked5(blameData.isChecked2);
      setIsChecked6(blameData.isChecked3);
    }
  }, [praiseData, blameData]);
  useEffect(() => {
    if (!isChecked1 && !isChecked2 && !isChecked3) {
      setIsCanApply1(false);
    } else {
      setIsCanApply1(true);
    }
  }, [isChecked1, isChecked2, isChecked3]);
  useEffect(() => {
    if (!isChecked4 && !isChecked5 && !isChecked6) {
      setIsCanApply2(false);
    } else {
      setIsCanApply2(true);
    }
  }, [isChecked4, isChecked5, isChecked6]);
  const checkedStyle = (isChecked) => {
    if (isChecked) {
      return {
        backgroundColor: '#FBBA00',
      };
    } else {
      return {
        backgroundColor: 'white',
      };
    }
  };
  const applyBtnStyle = (isCanApply) => {
    if (isCanApply) {
      return {
        backgroundColor: '#FBBA00',
      };
    } else {
      return {
        backgroundColor: 'gray',
      };
    }
  };
  const applyTextStyle = (isCanApply) => {
    if (isCanApply) {
      return {
        color: 'white',
      };
    } else {
      return {
        color: 'lightgray',
      };
    }
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
        <Text style={styles.headerText}>후기 남기기</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.promiseSec}>
            <Image style={styles.profileImage} />
            <View style={styles.promiseInform}>
              <Text style={styles.promiseLoc}>{'안곡초 => 안곡고'}</Text>
              <Text style={styles.nameText}>{`${
                receipt && receipt.opponentUser.name
              } 님과의 약속`}</Text>
              <Text style={styles.promiseTime}>
                {time &&
                  `${time.getFullYear()}/${
                    time.getMonth() + 1
                  }/${time.getDate()} ${time.getHours()}:${time.getMinutes()}`}
              </Text>
            </View>
          </View>
          <View style={styles.selectSec}>
            <Pressable
              style={[styles.selectBtn, checkedStyle(isSelected1)]}
              onPress={() => {
                setIsSelected1(true);
                setIsSelected2(false);
              }}
            >
              <Text style={styles.selectText}>매너 평가하기</Text>
            </Pressable>
            <Pressable
              style={[styles.selectBtn, checkedStyle(isSelected2)]}
              onPress={() => {
                setIsSelected1(false);
                setIsSelected2(true);
              }}
            >
              <Text>비매너 평가하기</Text>
            </Pressable>
          </View>
          {isSelected1 && (
            <>
              <View style={styles.evaluationSec}>
                <Text style={styles.evaluationTitle}>어떤 점이 좋았나요?</Text>
                <Pressable
                  style={styles.evaluation}
                  onPress={() => {
                    setIsChecked1(!isChecked1);
                  }}
                >
                  <View style={[styles.checkBox, checkedStyle(isChecked1)]}>
                    {isChecked1 && <Text style={styles.check}>✔</Text>}
                  </View>
                  <Text style={styles.evaluationText}>
                    친절하고 매너가 좋아요.
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.evaluation}
                  onPress={() => {
                    setIsChecked2(!isChecked2);
                  }}
                >
                  <View style={[styles.checkBox, checkedStyle(isChecked2)]}>
                    {isChecked2 && <Text style={styles.check}>✔</Text>}
                  </View>
                  <Text style={styles.evaluationText}>
                    시간 약속을 잘 지켜요.
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.evaluation}
                  onPress={() => {
                    console.log(isChecked3);
                    setIsChecked3(!isChecked3);
                  }}
                >
                  <View style={[styles.checkBox, checkedStyle(isChecked3)]}>
                    {isChecked3 && <Text style={styles.check}>✔</Text>}
                  </View>
                  <Text style={styles.evaluationText}>응답이 빨라요.</Text>
                </Pressable>
              </View>
              <View style={styles.reviewSec}>
                <Text style={styles.reviewTitle}>
                  상대방과의 약속 후기를 알려주세요!
                </Text>
                <TextInput
                  style={styles.reviewInput}
                  onChangeText={setReview1}
                  placeholder='여기에 적어주세요. (선택사항)'
                  value={review1}
                  textAlign={'left'}
                  textAlignVertical={'top'}
                  multiline
                />
              </View>
              {!praiseData && !isPraiseData && (
                <Pressable
                  style={[styles.applyBtn, applyBtnStyle(isCanApply1)]}
                  onPress={() => {
                    setIsLoading1(true);
                    userDataService
                      .updatePraiseData(
                        userData.uid,
                        isChecked1,
                        isChecked2,
                        isChecked3,
                        receipt.roomId
                      )
                      .then(() => {
                        setIsLoading1(false);
                        setIsPraiseData(true);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  {isLoading1 ? (
                    <ActivityIndicator size='small' color='#FBBA00' />
                  ) : (
                    <Text
                      style={[styles.applyText, applyTextStyle(isCanApply1)]}
                    >
                      후기 남기기
                    </Text>
                  )}
                </Pressable>
              )}
              {(praiseData || isPraiseData) && (
                <Pressable
                  style={[styles.applyBtn, applyBtnStyle(isCanApply1)]}
                  onPress={() => {
                    setIsLoading2(true);
                    userDataService
                      .amendPraiseData(
                        userData.uid,
                        isChecked1,
                        isChecked2,
                        isChecked3,
                        receipt.roomId
                      )
                      .then(() => {
                        setIsLoading2(false);
                        setIsPraiseData(true);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  {isLoading2 ? (
                    <ActivityIndicator size='small' color='#FBBA00' />
                  ) : (
                    <Text
                      style={[styles.applyText, applyTextStyle(isCanApply1)]}
                    >
                      후기 수정하기
                    </Text>
                  )}
                </Pressable>
              )}
            </>
          )}
          {isSelected2 && (
            <>
              <View style={styles.evaluationSec}>
                <Text style={styles.evaluationTitle}>
                  어떤 점이 좋지 않았나요?
                </Text>
                <Pressable
                  style={styles.evaluation}
                  onPress={() => {
                    setIsChecked4(!isChecked4);
                  }}
                >
                  <View style={[styles.checkBox, checkedStyle(isChecked4)]}>
                    {isChecked4 && <Text style={styles.check}>✔</Text>}
                  </View>
                  <Text style={styles.evaluationText}>불친절해요.</Text>
                </Pressable>
                <Pressable
                  style={styles.evaluation}
                  onPress={() => {
                    setIsChecked5(!isChecked5);
                  }}
                >
                  <View style={[styles.checkBox, checkedStyle(isChecked5)]}>
                    {isChecked5 && <Text style={styles.check}>✔</Text>}
                  </View>
                  <Text style={styles.evaluationText}>
                    시간 약속을 안 지켜요.
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.evaluation}
                  onPress={() => {
                    console.log(isChecked6);
                    setIsChecked6(!isChecked6);
                  }}
                >
                  <View style={[styles.checkBox, checkedStyle(isChecked6)]}>
                    {isChecked6 && <Text style={styles.check}>✔</Text>}
                  </View>
                  <Text style={styles.evaluationText}>응답이 느려요.</Text>
                </Pressable>
              </View>
              <View style={styles.reviewSec}>
                <Text style={styles.reviewTitle}>
                  상대방과의 약속 후기를 알려주세요!
                </Text>
                <TextInput
                  style={styles.reviewInput}
                  onChangeText={setReview2}
                  placeholder='여기에 적어주세요. (선택사항)'
                  value={review2}
                  textAlign={'left'}
                  textAlignVertical={'top'}
                  multiline
                />
              </View>
              {!blameData && (
                <Pressable
                  style={[styles.applyBtn, applyBtnStyle(isCanApply2)]}
                >
                  <Text style={[styles.applyText, applyTextStyle(isCanApply2)]}>
                    후기 남기기
                  </Text>
                </Pressable>
              )}
              {blameData && (
                <Pressable
                  style={[styles.applyBtn, applyBtnStyle(isCanApply1)]}
                >
                  <Text style={[styles.applyText, applyTextStyle(isCanApply1)]}>
                    후기 수정하기
                  </Text>
                </Pressable>
              )}
            </>
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
  scroll: {
    flex: 12,
  },
  selectSec: {
    flexDirection: 'row',
    height: 60,
  },
  selectBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  promiseSec: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 30,
  },
  profileSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: 'gray',
    marginRight: 20,
  },
  promiseLoc: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FBBA00',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
  },
  promiseTime: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
  },
  evaluationSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  evaluationTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
  },
  evaluation: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 25,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
  },
  reviewSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  check: {
    color: 'white',
    position: 'absolute',
    bottom: 0.5,
    left: 2,
    fontSize: 20,
  },
  evaluationText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  reviewInput: {
    padding: 15,
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  applyBtn: {
    margin: 20,
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    alignSelf: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Review;
