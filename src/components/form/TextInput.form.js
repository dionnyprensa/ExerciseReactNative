import React from "react";
import {StyleSheet} from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import THEME from "../../theme.style";

const TextInput = ({iconName, iconSize = 25, textProps, containerStyle}) => (
  <Container style={containerStyle}>
    <Icon name={iconName} style={Styles.iconsInput} size={iconSize} />
    <TextInputField
      {...textProps}
      allowFontScaling={true}
      autoCapitalize="none"
      autoCorrect={false}
      placeholderTextColor={THEME.COLOR_DARK_GRAY}
      selectionColor={THEME.PRIMARY_COLOR}
      underlineColorAndroid="transparent"
    />
  </Container>
);

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: dashed 1px ${(props) => props.theme.COLOR_DARK_GRAY};
  border-radius: 4px;
  padding: 0px ${(props) => props.theme.PADDING_SMALL + "px"};
  margin: ${(props) => props.theme.MARGIN_SMALL + "px"} 0px;
`;

const TextInputField = styled.TextInput`
  width: 200px;
  height: 45px;
  padding: 0px 5px;
  margin: 0px 0px 0px 5px;
`;

const Styles = StyleSheet.create({
  iconsInput: {
    color: THEME.COLOR_DARK_GRAY
  }
});

export default TextInput;
