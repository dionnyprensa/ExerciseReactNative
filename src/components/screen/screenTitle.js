import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ScreenTitle = ({title, containerStyle, titleStyle}) => (
  <Container style={containerStyle}>
    <Title style={titleStyle}>{title}</Title>
  </Container>
);

ScreenTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  containerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  subTitleStyle: PropTypes.object
};

const Container = styled.View`
  background-color: ${(props) => props.theme.COLOR_WHITE};
  align-self: center;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.COLOR_BLACK};
  font-weight: bold;
  font-size: ${(props) => props.theme.FONT_SIZE_LARGE};
`;

export default ScreenTitle;
