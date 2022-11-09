import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navScreen } from '~/screens/main/navigator/navScreen';
import { stackNav } from '~/navigations/main/navigator/stackNav';

const Nav = createStackNavigator();

const NavigatorNav = () => {
  return (
    <Nav.Navigator initialRouteName={navScreen.name}>
      <Nav.Group>
        <Nav.Screen
          name={navScreen.name}
          component={navScreen.component}
          options={navScreen.options}
        />

        <Nav.Screen
          name={stackNav.name}
          component={stackNav.component}
          options={stackNav.options}
        />
      </Nav.Group>
    </Nav.Navigator>
  );
};

export const navigatorNav = {
  name: 'navigationNav',
  component: NavigatorNav,
  options: {
    title: '앱 네비게이션',
  },
};
