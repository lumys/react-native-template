import React from 'react';
import { Text } from 'react-native';
import * as PropsTypes from 'prop-types';
import styled from 'styled-components/native';
import { getFontWeightStyle, TEXT_WEIGHT_TYPE_LIST } from '@styles/text';

const Component = (props) => {
  return <StyledText {...props} />;
};

Component.propTypes = {
  weight: PropsTypes.oneOf(TEXT_WEIGHT_TYPE_LIST),
};

Component.defaultProps = {};

const style = (props) => {
  return {
    color: 'black',
  };
};

const StyledText = styled(Text)`
  ${style};
  ${getFontWeightStyle};
`;

export default Component;
