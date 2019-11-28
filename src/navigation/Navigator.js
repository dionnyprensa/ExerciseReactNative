import React from "react";
import {View} from "react-native";
import {createSwitchNavigator} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";

import Icon from "react-native-vector-icons/MaterialCommunityIcons"; import THEME from "../theme.style";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthLoading from "../screens/AuthLoading";

const shiftingConfig = {
  activeTintColor: THEME.PRIMARY_COLOR,
  inactiveTintColor: THEME.COLOR_DARKER_GRAY,
  showLabel: false,
  style: {
    borderTopWidth: 0,
    elevation: 18,
    shadowOpacity: 0.02,
    shadowOffset: {width: 0, height: -8},
    height: 60
  }
};

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    LogOut: RegisterScreen
  },
  {
    initialRouteName: "Register",
    // headerMode: "screen"
    headerMode: "none"
  }
);

const HomeStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: HomeScreen
  },
  {
    initialRouteName: "Home",
    tabBarOptions: shiftingConfig,
    defaultNavigationOptions: ({navigation}) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch (routeName) {
        case "Home":
          iconName = "home-outline";
          break;
        case "Settings":
          iconName = "settings-outline";
          break;
        }

        return (
          <View
            style={{
              backgroundColor: focused ? "#e3e3e3" : "transparent",
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20
            }}
          >
            <Icon name={iconName} size={22} color={tintColor} />
          </View>
        );
      }
    })
  }
);

export default createSwitchNavigator(
  {
    App: HomeStack,
    Auth: AuthStack,
    AuthLoading
  },
  {
    initialRouteName: "AuthLoading"
  }
);
