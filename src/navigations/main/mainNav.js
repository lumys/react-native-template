import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { settingScreen } from '~/screens/main/settingScreen';
import { homeScreen } from '~/screens/main/homeScreen';
import { navigatorNav } from '~/navigations/main/navigator/navigatorNav';
import { textOverviewScreen } from '~/screens/main/textOverviewScreen';
import { buttonOverviewScreen } from '~/screens/main/buttonOverviewScreen';
import { colorOverviewScreen } from '~/screens/main/colorOverviewScreen';

const Nav = createDrawerNavigator();

const Navigator = () => {
  return (
    <Nav.Navigator initialRouteName={homeScreen.name}>
      <Nav.Group>
        <Nav.Screen
          name={homeScreen.name}
          component={homeScreen.component}
          options={homeScreen.options}
        />

        <Nav.Screen
          name={colorOverviewScreen.name}
          component={colorOverviewScreen.component}
          options={colorOverviewScreen.options}
        />

        <Nav.Screen
          name={navigatorNav.name}
          component={navigatorNav.component}
          options={navigatorNav.options}
        />

        <Nav.Screen
          name={textOverviewScreen.name}
          component={textOverviewScreen.component}
          options={textOverviewScreen.options}
        />

        <Nav.Screen
          name={buttonOverviewScreen.name}
          component={buttonOverviewScreen.component}
          options={buttonOverviewScreen.options}
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
  component: Navigator,
};
