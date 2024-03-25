import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const Dutch_history = ({ receipt, time }) => {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    if (receipt.status == 'complete') {
      setStatus('약속 완료');
    }
  }, [receipt]);
  return (
    <>
      <View style={styles.ductchHistory}>
        <View style={styles.historyTop}>
          <View style={styles.topLeft}>
            <Text style={styles.topText}>
              {time &&
                `${time.getFullYear()}/${
                  time.getMonth() + 1
                }/${time.getDate()}`}
            </Text>
            <Text style={[styles.topText, { marginLeft: 10 }]}>
              {receipt && receipt.status}
            </Text>
          </View>
          <View style={styles.topRight}>
            <Pressable style={styles.detailBtn}>
              <View style={styles.detailBtnBox}>
                <Text style={styles.detailText}>더치상세</Text>
              </View>
            </Pressable>
            <Pressable styles={styles.optionBtn}>
              <SimpleLineIcons
                name='options-vertical'
                size={18}
                color='black'
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.historyCenter}>
          <Text style={styles.centerText}>일산동</Text>
        </View>
        <Pressable style={styles.historyLow}>
          <Text style={styles.historyLowText}>더치 후기 보내기</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Dutch_history;

const styles = StyleSheet.create({
  ductchHistory: {
    height: 120,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 15,
  },
  historyTop: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topText: {
    color: 'gray',
    fontSize: 16,
  },
  centerText: {
    fontSize: 20,
  },
  detailText: {
    color: 'black',
    fontSize: 12,
    margin: 2,
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailBtn: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 12,
    height: 28,
    marginRight: 10,
  },
  detailBtnBox: {
    margin: 2,
  },
  historyCenter: {
    flex: 2.5,
    marginTop: 10,
  },
  historyLow: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyLowText: {
    color: 'red',
    fontSize: 18,
    fontWeight: '600',
  },
});
