/* eslint-disable react/prop-types */
/* eslint-disable dot-location */
import React, {useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import styled from "styled-components";
import TextInput from "../components/form/TextInput.form";
import ErrorInputRequired from "../components/form/ErrorInputRequired";
import ColorButton from "../components/form/ColorButton.form";
import ScreenTitle from "../components/screen/screenTitle";
import THEME from "../theme.style";
import {withNavigation} from "react-navigation";
import {registerService} from "../services/authServices";
import {saveToken, saveUserData} from "../services/localStorage";

const RegisterScreen = ({navigation}) => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    verify_password: "",
    default_company: ""
  });

  const [loading, setLoading] = useState(false);

  const [formError, setFormError] = useState({
    hasError: false,
    message: "Esto es un error del sistema"
  });

  // #region Properties Handlers
  function firstnameHandler(firstname) {
    setUserData({...userData, firstname});
  }

  function lastnameHandler(lastname) {
    setUserData({...userData, lastname});
  }

  function emailHandler(email) {
    setUserData({...userData, email});
  }

  function passwordHandler(password) {
    setUserData({...userData, password});
  }

  function verifyPasswordHandler(verify_password) {
    setUserData({...userData, verify_password});
  }

  function defaultCompanyHandler(default_company) {
    setUserData({...userData, default_company});
  }
  // #endregion Properties Handlers

  function validateForm() {
    let _notValid = false;

    const validations = Object.keys(userData).map((key) => {
      const property = userData[key];
      if (property === null || property === undefined) {
        _notValid = true;
        if (key.includes("_")) {
          let [first, second] = key.split("_");
          second = second.slice(0, 1).toUpperCase() + second.slice(1);
          key = first + second;
        }

        return `The field ${key} is required`;
      }
      return "";
    });

    if (userData.password !== userData.verify_password) {
      _notValid = true;
      validations.push("The passwords must match");
    }

    const message = validations.filter((v) => v !== "").join("\n");

    setFormError({hasError: _notValid, message});

    return !_notValid;
  }

  // #region Handler Methods
  function loginButtonHandler() {
    navigation.navigate("Login");
  }

  function registerButtonHandler() {
    setLoading(true);
    let _formValid = validateForm();

    if (!_formValid) {
      setLoading(false);
      return;
    }

    registerService(userData)
      .then((response) => ({session: response.data.session, user: response.data.user}))
      .then((userData) => {
        const {session, user} = userData;
        saveUserData(JSON.stringify(user));
        return session.token;
      })
      .then((token) => saveToken(JSON.stringify(token)))
      .then(() => navigation.navigate("App"))
      .catch((error) => {
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <MainContainer>
          <ScreenTitle
            title="Register"
            containerStyle={styles.headerContainer}
            titleStyle={styles.headerText}
          />
          <FormContainer>
            {formError.hasError && (
              <ErrorInputRequired text={formError.message} />
            )}
            <TextInputWrapper>
              <TextInput
                iconName="account-outline"
                textProps={{
                  autoFocus: true,
                  value: userData.firstname,
                  onChangeText: firstnameHandler,
                  placeholder: "First Name",
                  style: styles.inputText,
                  placeholderTextColor: THEME.COLOR_DARK_GRAY
                }}
              />
            </TextInputWrapper>
            <TextInputWrapper>
              <TextInput
                iconName="account-multiple-outline"
                textProps={{
                  value: userData.lastname,
                  onChangeText: lastnameHandler,
                  placeholder: "Last Name",
                  style: styles.inputText,
                  placeholderTextColor: THEME.COLOR_DARK_GRAY
                }}
              />
            </TextInputWrapper>
            <TextInputWrapper>
              <TextInput
                iconName="email-outline"
                textProps={{
                  value: userData.email,
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
                  value: userData.password,
                  onChangeText: passwordHandler,
                  secureTextEntry: true,
                  style: styles.inputText,
                  placeholderTextColor: THEME.COLOR_DARK_GRAY
                }}
              />
            </TextInputWrapper>

            <TextInputWrapper>
              <TextInput
                iconName="lock-reset"
                textProps={{
                  keyboardType: "default",
                  placeholder: "Verify Password",
                  textContentType: "password",
                  value: userData.verify_password,
                  onChangeText: verifyPasswordHandler,
                  secureTextEntry: true,
                  style: styles.inputText,
                  placeholderTextColor: THEME.COLOR_DARK_GRAY
                }}
              />
            </TextInputWrapper>
            <TextInputWrapper>
              <TextInput
                iconName="office-building"
                textProps={{
                  keyboardType: "default",
                  placeholder: "Company",
                  value: userData.default_company,
                  onChangeText: defaultCompanyHandler,
                  style: styles.inputText,
                  placeholderTextColor: THEME.COLOR_DARK_GRAY
                }}
              />
            </TextInputWrapper>
            {loading ? (
              <ActivityIndicator size="large" color={THEME.PRIMARY_COLOR} />
            ) : (
              <ButtonContainer>
                <ColorButton title="Start" onPress={registerButtonHandler} />
                <ColorButton
                  title="Login"
                  style={styles.loginButton}
                  onPress={loginButtonHandler}
                />
              </ButtonContainer>
            )}
          </FormContainer>
        </MainContainer>
      </ScrollView>
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
  loginButton: {
    backgroundColor: THEME.COLOR_DARK_GRAY
  }
});

export default withNavigation(RegisterScreen);
