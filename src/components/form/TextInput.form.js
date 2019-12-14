/* eslint-disable react/prop-types */
import React, {useState} from "react";
import {StyleSheet} from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import THEME from "../../theme.style";

const TextInput = ({iconName, iconSize = 25, textProps, containerStyle}) => {
  const [colorFocus, setColorFocus] = useState({
    color: "rgba(31.0, 122.0, 140.0, 0.3)",
    focus: false
  });

  function onBlurHandler(event) {
    setColorFocus({color: "rgba(31.0, 122.0, 140.0, 0.3)", focus: false});
  }

  function onFocusHandler(event) {
    setColorFocus({color: "rgba(31.0, 122.0, 140.0, 1.0)", focus: true});
  }

  return (
    <Container style={containerStyle} isFocused={colorFocus.focus}>
      <Icon
        name={iconName}
        style={[Styles.iconsInput, colorFocus]}
        size={iconSize}
      />
      <TextInputField
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        allowFontScaling={true}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={THEME.COLOR_DARK_GRAY}
        selectionColor={THEME.PRIMARY_COLOR}
        underlineColorAndroid="transparent"
        {...textProps}
      />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: dashed 1px ${(props) => props.theme.COLOR_DARK_GRAY};
  border-radius: 4px;
  padding: 0px ${(props) => props.theme.PADDING_SMALL + "px"};
  margin: ${(props) => props.theme.MARGIN_SMALL + "px"} 0px;
  /* border: dashed 1px ${(props) => props.theme.PRIMARY_COLOR}; */
  border: solid 1px ${(props) =>
    props.isFocused
      ? props.theme.PRIMARY_COLOR
      : "rgba(31.0, 122.0, 140.0, 0.3)"};
  /* background: ${(props) => props.theme.COLOR_LIGHT_GRAY}; */
`;

const TextInputField = styled.TextInput`
  width: 200px;
  height: 45px;
  padding: 0px 5px;
  margin: 0px 0px 0px 5px;
  font-size: 14px;
`;

const Styles = StyleSheet.create({
  iconsInput: {
    color: "rgba(31.0, 122.0, 140.0, 0.3)"
    // color: THEME.COLOR_DARK_GRAY
  }
});

export default TextInput;
