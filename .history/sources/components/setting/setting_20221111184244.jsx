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
            <Text>받은 리뷰</Text>
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
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  evaluationTitleSec: {
    flexDirection: 'row',
    alignItems: 'center',
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

  backBtn: {
    position: 'absolute',
    left: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
  },
});

export default Setting;
