const WEIGHT_100 = 100;
const WEIGHT_200 = 200;
const WEIGHT_300 = 300;
const WEIGHT_400 = 400;
const WEIGHT_500 = 500;
const WEIGHT_600 = 600;
const WEIGHT_700 = 700;
const WEIGHT_800 = 800;
const WEIGHT_900 = 900;

export const TEXT_WEIGHT_TYPES = {
  WEIGHT_100,
  WEIGHT_200,
  WEIGHT_300,
  WEIGHT_400,
  WEIGHT_500,
  WEIGHT_600,
  WEIGHT_700,
  WEIGHT_800,
  WEIGHT_900,
};

export const TEXT_WEIGHT_TYPE_LIST = [
  WEIGHT_100,
  WEIGHT_200,
  WEIGHT_300,
  WEIGHT_400,
  WEIGHT_500,
  WEIGHT_600,
  WEIGHT_700,
  WEIGHT_800,
  WEIGHT_900,
];

export const getFontWeightStyle = (props) => {
  return props.theme.text.font.weight[props.weight];
};

const text = {
  font: {
    weight: {
      [WEIGHT_100]: {
        fontFamily: 'Pretendard-Thin',
      },
      [WEIGHT_200]: {
        fontFamily: 'Pretendard-ExtraLight',
      },
      [WEIGHT_300]: {
        fontFamily: 'Pretendard-Light',
      },
      [WEIGHT_400]: {
        fontFamily: 'Pretendard-Regular',
      },
      [WEIGHT_500]: {
        fontFamily: 'Pretendard-Medium',
      },
      [WEIGHT_600]: {
        fontFamily: 'Pretendard-SemiBold',
      },
      [WEIGHT_700]: {
        fontFamily: 'Pretendard-Bold',
      },
      [WEIGHT_800]: {
        fontFamily: 'Pretendard-ExtraBold',
      },
      [WEIGHT_900]: {
        fontFamily: 'Pretendard-Black',
      },
    },
  },
};

export default text;
