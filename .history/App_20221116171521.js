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
import Ready from './sources/components/ready/ready';
import Profile from './sources/components/profile/profile';
import Setting from './sources/components/setting/setting';
import ProfileAmend from './sources/components/profileAmend/profileAmend';
import UserService from './sources/services/user.js';
import Review from './sources/components/review/review';
import UserDataService from './sources/services/userData';
import Report from './sources/components/report/report';
import ReportService from './sources/services/report';
import LoadingPage from './sources/components/loadingPage/loadingPage';
import ReceiptDetail from './sources/components/receiptDetail/receiptDetail';
import BlackPage from './sources/components/blackPage/blackPage';
import BlacklistPage from './sources/components/blacklistPage/blacklistPage';
import MannerDetail from './sources/components/mannerDetail/mannerDetail';
import ReviewDetail from './sources/components/reviewDetail/reviewDetail';
import PrivacyInformPage from './sources/components/privacyInformPage/privacyInformPage';
import WithdrawPage from './sources/components/withdrawPage/withdrawPage';
import TaxiTutorialPage from './sources/components/taxiTutorialPage/taxiTutorialPage';

const Stack = createNativeStackNavigator();
const baseURL = 'https://dutch-server.herokuapp.com';
const httpClient = new HttpClient(baseURL);
const receiptService = new ReceiptService(baseURL);
const userService = new UserService(baseURL);
const userDataService = new UserDataService(baseURL);
const reportService = new ReportService(baseURL);

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
          <Stack.Screen name='Ready' component={Ready} />
          <Stack.Screen
            name='Profile'
            children={({ navigation, route }) => (
              <Profile
                userDataService={userDataService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen
            name='TaxiTutorialPage'
            children={({ navigation, route }) => (
              <TaxiTutorialPage navigation={navigation} route={route} />
            )}
          />
          <Stack.Screen
            name='ReceiptDetail'
            children={({ navigation, route }) => (
              <ReceiptDetail navigation={navigation} route={route} />
            )}
          />
          <Stack.Screen
            name='LoadingPage'
            children={({ navigation, route }) => (
              <LoadingPage
                receiptService={receiptService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen
            name='WithdrawPage'
            children={({ navigation, route }) => (
              <WithdrawPage
                userDataService={userDataService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen
            name='Report'
            children={({ navigation, route }) => (
              <Report
                reportService={reportService}
                userDataService={userDataService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen
            name='PrivacyInformPage'
            children={({ navigation, route }) => (
              <PrivacyInformPage navigation={navigation} route={route} />
            )}
          />
          <Stack.Screen
            name='MannerDetail'
            children={({ navigation, route }) => (
              <MannerDetail navigation={navigation} route={route} />
            )}
          />
          <Stack.Screen
            name='ReviewDetail'
            children={({ navigation, route }) => (
              <ReviewDetail navigation={navigation} route={route} />
            )}
          />
          <Stack.Screen
            name='BlacklistPage'
            children={({ navigation, route }) => (
              <BlacklistPage
                userDataService={userDataService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen
            name='BlackPage'
            children={({ navigation, route }) => (
              <BlackPage
                userDataService={userDataService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen
            name='Review'
            children={({ navigation, route }) => (
              <Review
                userDataService={userDataService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen
            name='ProfileAmend'
            children={({ navigation, route }) => (
              <ProfileAmend
                userService={userService}
                navigation={navigation}
                route={route}
              />
            )}
          />
          <Stack.Screen name='Setting' component={Setting} />
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
