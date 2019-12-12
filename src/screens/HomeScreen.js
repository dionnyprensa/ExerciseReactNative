/* eslint-disable no-console */
/* eslint-disable dot-location */
import React, {useState, useEffect} from "react";
import {SafeAreaView, FlatList, ActivityIndicator} from "react-native";
import styled from "styled-components";
import {users as getUsers} from "../services/usersServices";
import THEME from "../theme.style";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  function loadUserData() {
    return getUsers()
      .catch((e) => console.log("y klk", e))
      .then((response) => response.data)
      .then((usersData) => {
        console.log(usersData);
        return setData(JSON.stringify(usersData));
      })
      .catch((error) => {
        console.error("\nHome Error:");
        console.error(error, "\n");
      })
      .finally(() => {
        console.log("use Effect finalizó?");
        setLoading(false);
      });
  }

  useEffect(() => {
    console.log("use Effect empezó");
    // setLoading(true);

    loadUserData();
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
    <SafeAreaView>
      <MainContainer>
        {loading ? (
          <ActivityIndicator size="large" color={THEME.PRIMARY_COLOR} />
        ) : (
          <Title>data</Title>
        )}
      </MainContainer>
    </SafeAreaView>
  );
  // #endregion Render Method
};

const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  margin: 0 5px;
`;
const Title = styled.Text`
  width: 30px;
`;

export default HomeScreen;
