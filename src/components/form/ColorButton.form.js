import React from "react";
import styled from "styled-components";
import {withNavigation} from "react-navigation";

const ColorButton = ({title, textStyle, ...props}) => (
  <ColorButtonStyled {...props}>
    <TextColorButton style={textStyle}>{title}</TextColorButton>
  </ColorButtonStyled>
);

const ColorButtonStyled = styled.TouchableOpacity`
  /* flex: 1; */
  width: 34%;
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
  border-radius: 10;
  padding: 5px;
  margin: 2px;
  align-items: center;
  
`;

const TextColorButton = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.COLOR_WHITE};
  font-weight: ${(props) => props.theme.FONT_WEIGHT_BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE_LARGE};
`;

export default withNavigation(ColorButton);
