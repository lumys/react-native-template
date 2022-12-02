import React, { useMemo } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';
import Text from '~/components/atoms/Text';
import { getPaletteColor, PALETTE_TONE_TYPES } from '@styles/palette';

const ColorPaletteComponent = (props) => {
  const { color, palette } = props;

  const renderColorPalette = useMemo(() => {
    return Object.entries(palette).map(([key, value]) => {
      return <Color tone={key} palette={color} />;
    });
  }, [color, palette]);

  return <ColorWrap>{renderColorPalette}</ColorWrap>;
};

const Screen = () => {
  const theme = useTheme();
  const renderColorPalettes = useMemo(() => {
    const { palette } = theme;

    return Object.entries(palette).map(([key, value]) => {
      return (
        <ColorPaletteWrap>
          <Title>{`${key} color`}</Title>

          <ColorPaletteComponent color={key} palette={value} />
        </ColorPaletteWrap>
      );
    });
  }, [theme]);

  return <Root>{renderColorPalettes}</Root>;
};

const Root = styled(ScrollView)`
  background-color: white;
  display: flex;
  flex: 1;
  padding: 20px 10px;
`;

const ColorPaletteWrap = styled.View`
  padding: 10px 0;
`;

const Title = styled(Text)``;

const ColorWrap = styled.View`
  flex: 1;
  flex-direction: row;
  height: 40px;
  border-radius: 100px;
  border-width: 1px;
  border-color: darkgrey;
  margin-top: 10px;
  overflow: hidden;
`;

const Color = styled.View`
  background-color: ${getPaletteColor};
  border-color: black;
  border-width: ${({ tone }) =>
    tone === PALETTE_TONE_TYPES.TONE_40 ? '1px' : 0};
  flex: 1;
`;

export const colorOverviewScreen = {
  name: 'colorOverviewScreen',
  component: Screen,
  options: {
    title: 'Color Overview',
  },
};
