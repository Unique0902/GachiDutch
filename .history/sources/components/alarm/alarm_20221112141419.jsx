import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import AlertItem from './alert';
import { StatusBar } from 'react-native';

const Alarm = (props) => {
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight + 20,
  };
  const [alerts, setAlerts] = useState({});
  const temp_alerts = {
    1662111985970: {
      title: '테스트알림',
      content:
        '테스트 알림입니다. 택시는 잘 이용하셨나요? 좋아요와 구독 부탁드립니다.',
      time: '1662114985970',
    },
    1662104985970: {
      title: '테스트알림',
      content:
        '테스트 알림입니다. 택시는 잘 이용하셨나요? 좋아요와 구독 부탁드립니다.',
      time: '1662114985970',
    },
    1662114985970: {
      title: '테스트알림',
      content:
        '테스트 알림입니다. 택시는 잘 이용하셨나요? 좋아요와 구독 부탁드립니다.',
      time: '1662114985970',
    },
    1661114985970: {
      title: '테스트알림',
      content:
        '테스트 알림입니다. 택시는 잘 이용하셨나요? 좋아요와 구독 부탁드립니다.',
      time: '1662114984970',
    },
    1612114985970: {
      title: '테스트알림',
      content:
        '테스트 알림입니다. 택시는 잘 이용하셨나요? 좋아요와 구독 부탁드립니다.',
      time: '1661114984970',
    },
  };
  // const temp_alerts = {};
  useEffect(() => {
    setAlerts(temp_alerts);
  }, []);

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>알림</Text>
      </View>

      {Object.keys(alerts).length === 0 ? (
        <View style={{ ...styles.alerts, ...styles.noNotification }}>
          <AntDesign
            style={{ opacity: 0.5 }}
            name='notification'
            size={50}
            color='black'
          />
          <Text style={{ fontSize: 25, marginTop: 10, opacity: 0.5 }}>
            알림이 없습니다.
          </Text>
        </View>
      ) : (
        <View style={styles.alerts}>
          <ScrollView>
            {Object.keys(alerts).map((key) => (
              <AlertItem
                key={key}
                title={alerts[key].title}
                content={alerts[key].content}
                time={alerts[key].time}
              ></AlertItem>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignContent: 'center',
  },
  header: {
    height: 40,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  alerts: {
    flex: 7,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 5,
  },
  noNotification: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
