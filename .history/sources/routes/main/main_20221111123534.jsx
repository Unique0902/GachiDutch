import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';
import Home from '../../components/home/home';
import LowBar from '../../components/lowBar/lowBar';
import User from '../../components/user/user';
import Alarm from '../../components/alarm/alarm';
import Receipt from '../../components/receipt/receipt';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { isLogin, matchUserData } from '../../services/asyncstorage';

const Tab = createBottomTabNavigator();

const Main = ({ receiptService, navigation, route }) => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    isLogin().then((result) => {
      if (result) {
        setLogin(true);
        console.log('로그인 되어있음!');
        matchUserData(setUserData);
      } else {
        setLogin(false);
        console.log('로그인 안되어있음!');
      }
    });
  }, [login]);
  return (
    <>
      <View style={{ flex: 14 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Home') {
                return <Entypo name='home' size={size} color={color} />;
              } else if (route.name === 'Receipt') {
                return (
                  <FontAwesome5 name='receipt' size={size} color={color} />
                );
              } else if (route.name === 'Alarm') {
                return <FontAwesome name='bell' size={size} color={color} />;
              } else if (route.name === 'User') {
                return <FontAwesome name='user' size={size} color={color} />;
              }
            },
            tabBarStyle: { flex: 0.1 },
            tabBarLabelStyle: {
              fontSize: 15,
              marginBottom: 10,
              fontWeight: '500',
            },
            tabBarActiveTintColor: '#F49A11',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen
            name='Home'
            options={({ route, navigation }) => {
              return { tabBarLabel: '홈' };
            }}
            children={({ navigation }) => (
              <Home
                login={login}
                setLogin={setLogin}
                navigation={navigation}
                setUserData={setUserData}
                userData={userData}
              />
            )}
          />
          <Tab.Screen
            name='Receipt'
            options={({ route, navigation }) => {
              return { tabBarLabel: '내역' };
            }}
            children={({ navigation }) => (
              <Receipt
                login={login}
                navigation={navigation}
                receiptService={receiptService}
              />
            )}
          />
          <Tab.Screen
            options={({ route, navigation }) => {
              return { tabBarLabel: '알림' };
            }}
            name='Alarm'
            children={({ navigation }) => (
              <Alarm login={login} navigation={navigation} />
            )}
          />
          <Tab.Screen
            options={({ route, navigation }) => {
              return { tabBarLabel: '내정보' };
            }}
            name='User'
            children={({ navigation }) => (
              <User
                login={login}
                setLogin={setLogin}
                navigation={navigation}
                setUserData={setUserData}
                userData={userData}
              />
            )}
          />
        </Tab.Navigator>
      </View>
    </>
  );
};

export default Main;
