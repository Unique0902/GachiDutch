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
      {pageNum == 1 && (
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
            source={require('../../images/first.jpeg')}
            style={styles.tutorialImg}
          />
          <View style={styles.btns}>
            <Pressable style={styles.onlynextBtn}>
              <Text style={styles.nextBtnText}>다음</Text>
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
            <Pressable style={styles.beforeBtn}>
              <Text style={styles.beforeBtnText}>이전</Text>
            </Pressable>
            <Pressable style={styles.nextBtn}>
              <Text style={styles.nextBtnText}>다음</Text>
            </Pressable>
          </View>
        </View>
      )}
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
  main: {
    flex: 12,
    padding: 10,
  },
  tutorialImg: {
    width: '100%',
    height: '90%',
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
