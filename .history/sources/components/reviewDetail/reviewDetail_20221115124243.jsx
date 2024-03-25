import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ userDataService, navigation, route }) => {
  const { userData, setUserData, isMe } = route.params;
  const [reviewDataArr, setReviewDataArr] = useState(null);
  const [praiseData, setPraiseData] = useState(null);
  const [blameData, setBlameData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [score, setScore] = useState(100);
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  useEffect(() => {
    if (!isLoading1 && !isLoading2 && !isLoading3) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isLoading1, isLoading2, isLoading3]);
  useEffect(() => {
    if (!reviewDataArr) {
      setIsLoading1(true);
      userDataService
        .getReview(userData.uid)
        .then((response) => response.json())
        .then((data) => {
          if (data.reviewData) {
            console.log(data.reviewData);
            setReviewDataArr(data.reviewData);
          }
          setIsLoading1(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!blameData) {
      setIsLoading2(true);
      userDataService
        .getBlameData(userData.uid)
        .then((response) => response.json())
        .then((data) => {
          if (data.blameData) {
            setBlameData(data.blameData);
          }
          setIsLoading2(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!praiseData) {
      setIsLoading3(true);
      userDataService
        .getPraiseData(userData.uid)
        .then((response) => response.json())
        .then((data) => {
          if (data.praiseData) {
            setPraiseData(data.praiseData);
          }
          setIsLoading3(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData]);
  useEffect(() => {
    const praiseScore = praiseData
      ? praiseData.praise1 + praiseData.praise2 + praiseData.praise3
      : 0;
    const blameScore = blameData
      ? blameData.blame1 + blameData.blame2 + blameData.blame3
      : 0;
    if (!praiseData && !blameData) {
      setScore(0);
    } else {
      setScore((praiseScore / (praiseScore + blameScore)).toFixed(2) * 100);
    }
  }, [praiseData, blameData]);
  return (
    <View style={[headerStyle, styles.container]}>
      <View style={styles.header}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}
        ></Pressable>
        <Text style={styles.headerText}>리뷰 상세</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.reviewSec}>
            <Pressable
              style={styles.reviewTitleSec}
              onPress={() => {
                navigation.navigate('Ready');
              }}
            >
              <Text style={styles.reviewTitle}>받은 리뷰</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
            </Pressable>
            {reviewDataArr &&
              reviewDataArr.length < 4 &&
              reviewDataArr.map((reviewData) => (
                <View style={styles.review} key={reviewData.roomId}>
                  <Image style={styles.reviewUserImage} />
                  <View style={styles.reviewMain}>
                    <View style={styles.reviewInform}>
                      <Text style={styles.reviewUserNameText}>
                        {reviewData.writerName}
                      </Text>
                      <Text style={styles.reviewTimeText}>2022/02/01</Text>
                    </View>
                    <Text style={styles.reviewText}>{reviewData.review}</Text>
                  </View>
                </View>
              ))}
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
  scroll: {
    flex: 12,
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
  },
  amendBtn: {
    marginTop: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 5,
    padding: 8,
  },
  amendText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 30,
  },
  satisfactionSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  satisfactionTitle: {
    fontSize: 20,
  },
  satisfactionScore: {
    marginLeft: 20,
    fontSize: 30,
    color: '#FBBA00',
  },
  enter: {
    position: 'absolute',
    right: 7,
    color: 'gray',
  },
  evaluationSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  evaluationTitleSec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  evaluationTitle: {
    fontSize: 20,
  },
  evaluation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  evaluationTextSec: {
    marginLeft: 20,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  evaluationText: {},
  reviewSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  reviewTitleSec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewTitle: {
    marginBottom: 5,
    fontSize: 20,
  },
  review: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  reviewUserImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'black',
    marginRight: 10,
  },
  reviewInform: {
    flexDirection: 'row',
  },
  reviewUserNameText: {
    color: 'gray',
  },
  reviewTimeText: {
    marginLeft: 10,
    color: 'gray',
  },
  reviewText: {
    fontSize: 15,
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Profile;
