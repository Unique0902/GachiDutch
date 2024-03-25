import React, { useEffect, useRef, useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Dutch_history from '../dutch_history/dutch_history';

const Taxi_historys = ({ login, navigation, receiptService, userData }) => {
  useEffect(() => {
    if (userData) {
      receiptService.getTexiHistorys(userData.uid).then((data) => {});
    }
  }, [userData]);
  return (
    <>
      <View style={styles.taxiHistorys}>
        {login ? (
          <Dutch_history />
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
