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
const Review = ({ userDataService, route, navigation }) => {
  const { receipt, time, praiseData, blameData, userData, coming, reviewData } =
    route.params;
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);
  const [isLeast2, setIsLeast2] = useState(false);
  const [isPraiseData, setIsPraiseData] = useState(false);
  const [isBlameData, setIsBlameData] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [review, setReview] = useState('');
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
    if (reviewData) {
      setReview(reviewData);
    }
  }, [reviewData]);
  useEffect(() => {
    if (review.length == 1) {
      setIsLeast2(false);
    } else {
      setIsLeast2(true);
    }
  }, [review]);
  useEffect(() => {
    if (praiseData || blameData) {
      setStatus('amend');
    } else {
      setStatus('create');
    }
  }, [praiseData, blameData]);
  useEffect(() => {
    if (praiseData && blameData) {
      setIsSelected1(true);
      setIsSelected2(false);
      setIsChecked1(praiseData.isChecked1);
      setIsChecked2(praiseData.isChecked2);
      setIsChecked3(praiseData.isChecked3);
      setIsChecked4(blameData.isChecked1);
      setIsChecked5(blameData.isChecked2);
      setIsChecked6(blameData.isChecked3);
    } else if (praiseData) {
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
    if (coming == 'report') {
      setIsSelected1(false);
      setIsSelected2(true);
    } else if (coming == 'taxi') {
      setIsSelected1(false);
      setIsSelected2(true);
    }
  }, [praiseData, blameData, coming]);
  useEffect(() => {
    if (!isChecked1 && !isChecked2 && !isChecked3) {
      setIsCanApply1(false);
    } else {
      if (isLeast2) {
        setIsCanApply1(true);
      } else {
        setIsCanApply1(false);
      }
    }
  }, [isChecked1, isChecked2, isChecked3, isLeast2]);
  useEffect(() => {
    if (!isChecked4 && !isChecked5 && !isChecked6 && isLeast2) {
      setIsCanApply2(false);
    } else {
      if (isLeast2) {
        setIsCanApply2(true);
      } else {
        setIsCanApply2(false);
      }
    }
  }, [isChecked4, isChecked5, isChecked6, isLeast2]);
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
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        navigation.navigate('Receipt', { coming: 'Review' });
      }),
    [navigation]
  );
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
      <View style={styles.scroll}></View>
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
  promiseInform: {
    marginLeft: 20,
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

export default Review;
