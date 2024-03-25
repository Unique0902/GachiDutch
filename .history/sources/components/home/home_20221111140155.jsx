import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import LowBar from '../lowBar/lowBar';
import { isLogin, getUid } from '../../services/asyncstorage';

const Home = ({ login, setLogin, navigation, setUserData, userData }) => {
  const [scrollNum, setScrollNum] = useState(1);
  const windowWidth = Dimensions.get('window').width;
  let advertisementWidth = windowWidth - 40;
  const scrollWidth = parseInt(advertisementWidth);
  let scrollLeft = 0;

  const advertisementStyle = () => {
    return {
      width: advertisementWidth,
    };
  };
  const pageCircleStyle = (num) => {
    if (scrollNum === num) {
      return {
        color: '#FB9700',
      };
    } else {
      return {
        color: '#FFFDD1',
      };
    }
  };
  const scrollRef = useRef();
  return (
    <View style={styles.home}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Image
            source={require('../../images/dutch_logo.png')}
            style={styles.logo}
          />
          <Pressable>
            <Entypo name='menu' size={35} color='black' />
          </Pressable>
        </View>
        <View style={styles.mainTop}>
          {login ? (
            <View style={styles.onLogin}>
              <Text style={styles.onLoginText}>
                {userData && userData.name}님 반가워요!
              </Text>
            </View>
          ) : (
            <View style={styles.login}>
              <View style={styles.loginTop}>
                <Pressable
                  style={styles.loginBtn}
                  onPress={() =>
                    navigation.navigate('Login', { setLogin, setUserData })
                  }
                >
                  <Text style={[styles.loginText, styles.loginBtnText]}>
                    로그인
                  </Text>
                </Pressable>
                <Text style={styles.loginText}>하시고</Text>
              </View>
              <Text style={styles.loginText}>다양한 혜택을 만나 보세요!</Text>
            </View>
          )}
          <View style={styles.advertisementBox}>
            <ScrollView
              horizontal
              pagingEnabled
              contentContainerStyle={styles.advertisementScroll}
              ref={scrollRef}
              onScroll={(e) => {
                scrollLeft = parseInt(e.nativeEvent.contentOffset.x);
                if (scrollLeft % scrollWidth < 10) {
                  setScrollNum(parseInt(scrollLeft / scrollWidth + 1));
                }
              }}
              scrollEventThrottle={100}
              showsHorizontalScrollIndicator={false}
            >
              <Pressable style={[styles.advertisement, advertisementStyle()]}>
                <Image
                  source={require('../../images/advertisement_img.png')}
                  style={styles.advertisementImg}
                />
                <Text style={styles.advertisementText}>
                  같이 더치로{'\n'}편리하게 이용하세요
                </Text>
              </Pressable>
              <Pressable style={[styles.advertisement, advertisementStyle()]}>
                <Image
                  source={require('../../images/advertisement_img.png')}
                  style={styles.advertisementImg}
                />
                <Text style={styles.advertisementText}>
                  같이 더치로{'\n'}편리하게 이용하세요
                </Text>
              </Pressable>
              <Pressable style={[styles.advertisement, advertisementStyle()]}>
                <Image
                  source={require('../../images/advertisement_img.png')}
                  style={styles.advertisementImg}
                />
                <Text style={styles.advertisementText}>
                  같이 더치로{'\n'}편리하게 이용하세요
                </Text>
              </Pressable>
              <Pressable style={[styles.advertisement, advertisementStyle()]}>
                <Image
                  source={require('../../images/advertisement_img.png')}
                  style={styles.advertisementImg}
                />
                <Text style={styles.advertisementText}>
                  같이 더치로{'\n'}편리하게 이용하세요
                </Text>
              </Pressable>
            </ScrollView>
            <View style={styles.pageCircles}>
              <FontAwesome
                style={[styles.pageCircle, pageCircleStyle(1)]}
                name='circle'
                size={10}
                color='white'
              />
              <FontAwesome
                style={[styles.pageCircle, pageCircleStyle(2)]}
                name='circle'
                size={10}
                color='white'
              />
              <FontAwesome
                style={[styles.pageCircle, pageCircleStyle(3)]}
                name='circle'
                size={10}
                color='white'
              />
              <FontAwesome
                style={[styles.pageCircle, pageCircleStyle(4)]}
                name='circle'
                size={10}
                color='white'
              />
            </View>
          </View>
        </View>
      </View>
      <Pressable style={styles.event}>
        <View>
          <Text style={[styles.eventText, { fontSize: 20 }]}>
            이벤트 {'   '}|
          </Text>
        </View>
        <Text style={[styles.eventText, { fontSize: 15, marginLeft: 20 }]}>
          같이더치 월 결제로 10% 할인받자!
        </Text>
        <Text style={[styles.eventText, { fontSize: 20, marginLeft: 20 }]}>
          {'>'}
        </Text>
      </Pressable>

      <View style={styles.mainBottom}>
        <View style={styles.categories}>
          <View style={styles.topBtns}>
            <View style={styles.btnShadow}>
              <Pressable
                style={styles.goodsBtn}
                onPress={() => {
                  if (login) {
                    navigation.navigate('Taxi', { userData });
                  } else {
                    navigation.navigate('Login', { setLogin, setUserData });
                  }
                }}
              >
                <Image
                  source={require('../../images/taxi_img.png')}
                  style={styles.taxiImg}
                />
                <Text style={[styles.goodText, { marginTop: 20 }]}>택시</Text>
              </Pressable>
            </View>
            <View style={styles.btnShadow}>
              <Pressable style={styles.goodsBtn}>
                <Image
                  source={require('../../images/delivery_img.png')}
                  style={styles.taxiImg}
                />
                <Text style={[styles.goodText, { marginTop: 20 }]}>배달</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.downBtns}>
            <View style={styles.btnShadow}>
              <Pressable style={styles.downGoodsBtn}>
                <Image
                  source={require('../../images/taxi_human_img.png')}
                  style={styles.peopleImg}
                />
                <Text
                  style={[styles.goodText, { marginRight: 20, marginLeft: 20 }]}
                >
                  지인끼리
                </Text>
                <Image
                  source={require('../../images/location_img.png')}
                  style={styles.peopleImg}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
  },
  loginText: {
    paddingVertical: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    flex: 1,
  },
  mainTop: {
    flex: 6,
  },
  top: {
    flex: 6,
    padding: 20,
  },
  loginBtn: {},
  login: {
    flex: 2,
    marginTop: 15,
  },
  onLogin: {
    flex: 2,
    marginTop: 15,
  },
  onLoginText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: '600',
    color: '#444444',
  },
  loginTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 18,
    color: '#444444',
  },
  loginBtnText: {
    color: '#F39910',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  mainBottom: {
    flex: 6,
    padding: 15,
  },
  advertisementScroll: {
    borderRadius: 15,
    position: 'relative',
  },
  advertisementBox: {
    flex: 4,
  },
  advertisement: {
    backgroundColor: '#FBBA00',
    borderRadius: 15,
    position: 'relative',
  },
  advertisementText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 30,
    marginTop: 25,
  },
  advertisementImg: {
    width: '100%',
    height: '87%',
    position: 'absolute',
    borderRadius: 20,
    bottom: 0,
  },
  pageCircles: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 4,
    left: 140,
  },
  pageCircle: {
    marginLeft: 3,
    marginRight: 3,
  },
  event: {
    flex: 1,
    backgroundColor: '#3C4451',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {
    flex: 1,
  },
  topBtns: {
    flexDirection: 'row',
    flex: 3,
  },
  downBtns: {
    flex: 2,
  },
  goodsBtn: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downGoodsBtn: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goodText: {
    fontSize: 20,
    fontWeight: '600',
  },
  btnShadow: {
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    borderRadius: 20,
    shadowRadius: 1.0,
    elevation: 1,
    margin: 5,
  },
  eventText: {
    color: 'white',
  },
  taxiImg: {
    width: 90,
    height: 90,
  },
  peopleImg: {
    width: 60,
    height: 67,
  },
  logo: {
    width: 150,
    height: 30,
  },
});
