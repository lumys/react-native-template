import React from 'react';
import { View } from 'react-native';
import cuid from 'cuid';
import Text from '~/components/atoms/Text';

const Screen = () => {
  return (
    <View>
      <Text>Setting Screen</Text>
    </View>
  );
};

export const settingScreen = {
  name: 'settingScreen',
  component: Screen,
  key: cuid(),
  options: {
    title: 'Setting',
  },
};
