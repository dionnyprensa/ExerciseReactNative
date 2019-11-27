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
import {MainProvider} from "./src/ContextStore";

const App = () => (
  <ThemeProvider theme={THEME}>
    <MainProvider>
      <AppNavigation />
    </MainProvider>
  </ThemeProvider>
);

export default App;
