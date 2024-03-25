import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Dutch_history from '../dutch_history/dutch_history';

const Taxi_historys = ({ login, navigation, receiptService, userData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [receiptArr, setReceiptArr] = useState(null);
  console.log(isLoading);
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      console.log('hi');

      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    if (userData) {
      setIsLoading(true);
      console.log(receiptService);
      receiptService
        .getTexiHistorys(userData.uid)
        .then((response) => response.json())
        .then((data) => {
          if (data.receiptArr) {
            setReceiptArr(data.receiptArr);
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
      <View style={styles.taxiHistorys}>
        {login ? (
          isLoading ? (
            <ActivityIndicator size='large' color='#0000ff' />
          ) : (
            receiptArr &&
            receiptArr
              .slice(0)
              .reverse()
              .map((receipt) => (
                <Dutch_history
                  key={receipt.time}
                  receipt={receipt}
                  time={new Date(receipt.time)}
                />
              ))
          )
        ) : (
          <View>
            <Text>로그인 해주세요!</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Taxi_historys;
const styles = StyleSheet.create({
  taxiHistorys: {
    flex: 1,
  },
});