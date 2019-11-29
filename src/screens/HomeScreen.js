/* eslint-disable dot-location */
import React, {useState, useEffect} from "react";
import {SafeAreaView, FlatList, ActivityIndicator} from "react-native";
import styled from "styled-components";
import {users as getUsers} from "../services/usersServices";
import THEME from "../theme.style";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((response) => JSON.stringify(response.data))
      .then((usersData) => {
        setData(usersData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("\nLogin Error:");
        console.error(error);
        console.error("");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function _keyExtractor(item) {
    return item.id;
  }
  function _renderItem({item}) {
    return;
  }

  function renderList() {
    return (
      <FlatList
        style={{
          paddingTop: THEME.PADDING_SMALL,
          marginBottom: 30
        }}
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />
    );
  }
  // #region Render Method
  return (
    <MainContainer>
      {loading ? (
        <ActivityIndicator size="large" color={THEME.PRIMARY_COLOR} />
      ) : (
        <Title>{data}</Title>
      )}
    </MainContainer>
  );
  // #endregion Render Method
};

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 5px;
`;
const Title = styled.Text`
  width: 30px;
`;

export default HomeScreen;
