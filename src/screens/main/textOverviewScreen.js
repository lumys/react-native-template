import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Text from '~/components/atoms/Text';

const Screen = () => {
  const renderTexts = useMemo(() => {
    const list = [];

    for (let i = 1; i < 10; i++) {
      const weight = i * 100;

      const item = (
        <Box key={`keys-${i}`}>
          <Text weight={weight}>
            {`weight(${weight}) - 동해물과 백두산이 마르고 닳도록 하느님이
            보우하사`}
          </Text>
        </Box>
      );

      list.push(item);
    }

    return list;
  }, []);

  return <ScrollView>{renderTexts}</ScrollView>;
};

const Box = styled.View`
  margin: 10px;
`;

export const textOverviewScreen = {
  name: 'textOverviewScreen',
  component: Screen,
  options: {
    title: 'Text Overview',
  },
};
