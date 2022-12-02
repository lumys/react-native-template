import React, { useCallback } from 'react';
import cuid from 'cuid';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { stackScreen3 } from '~/screens/main/navigator/stack/stackScreen3';

const Screen = ({ navigation }) => {
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
        <Title>Stack Screen 2</Title>

        <NavigateButton
          title="다음 Stack"
          onPress={handleNavigate(stackScreen3.name)}
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

export const stackScreen2 = {
  name: 'stackScreen2',
  component: Screen,
  key: cuid(),
  options: {
    title: 'Stack2',
    headerShown: false,
  },
};
