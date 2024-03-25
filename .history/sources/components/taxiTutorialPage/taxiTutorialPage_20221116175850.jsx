import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';

const TaxiTutorialPage = ({ navigation, route }) => {
  const { userData } = route.params;
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  const [pageNum, setPageNum] = useState(1);

  return (
    <View style={[headerStyle, styles.container]}>
      <View style={styles.main}>
        {pageNum == 1 && (
          <View style={styles.page}>
            <Pressable
              style={styles.skipBtn}
              onPress={() => {
                navigation.navigate('Taxi', { userData });
              }}
            >
              <Text style={styles.skipBtnText}>건너뛰기</Text>
            </Pressable>
            <Image
              resizeMode='stretch'
              source={require('../../images/first.jpeg')}
              style={styles.tutorialImg}
            />
            <View style={styles.btns}>
              <Pressable
                style={styles.onlyNextBtn}
                onPress={() => {
                  setPageNum(pageNum + 1);
                }}
              >
                <Text style={styles.onlyNextBtnText}>다음</Text>
              </Pressable>
            </View>
          </View>
        )}
        {pageNum == 2 && (
          <View style={styles.page}>
            <Pressable
              style={styles.skipBtn}
              onPress={() => {
                navigation.navigate('Taxi', { userData });
              }}
            >
              <Text>건너뛰기</Text>
            </Pressable>
            <Image
              resizeMode='stretch'
              source={require('../../images/second.jpeg')}
              style={styles.tutorialImg}
            />
            <View style={styles.btns}>
              <Pressable
                style={styles.beforeBtn}
                onPress={() => {
                  setPageNum(pageNum - 1);
                }}
              >
                <Text style={styles.beforeBtnText}>이전</Text>
              </Pressable>
              <Pressable
                style={styles.nextBtn}
                onPress={() => {
                  setPageNum(pageNum + 1);
                }}
              >
                <Text style={styles.nextBtnText}>다음</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  skipBtn: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipBtnText: {
    color: 'gray',
    fontSize: 16,
  },
  btns: {
    height: '8%',
    flexDirection: 'row',
  },
  beforeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
  },
  nextBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
  },
  onlyNextBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  onlyNextBtnText: {
    color: 'gray',
    fontSize: 18,
  },
  main: {
    flex: 12,
  },
  tutorialImg: {
    width: '100%',
    height: '87%',
  },

  title: {
    marginTop: 10,
    padding: 20,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 1,
    // borderStyle: 'solid',
  },

  titleText: {
    fontWeight: '500',
    fontSize: 25,
    color: '#FBBA00',
  },
  content: {
    marginTop: 5,
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: 'gray',
  },
  withdrawBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 10,
    marginTop: 50,
    height: 60,
  },

  withdrawBtnText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },

  enter: {
    position: 'absolute',
    right: 7,
    color: 'gray',
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default TaxiTutorialPage;
