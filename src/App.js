/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigationContainerRef } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import RootNav from '~/navigations/RootNav';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Main />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const Main: () => Node = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <>
      <RootNav ref={navigationRef} />
    </>
  );
};

export default App;
