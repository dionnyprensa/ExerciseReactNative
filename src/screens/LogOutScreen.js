/* eslint-disable no-console */
/* eslint-disable dot-location */
import React, {useState, Fragment} from "react";
import {SafeAreaView, StyleSheet, ActivityIndicator} from "react-native";
import styled from "styled-components";
import TextInput from "../components/form/TextInput.form";
import ErrorInputRequired from "../components/form/ErrorInputRequired";
import ColorButton from "../components/form/ColorButton.form";
import ScreenTitle from "../components/screen/screenTitle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import THEME from "../theme.style";
import {withNavigation} from "react-navigation";
import {
  clearToken,
  clearRefreshToken,
  clearUserData
} from "../services/localStorage";

const LogOutScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  // #region Handler Methods
  function logOutButtonHandler() {
    setLoading(true);
    clearToken()
      .then(() => clearRefreshToken())
      .then(() => clearUserData())
      .then(() => {
        setLoading(false);
        navigation.navigate("Auth");
      })
      .catch((error) => {
        console.error("\nLogout error:");
        console.error(error);
        console.error("Logout error\n");
      });
  }

  // #endregion Handler Methods

  // #region Render Method
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MainContainer>
        <ScreenTitle
          title="LogOut"
          containerStyle={styles.headerContainer}
          titleStyle={styles.headerText}
        />
        {loading ? (
          <ActivityIndicator size="large" color={THEME.PRIMARY_COLOR} />
        ) : (
          <Fragment>
            <ColorButton title="Logout" onPress={logOutButtonHandler}>
              <Icon name="exit-to-app" color={THEME.COLOR_WHITE} size={30} />
            </ColorButton>
          </Fragment>
        )}
      </MainContainer>
    </SafeAreaView>
  );
  // #endregion Render Method
};

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 5px;
  flex-direction: column;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
    // backgroundColor: THEME.PRIMARY_COLOR
  },
  headerContainer: {
    backgroundColor: "transparent",
    marginBottom: 30
  },
  headerText: {
    color: THEME.PRIMARY_COLOR,
    fontSize: 32,
    fontWeight: "bold"
  }
});

export default withNavigation(LogOutScreen);
