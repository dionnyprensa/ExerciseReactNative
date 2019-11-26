import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';

const HomeScreen = () => {
  return (
    <MainContainer>
      <Title>Home</Title>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 5px;
`;
const Title = styled.Text`
  width: 30px;
`;

export default HomeScreen;
