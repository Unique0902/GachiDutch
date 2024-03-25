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
import { Ionicons } from '@expo/vector-icons';
import ReviewOne from '../reviewOne/reviewOne';

const ReviewDetail = ({ navigation, route }) => {
  const { reviewDataArr } = route.params;
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
        <Text style={styles.headerText}>리뷰 상세</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.reviewSec}>
            <View style={styles.reviewTitleSec}>
              <Text style={styles.reviewTitle}>받은 리뷰들</Text>
            </View>
            {reviewDataArr &&
              reviewDataArr.length > 0 &&
              reviewDataArr.map((reviewData) => (
                <ReviewOne reviewData={reviewData} key={reviewData.roomId} />
              ))}
            {(!reviewDataArr || reviewDataArr.length == 0) && (
              <Text style={styles.noDataText}>리뷰가 없어요!</Text>
            )}
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

export default ReviewDetail;
