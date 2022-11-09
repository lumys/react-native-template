import React, { forwardRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import mainNav from '~/navigations/main/MainNav';

const Stack = createNativeStackNavigator();

const RootNav = forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={mainNav.name} component={mainNav.component} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default RootNav;
