import React, {useState} from "react";
import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import FastImage from "react-native-fast-image";

const UserInfoShort = (props) => {
  const {
    lastvisit,
    firstname,
    lastname,
    email,
    displayname,
    timezone,
    registered,
    sex,
    dob,
    user_active,
    updated_at
  } = props.data;
  const [clicked, setClicked] = useState(false);

  function onPressHandler() {
    setClicked(!clicked);
  }

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <Container>
        <ImageContainer>
          <FastImage
            source={{
              uri: "https://i.pravatar.cc/100"
            }}
            style={styles.mainPicture}
          />
        </ImageContainer>

        <TextContainer>
          <Title>{firstname + " " + lastname}</Title>
          <SubTitle>Last Visit at: {lastvisit}</SubTitle>
          <SubTitle>Registered at: {registered}</SubTitle>
          <SubTitle>Updated at: {updated_at}</SubTitle>
          {clicked && (
            <DetailLinkContainer>
              <TitleDetail>Display Name: {displayname}</TitleDetail>
              <TitleDetail>Email: {email}</TitleDetail>
              <TitleDetail>Sex: {sex}</TitleDetail>
              <TitleDetail>Timezone: {timezone}</TitleDetail>
              <TitleDetail>Dob: {dob}</TitleDetail>
              <TitleDetail>Active: {user_active}</TitleDetail>
            </DetailLinkContainer>
          )}
        </TextContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

UserInfoShort.propTypes = {
  displayname: PropTypes.string,
  lastvisit: PropTypes.string,
  photo: PropTypes.string
};

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-self: flex-start;
  width: 100%;
  background-color: ${(props) => props.theme.COLOR_WHITE};
  border: solid 2px ${(props) => props.theme.PRIMARY_COLOR};
  padding: 5px;
  border-radius: 20px;
`;

const Separator = styled.View`
  border-radius: 100px;
  width: 3px;
  margin: 0 5px;
  height: 100%;
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
`;

const ImageContainer = styled.View`
  /* background-color: #232323; */
  align-self: center;
  margin: 0 10px 0 0;
`;

const TextContainer = styled.View`
  /* height: 50%; */
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
`;
const DetailLinkContainer = styled.View`
  /* margin: 5px 0 0 15px; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.COLOR_BLACK};
  font-weight: bold;
  font-size: ${(props) => props.theme.FONT_SIZE_LARGE};
`;

const TitleDetail = styled.Text`
  color: ${(props) => props.theme.COLOR_DARKER_GRAY};

  font-size: ${(props) => props.theme.FONT_SIZE_SMALL};
`;

const SubTitle = styled.Text`
  color: ${(props) => props.theme.COLOR_DARKER_GRAY};

  font-size: ${(props) => props.theme.FONT_SIZE_SMALL};
`;

const styles = StyleSheet.create({
  mainPicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center"
  }
});
export default UserInfoShort;
