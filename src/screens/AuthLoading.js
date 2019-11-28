import React, {useEffect, useContext} from "react";
import {ActivityIndicator, SafeAreaView, StatusBar} from "react-native";
import styled from "styled-components";
import THEME from "../theme.style";
import {MainContext} from "../ContextStore";
import {
  getUserData,
  clearUserData,
  getToken,
  clearToken
} from "../services/localStorage";
import AsyncStorage from "@react-native-community/async-storage";

export default ({navigation}) => {
  const [globalState, setGlobalState] = useContext(MainContext);

  useEffect(() => {
    const checkToken = async () => {
      await clearUserData();
      await clearToken();
      const userToken = await getToken();
      const userData = await getUserData();
      const goTo =
        userToken === null ||
        userToken === undefined ||
        userData === null ||
        userData === undefined
          ? "Auth"
          : "App";

      setGlobalState({userData});
      navigation.navigate(goTo);
    };
    checkToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <ActivityIndicator size="large" color={THEME.PRIMARY_COLOR} />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
