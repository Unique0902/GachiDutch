import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ReviewOne = ({ reviewData, key, navigation }) => {
  let timeData;
  if (reviewData.amendTime) {
    timeData = reviewData.amendTime;
  } else if (reviewData.createdTime) {
    timeData = reviewData.createdTime;
  } else {
    timeData = new Date().toString();
  }
  const time = new Date(timeData);

  return (
    <View style={styles.review} key={reviewData.roomId}>
      <Pressable
        onPress={() => {
          navigation.navigate('Profile', {
            userData: {
              uid: reviewData.writerUid,
              name: reviewData.writerName,
            },
            setUserData: null,
            isMe: false,
          });
        }}
      >
        <FontAwesome name='user-circle' size={35} color='black' />
      </Pressable>
      <View style={styles.reviewMain}>
        <View style={styles.reviewInform}>
          <Text style={styles.reviewUserNameText}>{reviewData.writerName}</Text>
          <Text style={styles.reviewTimeText}>{`${time.getFullYear()}/${
            time.getMonth() + 1
          }/${time.getDate()} ${time.getHours()}:${
            time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
          }`}</Text>
        </View>
        <Text style={styles.reviewText}>{reviewData.review}</Text>
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
  reviewMain: {
    marginLeft: 12,
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
  noDataText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 50,
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

export default ReviewOne;
