import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLogin = async () => {
  try {
    const loginDatas = await AsyncStorage.getItem('loginDatas');
    console.log(loginDatas);
    if (loginDatas) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(e);
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('loginDatas');
  } catch (error) {
    console.error(error);
  }
};

export const getRefreshToken = async () => {
  try {
    const loginDatas = await AsyncStorage.getItem('loginDatas');
    if (loginDatas) {
      return JSON.parse(loginDatas).refreshToken;
    }
  } catch (e) {
    console.error(e);
  }
};

export const getUid = async () => {
  try {
    const loginDatas = await AsyncStorage.getItem('loginDatas');
    if (loginDatas) {
      return JSON.parse(loginDatas).uid;
    }
  } catch (e) {
    console.error(e);
  }
};

export const matchUserData = async (setUserData) => {
  try {
    const loginDatas = await AsyncStorage.getItem('loginDatas');
    if (loginDatas) {
      return setUserData(JSON.parse(loginDatas));
    }
  } catch (e) {
    console.error(e);
  }
};
