/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import AppNavigation from "./src/navigation";
import {ThemeProvider} from "styled-components";
import THEME from "./src/theme.style";

const App = () => (
  <ThemeProvider theme={THEME}>
    <AppNavigation />
  </ThemeProvider>
);

export default App;
