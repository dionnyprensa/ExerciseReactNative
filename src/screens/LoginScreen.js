import React, {useState} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import styled from "styled-components";
import TextInput from "../components/form/TextInput.form";
import ErrorInputRequired from "../components/form/ErrorInputRequired";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({hasError: false, message: ""});

  function emailHandler() {
    setEmail(email);
    setFormError({hasError: false, message: ""});
  }
  function passwordHandler() {
    setPassword(password);
    setFormError({hasError: false, message: ""});
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MainContainer>
        <Title>Login</Title>
        <FormContainer>
          {formError.hasError && (
            <ErrorInputRequired text={formError.message} />
          )}
          <TextInputWrapper>
            <TextInput
              iconName="account-outline"
              value={email}
              onChangeText={emailHandler}
              placeholder="Email"
            />
          </TextInputWrapper>

          <TextInputWrapper>
            <TextInput
              iconName="lock"
              keyboardType="default"
              placeholder="Password"
              textContentType="password"
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={true}
            />
          </TextInputWrapper>
        </FormContainer>
      </MainContainer>
    </SafeAreaView>
  );
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

const Title = styled.Text`
  font-size: 20px;
  align-self: center;
  color: ${(props) => props.theme.COLOR_BLACK};
  font-weight: bold;
`;

const FormContainer = styled.View`
  margin: 0;
  padding: 0;
  align-self: center;
  flex-direction: column;
  flex-flow: column;
`;

const TextInputWrapper = styled.View`
  width: 70%;
  height: auto;
  margin: 2px;
  padding: 2px 0;
  flex-direction: row;
  flex-flow: row;
  justify-content: flex-start;
  align-content: center;
`;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    flexDirection: "column"
  }
});

export default LoginScreen;
