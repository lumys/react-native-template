import React from 'react';
import { Text, View } from 'react-native';
import cuid from 'cuid';

const SettingScreen = () => {
  return (
    <View>
      <Text>Setting Screen</Text>
    </View>
  );
};

export const settingScreen = {
  name: 'settingScreen',
  component: SettingScreen,
  key: cuid(),
  options: {
    title: 'Setting',
  },
};

export default SettingScreen;
