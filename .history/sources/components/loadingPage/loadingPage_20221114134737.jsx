import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

const LoadingPage = ({ receiptService, navigation, route }) => {
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  useEffect(() => {
    if (route.params) {
      if (route.params.want == 'badReview') {
        if (userData) {
          setIsLoading(true);
          receiptService
            .getTexiHistorys(userData.uid)
            .then((response) => response.json())
            .then((data) => {
              if (data.receiptArr) {
                const receiptArr = data.receiptArr;
                const receipt = receiptArr[0];
                const time = new Date(receipt.time);
                const userData = route.params.userData;
                navigation.navigate('Review', {
                  receipt,
                  time,
                  praiseData: receipt.praiseData ? receipt.praiseData : null,
                  blameData: receipt.blameData ? receipt.blameData : null,
                  userData,
                  coming: 'taxi',
                  reviewData: receipt.reviewData
                    ? receipt.reviewData.review
                    : null,
                });
              } else {
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }, [route.params]);
  return (
    <View style={[styles.container]}>
      <View style={[headerStyle]}>
        <ActivityIndicator size='large' color='#FBBA00' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch', // 이부분 중요 이거 안써주면 WebView 에 width 값을 지정해야함..
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: 'white',
  },
});

export default LoadingPage;
