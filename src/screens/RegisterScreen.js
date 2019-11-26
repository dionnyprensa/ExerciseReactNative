import React, {useState} from "react";
import {SafeAreaView} from "react-native";
import styled from "styled-components";

const RegisterScreen = () => {
  const [userData, setUserDate] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    verify_password: null,
    default_company: null
  });
  return (
    <SafeAreaView>
      <MainContainer>
        <Title>Register</Title>
        <FormContainer>
          <Title>FormContainer</Title>
        </FormContainer>
      </MainContainer>
    </SafeAreaView>
  );
};

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 10px;
`;

const FormContainer = styled.View`
  margin: 0;
  padding: 0;
  flex: 1;
`;

const Title = styled.Text`
  width: 30px;
`;

const InputText = styled.Text`
  width
`;

export default RegisterScreen;
