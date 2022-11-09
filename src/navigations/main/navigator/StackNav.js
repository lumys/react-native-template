import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackScreen1 } from '~/screens/main/navigator/stack/StackScreen1';
import { stackScreen2 } from '~/screens/main/navigator/stack/StackScreen2';
import { stackScreen3 } from '~/screens/main/navigator/stack/StackScreen3';

const Nav = createStackNavigator();

const StackNav = () => {
  return (
    <Nav.Navigator initialRouteName={stackScreen1.name}>
      <Nav.Group>
        <Nav.Screen
          name={stackScreen1.name}
          component={stackScreen1.component}
          options={stackScreen1.options}
        />

        <Nav.Screen
          name={stackScreen2.name}
          component={stackScreen2.component}
          options={stackScreen2.options}
        />

        <Nav.Screen
          name={stackScreen3.name}
          component={stackScreen3.component}
          options={stackScreen3.options}
        />
      </Nav.Group>
    </Nav.Navigator>
  );
};

const stackNav = {
  name: 'stackNav',
  component: StackNav,
  options: {
    title: '기본 네비게이션',
    headerShown: false,
  },
};

export default stackNav;
