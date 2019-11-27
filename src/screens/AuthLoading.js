import React, {useEffect, useContext} from "react";
import {ActivityIndicator, SafeAreaView, StatusBar} from "react-native";
import styled from "styled-components";
import THEME from "../theme.style";
import {MainContext} from "../ContextStore";
import AsyncStorage from "@react-native-community/async-storage";

export default ({navigation}) => {
  const [globalState, setGlobalState] = useContext(MainContext);

  useEffect(() => {
    const checkToken = async () => {
      await AsyncStorage.removeItem("@user:token", () => {});
      await AsyncStorage.removeItem("@user:id", () => {});
      const userToken = await AsyncStorage.getItem("@user:token");
      const userId = await AsyncStorage.getItem("@user:id");
      const goTo =
        userToken === null ||
        userToken === undefined ||
        userId === null ||
        userId === undefined
          ? "Auth"
          : "App";

      setGlobalState({userId});
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
