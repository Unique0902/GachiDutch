import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Setting = ({ route, navigation }) => {
  const { userData } = route.params;
  const statusBarHeight = StatusBar.currentHeight;
  const headerStyle = {
    marginTop: statusBarHeight,
  };
  return (
    <View style={[headerStyle, styles.container]}>
      <View style={styles.header}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name='arrow-back' size={30} color='black' />
        </Pressable>
        <Text style={styles.headerText}>프로필</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.profileSec}>
            <View style={styles.profile}>
              <Image style={styles.profileImage} />
              <Text style={styles.nameText}>{userData && userData.name}</Text>
            </View>
            <Pressable style={styles.amendBtn}>
              <Text style={styles.amendText}>프로필 수정</Text>
            </Pressable>
          </View>
          <View style={styles.satisfactionSec}>
            <Text style={styles.satisfactionTitle}>만족률</Text>
            <Text style={styles.satisfactionScore}>96점 / 100점</Text>
          </View>
          <View style={styles.evaluationSec}>
            <View style={styles.evaluationTitleSec}>
              <Text style={styles.evaluationTitle}>받은 평가</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
            </View>
            <View style={styles.evaluation}>
              <Text>5</Text>
              <View style={styles.evaluationTextSec}>
                <Text>친절하고 매너가 좋아요.</Text>
              </View>
            </View>
            <View style={styles.evaluation}>
              <Text>5</Text>
              <View style={styles.evaluationTextSec}>
                <Text style={styles.evaluationText}>응답이 빨라요.</Text>
              </View>
            </View>
            <View style={styles.evaluation}>
              <Text>5</Text>
              <View style={styles.evaluationTextSec}>
                <Text style={styles.evaluationText}>
                  시간 약속을 잘 지켜요.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.reviewSec}>
            <View style={styles.reviewTitleSec}>
              <Text style={styles.reviewTitle}>받은 리뷰</Text>
              <AntDesign style={styles.enter} name='right' size={20} />
            </View>
            <View style={styles.review}>
              <Image style={styles.reviewUserImage} />
              <View style={styles.reviewMain}>
                <View style={styles.reviewInform}>
                  <Text style={styles.reviewUserNameText}>나랑드사이다</Text>
                  <Text style={styles.reviewTimeText}>2022/02/01</Text>
                </View>
                <Text style={styles.reviewText}>시간 약속을 잘 지켜요.</Text>
              </View>
            </View>
            <Text>감사합니다 ^^.</Text>
            <Text>응답이 빨라요.</Text>
            <Text>시간 약속을 잘 지켜요.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scroll: {
    flex: 12,
  },
  profileSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  amendBtn: {
    marginTop: 15,
    backgroundColor: '#FBBA00',
    borderRadius: 5,
    padding: 8,
  },
  amendText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 30,
  },
  satisfactionSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  satisfactionTitle: {
    fontSize: 20,
  },
  satisfactionScore: {
    marginLeft: 20,
    fontSize: 30,
    color: '#FBBA00',
  },
  enter: {
    position: 'absolute',
    right: 7,
    color: 'gray',
  },
  evaluationSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  evaluationTitleSec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  evaluationTitle: {
    fontSize: 20,
  },
  evaluation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  evaluationTextSec: {
    marginLeft: 20,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  evaluationText: {},
  reviewSec: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  reviewTitleSec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewTitle: {
    fontSize: 20,
  },
  review: {
    backgroundColor: '#FBBA00',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 8,
  },
  reviewUserImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'black',
    marginRight: 10,
  },
  reviewInform: {
    flexDirection: 'row',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.2,
    borderStyle: 'solid',
  },
  reviewUserNameText: {
    color: 'gray',
  },
  reviewTimeText: {
    marginLeft: 10,
    color: 'gray',
  },
  reviewText: {
    fontSize: 15,
  },

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Setting;
