import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dutchpay_historys from '../dutchpay_historys/dutchpay_historys';
import Delivery_historys from '../delivery_historys/delivery_historys';
import Taxi_historys from '../taxi_historys/taxi_historys';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const History = createMaterialTopTabNavigator();

const Receipt = ({ login, navigation, receiptService, userData }) => {
  const [category, setCategory] = useState('Taxi');
  let taxiStyle = styles.gray;
  let deliveryStyle = styles.gray;
  let dutchpayStyle = styles.gray;
  const clearColor = () => {
    taxiStyle = styles.gray;
    deliveryStyle = styles.gray;
    dutchpayStyle = styles.gray;
  };

  const changeColor = () => {
    switch (category) {
      case 'Taxi':
        clearColor();
        taxiStyle = styles.yellow;
        return;
      case 'Delivery':
        clearColor();
        deliveryStyle = styles.yellow;
        return;
      case 'Dutchpay':
        clearColor();
        dutchpayStyle = styles.yellow;
        return;
    }
  };
  useEffect(() => {
    changeColor();
  }, [category]);
  changeColor();

  useEffect(() => {
    if (userData) {
    }
  }, [userData]);

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>더치내역</Text>
      </View>
      <View style={{ flex: 14, backgroundColor: 'black' }}>
        <History.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#F49A11',
            tabBarInactiveTintColor: 'gray',
            tabBarPressColor: '#F49A11',
            tabBarIndicatorContainerStyle: { borderColor: '#F49A11' },
          }}
        >
          <History.Screen
            options={{ tabBarLabel: '택시' }}
            name='Taxi_historys'
            children={({ navigation }) => (
              <Taxi_historys
                login={login}
                navigation={navigation}
                receiptService={receiptService}
              />
            )}
          />
          <History.Screen
            options={{ tabBarLabel: '배달' }}
            name='Delivery_historys'
            children={({ navigation }) => (
              <Delivery_historys login={login} navigation={navigation} />
            )}
          />
          <History.Screen
            options={{ tabBarLabel: '더치페이' }}
            name='Dutchpay_historys'
            children={({ navigation }) => (
              <Dutchpay_historys login={login} navigation={navigation} />
            )}
          />
        </History.Navigator>
      </View>
    </>
  );
};

export default Receipt;
const styles = StyleSheet.create({
  title: {
    flex: 1.5,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    marginLeft: 20,
    fontWeight: '600',
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  categorieText: {
    fontSize: 18,
  },
  receipts: {
    flex: 14,
  },
  gray: {
    color: 'gray',
  },
  yellow: {
    color: '#FBBA00',
  },
});