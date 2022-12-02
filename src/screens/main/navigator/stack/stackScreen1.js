import React, { useCallback } from 'react';
import cuid from 'cuid';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { stackScreen2 } from '~/screens/main/navigator/stack/stackScreen2';

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
        <Title>Stack Screen 1</Title>

        <NavigateButton
          title="다음 Stack"
          onPress={handleNavigate(stackScreen2.name)}
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

export const stackScreen1 = {
  name: 'stackScreen1',
  component: Screen,
  key: cuid(),
  options: {
    title: 'Stack1',
    headerShown: false,
  },
};
