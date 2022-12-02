import React, { useMemo } from 'react';
import styled, { css } from 'styled-components/native';
import cuid from 'cuid';
import Button, { BUTTON_TYPE_LIST } from '~/components/atoms/Button';
import { ScrollView } from 'react-native';
import Text from '~/components/atoms/Text';
import { ICON_TYPES } from '~/components/atoms/Icon';

const icon = { type: ICON_TYPES.ANT_DESIGN, name: 'plus' };

const Screen = () => {
  const renderButtonOverviews = useMemo(() => {
    return BUTTON_TYPE_LIST.map((type) => {
      return (
        <ButtonStyleWrap key={`button-${cuid()}`}>
          <Title>{`${type} button`}</Title>

          <ButtonWrap horizontal>
            <StyledButton type={type} title="Enabled" />
            <StyledButton type={type} title="Disabled" disabled />
            <StyledButton type={type} title="With Icon" icon={icon} />
            <StyledButton type={type} title="With Icon" disabled icon={icon} />
          </ButtonWrap>
        </ButtonStyleWrap>
      );
    });
  }, []);

  return <Root>{renderButtonOverviews}</Root>;
};

const Root = styled(ScrollView)`
  background-color: #ffffff;
  display: flex;
  flex: 1;
  padding: 20px 10px;
`;

const ButtonStyleWrap = styled.View`
  padding: 20px 0;
`;

const Title = styled(Text)``;

const ButtonWrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px 5px;
`;

const StyledButton = styled(Button).attrs({
  containerStyle: css`
    margin-bottom: 10px;
    margin-right: 10px;
  `,
})``;

export const buttonOverviewScreen = {
  name: 'buttonOverviewScreen',
  component: Screen,
  options: {
    title: 'Button Overview',
  },
};
