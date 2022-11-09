import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { settingScreen } from '~/screens/main/settingScreen';
import { homeScreen } from '~/screens/main/homeScreen';
import { navigatorNav } from '~/navigations/main/navigator/navigatorNav';

const Nav = createDrawerNavigator();

const MainNav = () => {
  return (
    <Nav.Navigator initialRouteName={homeScreen.name}>
      <Nav.Group>
        <Nav.Screen
          name={homeScreen.name}
          component={homeScreen.component}
          options={homeScreen.options}
        />

        <Nav.Screen
          name={navigatorNav.name}
          component={navigatorNav.component}
          options={navigatorNav.options}
        />

        <Nav.Screen
          name={settingScreen.name}
          component={settingScreen.component}
          options={settingScreen.options}
        />
      </Nav.Group>
    </Nav.Navigator>
  );
};

export const mainNav = {
  name: 'mainNav',
  component: MainNav,
};
