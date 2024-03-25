import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './sources/components/home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Taxi from './sources/components/taxi/taxi';
import Main from './sources/routes/main/main';
import Login from './sources/routes/login/login';
import HttpClient from './sources/network/http.js';
import ReceiptService from './sources/services/receipt.js';

const Stack = createNativeStackNavigator();
const baseURL = 'https://dutch-server.herokuapp.com';
const httpClient = new HttpClient(baseURL);
const receiptService = new ReceiptService(baseURL);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Main'
            children={({ navigation, route }) => (
              <Main
                receiptService={receiptService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen name='Taxi' component={Taxi} />
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 25,
  },
  main: {},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 30,
  },
});
