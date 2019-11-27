import React, {useState} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import styled from "styled-components";
import TextInput from "../components/form/TextInput.form";
import ErrorInputRequired from "../components/form/ErrorInputRequired";
import ColorButton from "../components/form/ColorButton.form";
import ScreenTitle from "../components/screen/screenTitle";
import THEME from "../theme.style";
import {withNavigation} from "react-navigation";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({hasError: false, message: ""});

  // #region Handler Methods
  function emailHandler(_email) {
    setEmail(_email);
    setFormError({hasError: false, message: ""});
  }

  function passwordHandler(_password) {
    setPassword(_password);
    setFormError({hasError: false, message: ""});
  }

  function registerButtonHandler() {
    navigation.navigate("Register");
  }

  function submitForm() {
    if (!email || !password) {
      setFormError({hasError: true, message: "all fields must be filled"});
      return;
    }
    setFormError({hasError: false, message: ""});
    // McTekkService.Login({email, password})
    //   .then(async ({data: {mobileLogin}}) => {
    //     if (mobileLogin.user) {
    //       let token = mobileLogin.user.token;
    //       let userId = mobileLogin.user._id;
    //       await AsyncStorage.setItem("@user:id", userId);
    //       AsyncStorage.setItem("@user:token", token).then(() => {
    //         setGlobalState({userId});
    //         navigation.navigate("App");
    //       });
    //     }
    //   })
    //   .catch((err) => console.log(err));
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
          <ButtonContainer>
            <ColorButton title="Start" />
            <ColorButton
              title="Register"
              style={styles.registerButton}
              onPress={registerButtonHandler}
            />
          </ButtonContainer>
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
