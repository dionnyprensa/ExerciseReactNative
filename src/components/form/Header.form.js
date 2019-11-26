import React from "react";
import {StyleSheet} from "react-native";
import styled from "styled-components";
import THEME from "../theme.style";
import {
  withNavigation,
  StackActions,
  NavigationActions
} from "react-navigation";
import {TouchableWithoutFeedback, Platform} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Switch from "./form/Switch";

const arrowBack = Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back";

const resetAction = (resetTo) =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: resetTo})]
  });

const CustomSingleHeader = ({
  title,
  subTitle,
  navigation,
  type,
  goBack,
  resetTo,
  titleStyle,
  subTitleStyle,
  containerStyle,
  customAction,
  toggleValue,
  toggleText
}) => {
  function triggerGoBackAction() {
    navigation.goBack();
  }

  function triggerResetAction() {
    navigation.dispatch(resetAction(resetTo));
  }

  function triggerAddAction() {
    if (customAction) {
      customAction();
    } else {
      alert("Custom Action Triggered!");
    }
  }

  function triggerToggleAction() {
    if (customAction) {
      customAction(!toggleValue);
    } else {
      alert("Custom Action Triggered!");
    }
  }

  function renderCustomAction() {
    let _customAction = null;
    switch (type) {
    case "reset":
      _customAction = (
        <TouchableWithoutFeedback onPress={triggerResetAction}>
          <MCIcon name={"close"} size={34} color={THEME.COLOR_DARK_GRAY} />
        </TouchableWithoutFeedback>
      );
      break;
    case "add":
      _customAction = (
        <TouchableWithoutFeedback onPress={triggerAddAction}>
          <MCIcon
            name={"plus-circle-outline"}
            size={34}
            color={THEME.PRIMARY_COLOR}
          />
        </TouchableWithoutFeedback>
      );
      break;
    case "toggle":
      _customAction = (
        <Switch
          text={toggleText}
          onValueChange={triggerToggleAction}
          value={toggleValue}
          containerStyle={styles.switchButton}
          sizeIcon={35}
          colorOn={THEME.PRIMARY_COLOR}
          colorOff={THEME.COLOR_DARKER_GRAY}
          sizeText={THEME.FONT_SIZE_MEDIUM}
          colorText={THEME.COLOR_DARK_GRAY}
        />
      );
      break;
    default:
      _customAction = null;
      break;
    }
    return _customAction;
  }

  return (
    <Container style={[styles.container, containerStyle]}>
      {goBack && (
        <TouchableWithoutFeedback onPress={triggerGoBackAction}>
          <Icon name={arrowBack} size={34} color={THEME.COLOR_DARK_GRAY} />
        </TouchableWithoutFeedback>
      )}
      <TextContainer>
        <Title style={[titleStyle]}>{title}</Title>
        {subTitle && <SubTitle style={[subTitleStyle]}>{subTitle}</SubTitle>}
      </TextContainer>
      {renderCustomAction()}
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    // elevation: 1,
    shadowOpacity: 0.01,
    shadowOffset: {width: 0, height: 8}
  }
});

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 5px ${(props) => props.theme.PADDING_MEDIUM + 5 + "px"};
  margin-bottom: ${(props) => props.theme.MARGIN_MEDIUM + "px"};
  background-color: ${(props) => props.theme.COLOR_WHITE};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.COLOR_BLACK};
  font-weight: ${(props) => props.theme.FONT_WEIGHT_BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE_LARGE};
  font-family: ${(props) => props.theme.FONT_FAMILY_TITLE};
`;

const SubTitle = styled.Text`
  color: ${(props) => props.theme.COLOR_DARKER_GRAY};
  font-weight: ${(props) => props.theme.FONT_WEIGHT_MEDIUM};
  font-size: ${(props) => props.theme.FONT_SIZE_SMALL};
  font-family: ${(props) => props.theme.FONT_FAMILY_TITLE};
`;

const TextContainer = styled.View`
  /* flex: 1; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default withNavigation(CustomSingleHeader);
