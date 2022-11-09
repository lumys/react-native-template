import React, { useCallback } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import cuid from 'cuid';
import { stackNav } from '~/navigations/main/navigator/stackNav';

const NavScreen = ({ navigation }) => {
  const handleNavigate = useCallback(
    (name) => () => {
      navigation.navigate(name);
    },
    [navigation],
  );

  return (
    <Root>
      <RootInner>
        <Title>Navigator</Title>

        <NavigateButton
          title="Stack 네비게이션 보기"
          onPress={handleNavigate(stackNav.name)}
        />
      </RootInner>
    </Root>
  );
};

const Root = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
`;

const RootInner = styled.View`
  padding: 40px 15px;
`;

const Title = styled(Text).attrs({
  h1: true,
})`
  padding: 20px 0;
`;

const NavigateButton = styled(Button).attrs({
  containerStyle: {
    marginBottom: 10,
  },
})``;

export const navScreen = {
  name: 'navScreen',
  component: NavScreen,
  key: cuid(),
  options: {
    headerShown: false,
  },
};
