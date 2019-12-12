import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ScreenTitle = ({
  id,
  email,
  displayname,
  firstname,
  lastname,
  lastvisit,
  registered,
  photo
}) => (
  <Container style={containerStyle}>
    <Title style={titleStyle}>{title}</Title>
  </Container>
);

ScreenTitle.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  displayname: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  lastvisit: PropTypes.string,
  registered: PropTypes.string,
  photo: PropTypes.string
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
