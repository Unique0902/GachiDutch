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

const Review = ({ route, navigation }) => {
  const { receipt, time } = route.params;
  const [review, setReview] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
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
              <Text style={styles.evaluationText}>친절하고 매너가 좋아요.</Text>
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
              <Text style={styles.evaluationText}>시간 약속을 잘 지켜요.</Text>
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
              onChangeText={setReview}
              placeholder='여기에 적어주세요. (선택사항)'
              value={review}
              textAlign={'left'}
              textAlignVertical={'top'}
              multiline
            />
          </View>
          <Pressable style={styles.applyBtn}>
            <Text style={styles.applyText}>후기 남기기</Text>
          </Pressable>
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
    height: 50,
    borderWidth: 10,
  }

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Review;
