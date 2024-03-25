import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';

const Taxi = ({ route, navigation }) => {
  const { userData } = route.params;
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [location, setLocation] = useState(null);
  async function requestLocationPermission() {
    const isGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    setHasLocationPermission(isGranted);
    if (!isGranted) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Example App',
            message: 'Example App access to your location ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
          alert('You can use the location');
        } else {
          console.log('location permission denied');
          alert('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }
  const webref = useRef();

  const checkNowUserLoc = async () => {
    alert('출발');
    let { status } = await Location.requestForegroundPermissionsAsync();
    alert('2단계');
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let loc = await Location.getCurrentPositionAsync({});
    alert('3단계');
    console.log('안되냐?1');
    webref.current.injectJavaScript(`window.nowLocation=${loc.coords}`);
    console.log(loc.coords);
    console.log('안되냐?');
    alert('안되냐?');
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position);
    //   },
    //   (error) => {
    //     // See error code charts below.
    //     console.log(error.code, error.message);
    //   },
    //   { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    // );
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);
  useEffect(() => {
    if (webref.current) {
      checkNowUserLoc();
    }
  }, [hasLocationPermission, webref]);
  useEffect(() => {}, [location]);
  const runFirst = userData
    ? `
      window.userId = ${userData.uid};
      alert(window.userId);
    `
    : `window.userId = 'no'`;

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <WebView
        geolocationEnabled={true}
        ref={webref}
        source={{ uri: 'https://unique0902.github.io/naver-map/' }}
        style={{
          opacity: 0.99,
          minHeight: 1,
        }}
        injectedJavaScript={runFirst}
      />
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={40} color='black' />
      </Pressable>
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch', // 이부분 중요 이거 안써주면 WebView 에 width 값을 지정해야함..
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: 'white',
  },
});

export default Taxi;
