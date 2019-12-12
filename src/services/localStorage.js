/* eslint-disable no-console */
/* eslint-disable dot-location */
import AsyncStorage from "@react-native-community/async-storage";

// #region Token Methods
export async function getToken() {
  return AsyncStorage.getItem("@user:token");
}

export async function saveToken(token) {
  // clearToken().then(() => {
  //   AsyncStorage.setItem("@user:token", JSON.stringify(token), (error) => {
  //     if (error) console.log(error);
  //   });
  // });
  return AsyncStorage.setItem("@user:token", JSON.stringify(token));
}

export async function clearToken() {
  return AsyncStorage.removeItem("@user:token");
}

export async function getRefreshToken() {
  return AsyncStorage.getItem("@user:refreshToken");
}

export async function saveRefreshToken(token) {
  // clearRefreshToken().then(() => {
  //   AsyncStorage.setItem("@user:refreshToken", JSON.stringify(token), (error) => {
  //     if (error) console.log(error);
  //   });
  // });

  return AsyncStorage.setItem(
    "@user:refreshToken",
    JSON.stringify(token),
    (error) => {
      if (error) console.log(error);
    }
  );
}

export async function clearRefreshToken() {
  return AsyncStorage.removeItem("@user:refreshToken");
}

// #endregion Token Methods

// #region UserData Methods
export async function getUserData() {
  return AsyncStorage.getItem("@user:data");
}

export async function saveUserData(userData) {
  return clearUserData().then(() => {
    AsyncStorage.setItem("@user:data", JSON.stringify(userData));
  });
}

export async function clearUserData() {
  return AsyncStorage.removeItem("@user:data");
}
// #endregion UserData Methods
