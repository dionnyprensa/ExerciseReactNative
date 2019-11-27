import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ScrollView} from "react-native";
import styled from "styled-components";
import TextInput from "../components/form/TextInput.form";
import ErrorInputRequired from "../components/form/ErrorInputRequired";
import ColorButton from "../components/form/ColorButton.form";
import ScreenTitle from "../components/screen/screenTitle";
import THEME from "../theme.style";
import {withNavigation} from "react-navigation";

const RegisterScreen = ({navigation}) => {
  const [userData, setUserData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    verifyPassword: null,
    defaultCompany: null
  });

  const [formError, setFormError] = useState({
    hasError: true,
    message: "Esto es un error del sistema"
  });

  function firstNameHandler(firstName) {
    setUserData({...userData, firstName});
    setFormError({hasError: false, message: ""});
  }

  function lastNameHandler(lastName) {
    setUserData({...userData, lastName});
    setFormError({hasError: false, message: ""});
  }

  function emailHandler(email) {
    setUserData({...userData, email});
    setFormError({hasError: false, message: ""});
  }

  function passwordHandler(password) {
    setUserData({...userData, password});
    setFormError({hasError: false, message: ""});
  }

  function verifyPasswordHandler(verifyPassword) {
    setUserData({...userData, verifyPassword});
    setFormError({hasError: false, message: ""});
  }

  function defaultCompanyHandler(defaultCompany) {
    setUserData({...userData, defaultCompany});
    setFormError({hasError: false, message: ""});
  }

  function loginButtonHandler() {
    navigation.navigate("Login");
  }

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
                  value: userData.firstName,
                  onChangeText: firstNameHandler,
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
                  value: userData.lastName,
                  onChangeText: lastNameHandler,
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
                  value: userData.verifyPassword,
                  onChangeText: verifyPasswordHandler,
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
                  placeholder: "Password",
                  textContentType: "password",
                  value: userData.verifyPassword,
                  onChangeText: passwordHandler,
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
                  value: userData.defaultCompany,
                  onChangeText: defaultCompanyHandler,
                  style: styles.inputText,
                  placeholderTextColor: THEME.COLOR_DARK_GRAY
                }}
              />
            </TextInputWrapper>
            <ButtonContainer>
              <ColorButton title="Start" />
              <ColorButton
                title="Login"
                style={styles.loginButton}
                onPress={loginButtonHandler}
              />
            </ButtonContainer>
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
