import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dutchpay_historys from '../dutchpay_historys/dutchpay_historys';
import Delivery_historys from '../delivery_historys/delivery_historys';
import Taxi_historys from '../taxi_historys/taxi_historys';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
const History = createMaterialTopTabNavigator();

const Receipt = ({ login, navigation, receiptService, userData, route }) => {
  const [category, setCategory] = useState('Taxi');
  const [isLoading, setIsLoading] = useState(false);
  const [receiptArr, setReceiptArr] = useState(null);
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight + 10,
  };
  let taxiStyle = styles.gray;
  let deliveryStyle = styles.gray;
  let dutchpayStyle = styles.gray;
  const clearColor = () => {
    taxiStyle = styles.gray;
    deliveryStyle = styles.gray;
    dutchpayStyle = styles.gray;
  };
  useEffect(() => {
    if (route.params) {
      if (route.params.coming == 'Review') {
        if (userData) {
          setIsLoading(true);
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
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }, [route.params]);
  useEffect(() => {
    console.log(route);
  }, [route.name]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      if (userData) {
        setIsLoading(true);
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
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);

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
    <View style={[styles.container, headerStyle]}>
      <View style={[styles.title]}>
        <Text style={styles.titleText}>더치내역</Text>
        {userData && (
          <Pressable
            style={styles.refreshBtn}
            onPress={() => {
              if (userData) {
                setIsLoading(true);
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
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
          >
            <Ionicons name='refresh' size={25} color='black' />
          </Pressable>
        )}
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
                userData={userData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                receiptArr={receiptArr}
                setReceiptArr={setReceiptArr}
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
    </View>
  );
};

export default Receipt;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '600',
  },
  refreshBtn: {
    position: 'absolute',
    right: 22,
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
