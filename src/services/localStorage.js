import AsyncStorage from "@react-native-community/async-storage";

// #region Token Methods
export async function getToken() {
  AsyncStorage.getItem("@user:token");
}

export async function saveToken(token) {
  AsyncStorage.setItem("@user:token", token);
}

export async function clearToken() {
  AsyncStorage.removeItem("@user:token");
}
// #endregion Token Methods

// #region UserData Methods
export async function getUserData() {
  return AsyncStorage.getItem("@user:data");
}

export async function saveUserData(userData) {
  AsyncStorage.setItem("@user:data", userData);
}

export async function clearUserData() {
  AsyncStorage.removeItem("@user:data").catch((error) => console.log(error));
}
// #endregion UserData Methods
