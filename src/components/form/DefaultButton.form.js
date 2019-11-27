/* eslint-disable react/jsx-no-bind */
import React from "react";
import {Platform, TouchableOpacity} from "react-native";
import styled from "styled-components";
import THEME from "../../theme.style";
import {withNavigation} from "react-navigation";

const DefaultButton = ({
  title,
  navigation,
  goTo,
  goBackAvailable,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    onPress={() =>
      goBackAvailable ? navigation.goBack() : navigation.push(goTo)
    }
  >
    <TextDefaultButton>{title}</TextDefaultButton>
  </TouchableOpacity>
);

const TextDefaultButton = styled.Text`
  text-align: center;
  font-size: ${
  Platform.OS === "ios" ? THEME.FONT_SIZE_MEDIUM : THEME.FONT_SIZE_SMALL
};
  color: ${(props) => props.theme.COLOR_DARK_GRAY};
  /* font-weight: ${(props) => props.theme.FONT_WEIGHT_BOLD}; */
  font-size: ${(props) => props.theme.FONT_SIZE_MEDIUM};
`;

export default withNavigation(DefaultButton);
