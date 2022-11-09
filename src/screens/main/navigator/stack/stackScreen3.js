import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import cuid from 'cuid';
import { Button, Text } from 'react-native';
import { navScreen } from '~/screens/main/navigator/navScreen';

const StackScreen3 = ({ navigation }) => {
  const handleNavigate = useCallback(
    (name) => () => {
      navigation.navigate(name);
    },
    [navigation],
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Root>
      <RootInner>
        <Title>Stack Screen 3</Title>

        <NavigateButton
          title="Stack 네비게이션 나가기"
          onPress={handleNavigate(navScreen.name)}
        />

        <NavigateButton
          title="Stack 네비게이션 뒤로가기"
          onPress={handleGoBack}
        />
      </RootInner>
    </Root>
  );
};

const Root = styled.View`
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

export const stackScreen3 = {
  name: 'stackScreen3',
  component: StackScreen3,
  key: cuid(),
  options: {
    title: 'Stack3',
    headerShown: false,
  },
};
