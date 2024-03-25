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
  const { userData, coming } = route.params;
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [location, setLocation] = useState(null);
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
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
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let loc = await Location.getCurrentPositionAsync({});
    webref.current.injectJavaScript(`window.nowLocation=${loc.coords}`);
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
  //   const getUid = `
  // const intv = setInterval(()=>{
  //   if(!window.userId){
  //     window.userId = '${userData.uid};
  //   } else {
  //     clearInterval(intv);
  //   }
  // },1000)
  // `;
  const getUid = `window.userId = '${userData.uid}';`;
  // useEffect(() => {
  //   if (userData) {
  //     console.log(userData);
  //     if (webref.current) {
  //       console.log('sfaf');
  //       webref.current.injectJavaScript(getUid);
  //     }
  //   }
  // }, [userData, webref.current]);

  // useEffect(() => {
  //   if (userData) {
  //     console.log(userData);
  //     if (webref.current.injectJavaScript) {
  //       console.log('sfaf');
  //       webref.current.injectJavaScript(`window.userId = '${userData.uid}';
  //     }
  //   }
  // }, [userData, webref.current]);
  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.header}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            if (coming == 'taxiTutorialPage') {
              navigation.navigate('Home');
            } else {
              navigation.goBack();
            }
          }}
        >
          <Ionicons name='arrow-back' size={30} color='black' />
        </Pressable>
        <Text style={styles.headerText}>택시 더치</Text>
        <Pressable
          style={styles.howToUseBtn}
          onPress={() => {
            navigation.navigate('TaxiTutorialPage', { userData });
          }}
        >
          <Text style={styles.howToUseBtnText}>사용법</Text>
        </Pressable>
      </View>
      <View style={styles.webb}>
        <WebView
          geolocationEnabled={true}
          ref={webref}
          source={{ uri: 'https://unique0902.github.io/naver-map/' }}
          style={{
            opacity: 0.99,
            minHeight: 1,
          }}
          onMessage={(event) => {
            const data = event.nativeEvent.data;
            if (data == 'home') {
              navigation.navigate('Home');
            } else if (data == 'badReview') {
              navigation.navigate('LoadingPage', {
                want: 'badReview',
                userData,
              });
            } else if (data == 'report') {
              navigation.navigate('LoadingPage', { want: 'report', userData });
            }
          }}
          injectedJavaScript={getUid}
        />
      </View>
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
  howToUseBtn: {
    position: 'absolute',
    right: 15,
  },
  howToUseBtnText: {
    color: '#fbba00',
    fontSize: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  webb: {
    flex: 15,
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
  // backBtn: {
  //   position: 'absolute',
  //   top: 150,
  //   left: 20,
  //   borderColor: 'black',
  //   borderStyle: 'solid',
  //   borderRadius: 50,
  //   backgroundColor: 'white',
  // },
});

export default Taxi;
