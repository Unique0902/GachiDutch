import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const LowBar = ({ navigation, route, tabLoc }) => {
  const [checkedCategory, setCheckedCategory] = useState('Home');

  let homeStyle = styles.gray;
  let receiptStyle = styles.gray;
  let bellStyle = styles.gray;
  let userStyle = styles.gray;
  const clearStyles = () => {
    homeStyle = styles.gray;
    receiptStyle = styles.gray;
    bellStyle = styles.gray;
    userStyle = styles.gray;
  };

  const changeColor = () => {
    switch (checkedCategory) {
      case 'Home':
        clearStyles();
        homeStyle = styles.yellow;
        return;
      case 'Receipt':
        clearStyles();
        receiptStyle = styles.yellow;
        return;
      case 'Alarm':
        clearStyles();
        bellStyle = styles.yellow;
        return;
      case 'User':
        clearStyles();
        userStyle = styles.yellow;
        return;
    }
  };
  changeColor();
  useEffect(() => {
    changeColor();
  }, [checkedCategory]);
  const naviageTab = (name) => {
    if (checkedCategory !== name) {
      navigation.navigate('Main', {
        screen: name,
      });
    }
  };
  return (
    <>
      <View style={styles.lowBar}>
        <View style={styles.lowBar_Btns}>
          <Pressable
            onPress={() => {
              setCheckedCategory('Home');
              naviageTab('Home');
            }}
            style={styles.lowBar_Btn}
          >
            <Entypo
              name='home'
              style={[styles.btnLogo, homeStyle]}
              size={24}
              color='black'
            />
            <Text style={[styles.btnText, homeStyle]}>홈</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCheckedCategory('Receipt');
              naviageTab('Receipt');
            }}
            style={[styles.lowBar_Btn]}
          >
            <FontAwesome5
              style={[styles.btnLogo, receiptStyle]}
              name='receipt'
              size={24}
              color='black'
            />
            <Text style={[styles.btnText, receiptStyle]}>내역</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCheckedCategory('Alarm');
              naviageTab('Alarm');
            }}
            style={[styles.lowBar_Btn]}
          >
            <FontAwesome
              style={[styles.btnLogo, bellStyle]}
              name='bell'
              size={24}
              color='black'
            />
            <Text style={[styles.btnText, bellStyle]}>알림</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCheckedCategory('User');
              naviageTab('User');
            }}
            style={[styles.lowBar_Btn]}
          >
            <FontAwesome
              style={[styles.btnLogo, userStyle]}
              name='user'
              size={24}
              color='black'
            />
            <Text style={[styles.btnText, userStyle]}>내정보</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LowBar;

const styles = StyleSheet.create({
  lowBar: {
    flex: 1.5,
  },
  lowBar_Btns: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  lowBar_Btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogo: {},
  btnText: {
    fontWeight: '800',
  },
  gray: {
    color: 'gray',
  },
  yellow: {
    color: '#F49A11',
  },
});
