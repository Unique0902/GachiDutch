import React, { useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Dutch_history from '../dutch_history/dutch_history';

const Dutchpay_historys = ({ login, navigation }) => {
  return (
    <>
      <View style={styles.dutchpayHistorys}>
        {login ? (
          <Text>아직 개발중에 있어요!</Text>
        ) : (
          // <Dutch_history />
          <View>
            <Text>로그인 해주세요!</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Dutchpay_historys;
const styles = StyleSheet.create({
  dutchpayHistorys: {
    flex: 1,
  },
});
