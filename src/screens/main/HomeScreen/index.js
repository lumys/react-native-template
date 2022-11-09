import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export const homeScreen = {
  name: 'homeScreen',
  component: HomeScreen,
  options: {
    title: 'Home',
  },
};

export default HomeScreen;
