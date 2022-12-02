import React from 'react';
import styled from 'styled-components/native';
import Text from '~/components/atoms/Text';

const Screen = () => {
  return (
    <Box>
      <Title>Home Screen</Title>
    </Box>
  );
};

const Box = styled.View`
  margin: 10px;
`;

const Title = styled(Text).attrs({
  h1: true,
})`
  padding: 20px 0;
`;

export const homeScreen = {
  name: 'homeScreen',
  component: Screen,
  options: {
    title: 'Home',
  },
};
