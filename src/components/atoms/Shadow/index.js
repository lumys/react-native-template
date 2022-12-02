import React from 'react';
import * as PropsTypes from 'prop-types';
import { Shadow } from 'react-native-shadow-2';
import styled from 'styled-components/native';
import { COLOR_TYPES } from '@styles/color';

const ELEVATION_0 = 0;
const ELEVATION_1 = 1;
const ELEVATION_2 = 2;
const ELEVATION_3 = 3;
const ELEVATION_4 = 4;
const ELEVATION_5 = 5;

export const ELEVATION_TYPES = {
  ELEVATION_0,
  ELEVATION_1,
  ELEVATION_2,
  ELEVATION_3,
  ELEVATION_4,
  ELEVATION_5,
};

export const ELEVATION_TYPE_LIST = [
  ELEVATION_0,
  ELEVATION_1,
  ELEVATION_2,
  ELEVATION_3,
  ELEVATION_4,
  ELEVATION_5,
];

const Component = (props) => {
  return <StyledShadow {...props} />;
};

Component.propTypes = {
  elevation: PropsTypes.oneOf(ELEVATION_TYPE_LIST),
  startColor: PropsTypes.string,
  endColor: PropsTypes.string,
  disabled: PropsTypes.bool,
  offset: PropsTypes.array,
  distance: PropsTypes.number,
};

Component.defaultProps = {
  elevation: ELEVATION_TYPES.ELEVATION_1,
};

const commonShadowStyle = ({ theme }) => ({
  startColor: `${theme.color[COLOR_TYPES.SHADOW]}2`,
});

const getStyle = (props) => {
  return {
    [ELEVATION_0]: {
      ...commonShadowStyle(props),
      disabled: true,
    },
    [ELEVATION_1]: {
      ...commonShadowStyle(props),
      offset: [0, 1],
      distance: 2,
    },
    [ELEVATION_2]: {
      ...commonShadowStyle(props),
      offset: [0, 2],
      distance: 3,
    },
    [ELEVATION_3]: {
      ...commonShadowStyle(props),
      offset: [0, 4],
      distance: 4,
    },
    [ELEVATION_4]: {
      ...commonShadowStyle(props),
      offset: [0, 5],
      distance: 5,
    },
    [ELEVATION_5]: {
      ...commonShadowStyle(props),
      offset: [0, 6],
      distance: 6,
    },
  };
};

const StyledShadow = styled(Shadow).attrs((props) => {
  const { elevation } = props;
  return { ...getStyle(props)[elevation], ...props };
})``;

export default Component;
