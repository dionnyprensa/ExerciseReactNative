/* eslint-disable no-console */
/* eslint-disable dot-location */
import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import styled from "styled-components";
import {users as getUsers} from "../services/usersServices";
import THEME from "../theme.style";
import UserInfoShort from "../components/home/userInfoShort";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  function loadUserData() {
    getUsers()
      .then((usersData) => usersData.data)
      .then((data) => setData(data))
      .catch((error) => {
        console.error("\nHome Error:");
        console.error(error, "\n");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);

    loadUserData();
  }, []);

  function _keyExtractor(item) {
    return item.id;
  }

  function _renderItem({item}) {
    return <UserInfoShort data={item} />;
  }

  function renderList() {
    return (
      <FlatList
        style={styles.flatList}
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
    <SafeAreaView style={styles.safeAreaView}>
      <MainContainer>
        {loading ? (
          <ActivityIndicator size="large" color={THEME.PRIMARY_COLOR} />
        ) : (
          renderList()
        )}
      </MainContainer>
    </SafeAreaView>
  );
  // #endregion Render Method
};

const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;
const Title = styled.Text`
  width: 30px;
`;

const styles = StyleSheet.create({
  safeAreaView: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
    // backgroundColor: THEME.PRIMARY_COLOR
  },
  flatList: {
    paddingTop: THEME.PADDING_SMALL,
    marginBottom: 30
  }
});

export default HomeScreen;
