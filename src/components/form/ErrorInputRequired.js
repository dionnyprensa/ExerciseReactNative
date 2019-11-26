import React from "react";
import styled from "styled-components";

export default function ErrorInputRequired({text}) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
}

const Container = styled.View`
  background: ${(props) => props.theme.PRIMARY_COLOR};
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.COLOR_LIGHT_GRAY};
  text-align: center;
`;
