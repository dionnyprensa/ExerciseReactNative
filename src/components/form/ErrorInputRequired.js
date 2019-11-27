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
  background: ${(props) => props.theme.COLOR_LIGHT_GRAY};
  padding: 10px;
  border: solid 1px ${(props) => props.theme.PRIMARY_COLOR};
  border-radius: 4px;
  margin: 10px 0;
`;

const Title = styled.Text`
  color: #BF3417;
  text-align: center;
  font-weight: bold
`;
