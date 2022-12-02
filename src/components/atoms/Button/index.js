import React, { useCallback, useMemo, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import * as PropsTypes from 'prop-types';
import styled, { css } from 'styled-components/native';
import {
  getFontWeightStyle,
  TEXT_WEIGHT_TYPE_LIST,
  TEXT_WEIGHT_TYPES,
} from '@styles/text';
import { COLOR_TYPES } from '@styles/color';
import Text from '~/components/atoms/Text';
import Shadow, {
  ELEVATION_TYPE_LIST,
  ELEVATION_TYPES,
} from '~/components/atoms/Shadow';
import Icon, { ICON_TYPE_LIST } from '~/components/atoms/Icon';

const ELEVATED = 'elevated';
const FILLED = 'filled';
const FILLED_TONAL = 'filled-tonal';
const OUTLINE = 'outline';
const TEXT = 'text';

export const BUTTON_TYPE_LIST = [ELEVATED, FILLED, FILLED_TONAL, OUTLINE, TEXT];
export const BUTTON_TYPES = { ELEVATED, FILLED, FILLED_TONAL, OUTLINE, TEXT };

const Component = (props) => {
  const {
    elevation,
    type,
    weight,
    title,
    icon,
    titleStyle,
    buttonStyle,
    containerStyle,
    shadowStyle,
    disabled,
    onBlur,
    onFocus,
    onLayout,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
  } = props;
  const [isFocused, setFocused] = useState(false);
  const [isPressed, setPressed] = useState(false);

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur();
  }, [onBlur]);
  const handleFocus = useCallback(() => {
    setFocused(true);
    onFocus();
  }, [onFocus]);
  const handleLayout = useCallback(
    (e) => {
      onLayout(e);
    },
    [onLayout],
  );
  const handleLongPress = useCallback(
    (e) => {
      onLongPress(e);
    },
    [onLongPress],
  );
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);
  const handlePressIn = useCallback(() => {
    setPressed(true);
    onPressIn();
  }, [onPressIn]);
  const handlePressOut = useCallback(() => {
    setPressed(false);
    onPressOut();
  }, [onPressOut]);

  const buttonElevation = useMemo(() => {
    if (disabled) {
      return ELEVATION_TYPES.ELEVATION_0;
    }

    if (elevation === undefined) {
      return type === ELEVATED
        ? ELEVATION_TYPES.ELEVATION_1
        : ELEVATION_TYPES.ELEVATION_0;
    }

    return elevation;
  }, [disabled, elevation, type]);

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onLayout={handleLayout}
      onLongPres={handleLongPress}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <StyledContainer containerStyle={containerStyle}>
        <StyledShadow
          elevation={buttonElevation}
          shadowStyle={{ ...buttonStyle, ...shadowStyle }}>
          <StyledButton
            type={type}
            disabled={disabled}
            buttonStyle={buttonStyle}>
            <StyledStateLayer
              type={type}
              focused={isFocused}
              pressed={isPressed}
            />
            {icon ? (
              <StyledIcon buttonType={type} disabled={disabled} {...icon} />
            ) : null}
            <StyledTitle
              type={type}
              titleStyle={titleStyle}
              disabled={disabled}
              weight={weight}>
              {title}
            </StyledTitle>
          </StyledButton>
        </StyledShadow>
      </StyledContainer>
    </TouchableWithoutFeedback>
  );
};

Component.propTypes = {
  elevation: PropsTypes.oneOf(ELEVATION_TYPE_LIST),
  type: PropsTypes.oneOf(BUTTON_TYPE_LIST),
  weight: PropsTypes.oneOf(TEXT_WEIGHT_TYPE_LIST),
  title: PropsTypes.string,
  icon: PropsTypes.shape({
    type: PropsTypes.oneOf(ICON_TYPE_LIST).isRequired,
    name: PropsTypes.string.isRequired,
  }),
  titleStyle: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.shape({})]),
  buttonStyle: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.shape({})]),
  containerStyle: PropsTypes.oneOfType([
    PropsTypes.array,
    PropsTypes.shape({}),
  ]),
  shadowStyle: PropsTypes.oneOfType([
    PropsTypes.array,
    PropsTypes.shape({
      startColor: PropsTypes.string,
      endColor: PropsTypes.string,
      disabled: PropsTypes.bool,
      offset: PropsTypes.array,
      distance: PropsTypes.number,
    }),
  ]),
  disabled: PropsTypes.bool,
  onBlur: PropsTypes.func,
  onFocus: PropsTypes.func,
  onLayout: PropsTypes.func,
  onLongPress: PropsTypes.func,
  onPress: PropsTypes.func,
  onPressIn: PropsTypes.func,
  onPressOut: PropsTypes.func,
};

Component.defaultProps = {
  type: BUTTON_TYPES.FILLED,
  weight: TEXT_WEIGHT_TYPES.WEIGHT_600,
  onBlur: () => {},
  onFocus: () => {},
  onLayout: () => {},
  onLongPress: () => {},
  onPress: () => {},
  onPressIn: () => {},
  onPressOut: () => {},
};

const getButtonStyle = ({ theme, type, focused, disabled, buttonStyle }) => {
  switch (type) {
    case ELEVATED:
      return css`
        background-color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}1F`
          : theme.color[COLOR_TYPES.SURFACE]};
        ${buttonStyle};
      `;
    case FILLED:
      return css`
        background-color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}1F`
          : theme.color[COLOR_TYPES.PRIMARY]};
        ${buttonStyle};
      `;
    case FILLED_TONAL:
      return css`
        background-color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}1F`
          : theme.color[COLOR_TYPES.SECONDARY_CONTAINER]};
        ${buttonStyle};
      `;
    case OUTLINE:
      return css`
        border-color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}1F`
          : `${
              focused
                ? theme.color[COLOR_TYPES.PRIMARY]
                : theme.color[COLOR_TYPES.OUTLINE]
            }`};
        border-width: 1px;
        ${buttonStyle};
      `;
    case TEXT:
      return css`
        ${buttonStyle};
      `;
  }
};

const getStateLayerStyle = ({ theme, type, focused, pressed }) => {
  switch (type) {
    case ELEVATED:
      return css`
        background-color: ${theme.color[COLOR_TYPES.PRIMARY]};
        opacity: ${focused || pressed ? 0.12 : 0};
      `;
    case FILLED:
      return css`
        background-color: ${theme.color[COLOR_TYPES.ON_PRIMARY]};
        opacity: ${focused ? 0.12 : pressed ? 0.08 : 0};
      `;
    case FILLED_TONAL:
      return css`
        background-color: ${theme.color[COLOR_TYPES.ON_SECONDARY_CONTAINER]};
        opacity: ${focused || pressed ? 0.12 : 0};
      `;
    case OUTLINE:
      return css`
        background-color: ${theme.color[COLOR_TYPES.PRIMARY]};
        opacity: ${focused || pressed ? 0.12 : 0};
      `;
    case TEXT:
      return css`
        background-color: ${theme.color[COLOR_TYPES.PRIMARY]};
        opacity: ${focused || pressed ? 0.12 : 0};
      `;
  }
};

const getTitleStyle = ({ theme, type, disabled, titleStyle }) => {
  switch (type) {
    case ELEVATED:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.PRIMARY]};
        ${titleStyle};
      `;
    case FILLED:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.ON_PRIMARY]};
        ${titleStyle};
      `;
    case FILLED_TONAL:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.ON_SECONDARY_CONTAINER]};
        ${titleStyle};
      `;
    case OUTLINE:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.PRIMARY]};
        ${titleStyle};
      `;
    case TEXT:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.PRIMARY]};
        ${titleStyle};
      `;
  }
};

const getIconStyle = ({ theme, buttonType, disabled }) => {
  switch (buttonType) {
    case ELEVATED:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.PRIMARY]};
      `;
    case FILLED:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.ON_PRIMARY]};
      `;
    case FILLED_TONAL:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.ON_SECONDARY_CONTAINER]};
      `;
    case OUTLINE:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.PRIMARY]};
      `;
    case TEXT:
      return css`
        color: ${disabled
          ? `${theme.color[COLOR_TYPES.ON_SURFACE]}60`
          : theme.color[COLOR_TYPES.PRIMARY]};
      `;
  }
};

const StyledContainer = styled.View`
  ${({ containerStyle }) => containerStyle};
`;

const StyledShadow = styled(Shadow)`
  ${({ shadowStyle }) => shadowStyle};
  border-radius: 100px;
`;

const StyledButton = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 12.5px 16px;
  border-radius: 100px;
  ${getButtonStyle};
  margin: 0;
  overflow: hidden;
`;

const StyledStateLayer = styled(StyledButton)`
  ${getStateLayerStyle};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
`;

const StyledTitle = styled(Text)`
  padding: 0 8px;
  ${getFontWeightStyle};
  ${getTitleStyle};
`;

const StyledIcon = styled(Icon)`
  ${getIconStyle};
`;

export default Component;
