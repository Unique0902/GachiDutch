import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Dutch_history from '../dutch_history/dutch_history';

const Taxi_historys = ({
  login,
  navigation,
  receiptService,
  userData,
  isLoading,
  setIsLoading,
  receiptArr,
  setReceiptArr,
}) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [receiptArr, setReceiptArr] = useState(null);
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', (e) => {
  //     if (userData) {
  //       setIsLoading(true);
  //       receiptService
  //         .getTexiHistorys(userData.uid)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           if (data.receiptArr) {
  //             setReceiptArr(data.receiptArr);
  //             setIsLoading(false);
  //           } else {
  //             setReceiptArr(null);
  //             setIsLoading(false);
  //           }
  //         });
  //     }
  //   });
  //   return unsubscribe;
  // }, [navigation]);
  useEffect(() => {
    if (userData) {
      setIsLoading(true);
      receiptService
        .getTexiHistorys(userData.uid)
        .then((response) => response.json())
        .then((data) => {
          if (data.receiptArr) {
            setReceiptArr(data.receiptArr);
            console.log(data.receiptArr);
            setIsLoading(false);
          } else {
            setReceiptArr(null);
            setIsLoading(false);
          }
        });
    }
  }, [userData]);
  return (
    <>
      <ScrollView style={styles.taxiHistorys}>
        {login ? (
          isLoading ? (
            <ActivityIndicator size='large' color='#0000ff' />
          ) : receiptArr && receiptArr.length != 0 ? (
            receiptArr
              .slice(0)
              .reverse()
              .map((receipt) => (
                <Dutch_history
                  key={receipt.time}
                  receipt={receipt}
                  time={new Date(receipt.time)}
                  userData={userData}
                  navigation={navigation}
                />
              ))
          ) : (
            <Text style={styles.noDataText}>내역이 없어요!</Text>
          )
        ) : (
          <View>
            <Text style={styles.nologinText}>로그인 해주세요!</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default Taxi_historys;
const styles = StyleSheet.create({
  taxiHistorys: {
    flex: 1,
  },
  noDataText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 50,
    color: 'gray',
  },
  nologinText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 50,
    color: 'gray',
  },
});
