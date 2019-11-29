/* eslint-disable dot-location */
import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ActivityIndicator} from "react-native";
import styled from "styled-components";
import TextInput from "../components/form/TextInput.form";
import ErrorInputRequired from "../components/form/ErrorInputRequired";
import ColorButton from "../components/form/ColorButton.form";
import ScreenTitle from "../components/screen/screenTitle";
import THEME from "../theme.style";
import {withNavigation} from "react-navigation";
import {loginService} from "../services/authServices";
import {
  saveUserData,
  saveToken,
  saveRefreshToken
} from "../services/localStorage";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("d2@prensa.com");
  const [password, setPassword] = useState("Aa123456");
  const [formError, setFormError] = useState({hasError: false, message: ""});
  const [loading, setLoading] = useState(false);

  // #region Handler Methods
  function emailHandler(_email) {
    setEmail(_email);
    setFormError({hasError: false, message: ""});
  }

  function passwordHandler(_password) {
    setPassword(_password);
    setFormError({hasError: false, message: ""});
  }

  function validateForm() {
    let _isValid = true;

    if (
      email === null ||
      email === undefined ||
      password === null ||
      password === undefined
    ) {
      _isValid = false;
      setFormError({hasError: true, message: "all fields must be filled"});
    } else {
      setFormError({hasError: false, message: ""});
    }

    return _isValid;
  }

  function registerButtonHandler() {
    navigation.navigate("Register");
  }

  function loginButtonHandler() {
    setLoading(true);
    let _formValid = validateForm();

    if (!_formValid) {
      setLoading(false);
      return;
    }

    loginService({email, password})
      .then((response) => JSON.stringify(response.data))
      .then((userData) => {
        setLoading(false);
        const {token, refresh_token} = userData;
        saveUserData(JSON.stringify({email, password}));
        saveToken(token);
        saveRefreshToken(refresh_token);
      })
      .then(() => navigation.navigate("App"))
      .catch((error) => {
        console.error("\nLogin Error:");
        console.error(error);
        console.error("");
        setFormError({hasError: true, message: error});
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // #endregion Handler Methods

  // #region Render Method
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MainContainer>
        <ScreenTitle
          title="Login"
          containerStyle={styles.headerContainer}
          titleStyle={styles.headerText}
        />
        <FormContainer>
          {formError.hasError && (
            <ErrorInputRequired text={formError.message} />
          )}
          <TextInputWrapper>
            <TextInput
              iconName="email-outline"
              textProps={{
                autoFocus: true,
                value: email,
                onChangeText: emailHandler,
                placeholder: "Email",
                style: styles.inputText,
                placeholderTextColor: THEME.COLOR_DARK_GRAY
              }}
            />
          </TextInputWrapper>

          <TextInputWrapper>
            <TextInput
              iconName="lock-outline"
              textProps={{
                keyboardType: "default",
                placeholder: "Password",
                textContentType: "password",
                value: password,
                onChangeText: passwordHandler,
                secureTextEntry: true,
                style: styles.inputText,
                placeholderTextColor: THEME.COLOR_DARK_GRAY
              }}
            />
          </TextInputWrapper>
          {loading ? (
            <ActivityIndicator size="large" color={THEME.PRIMARY_COLOR} />
          ) : (
            <ButtonContainer>
              <ColorButton title="Start" onPress={loginButtonHandler} />
              <ColorButton
                title="Register"
                style={styles.registerButton}
                onPress={registerButtonHandler}
              />
            </ButtonContainer>
          )}
        </FormContainer>
      </MainContainer>
    </SafeAreaView>
  );
  // #endregion Render Method
};

const MainContainer = styled.View`
  /* flex: 1; */
  width: 100%;
  height: 100%;
  margin: 0 5px;
  flex-direction: column;
  flex-flow: column;
  justify-content: center;
  align-content: center;
`;

const FormContainer = styled.View`
  /* flex: 1; */
  margin: 0;
  padding: 0;
  align-self: center;
  flex-direction: column;
  flex-flow: column;
`;

const TextInputWrapper = styled.View`
  width: 70%;
  height: auto;
  flex-direction: row;
  flex-flow: row;
  justify-content: flex-start;
  align-content: center;
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  /* align-content: space-between; */
  /* justify-content: space-between; */
  align-items: center;
  align-self: center;
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
    backgroundColor: "transparent"
  },
  headerText: {
    color: THEME.PRIMARY_COLOR,
    fontSize: 32,
    fontWeight: "bold"
  },
  inputText: {
    color: THEME.COLOR_DARKER_GRAY
  },
  registerButton: {
    backgroundColor: THEME.COLOR_DARK_GRAY
  }
});

export default withNavigation(LoginScreen);
