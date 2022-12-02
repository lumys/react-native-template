import { parseToRgb, rgb, rgbToColorString } from 'polished';
import convert from 'color-convert';

const TONE_0 = 'tone-0';
const TONE_10 = 'tone-10';
const TONE_20 = 'tone-20';
const TONE_30 = 'tone-30';
const TONE_40 = 'tone-40';
const TONE_50 = 'tone-50';
const TONE_60 = 'tone-60';
const TONE_70 = 'tone-70';
const TONE_80 = 'tone-80';
const TONE_90 = 'tone-90';
const TONE_95 = 'tone-95';
const TONE_99 = 'tone-99';
const TONE_100 = 'tone-100';

export const PALETTE_TONE_TYPES = {
  TONE_0,
  TONE_10,
  TONE_20,
  TONE_30,
  TONE_40,
  TONE_50,
  TONE_60,
  TONE_70,
  TONE_80,
  TONE_90,
  TONE_95,
  TONE_99,
  TONE_100,
};

const TONE_STANDARD_VALUES = {
  [TONE_0]: { l: 0, c: 0, h: 1 },
  [TONE_10]: { l: 10, c: 0.4889, h: 1 },
  [TONE_20]: { l: 20, c: 0.8, h: 1 },
  [TONE_30]: { l: 30, c: 0.9778, h: 1 },
  [TONE_40]: { l: 40, c: 1, h: 1 },
  [TONE_50]: { l: 50, c: 1.0222, h: 1 },
  [TONE_60]: { l: 60, c: 1.0222, h: 1 },
  [TONE_70]: { l: 70, c: 1.0444, h: 1 },
  [TONE_80]: { l: 80, c: 1.0889, h: 1 },
  [TONE_90]: { l: 90, c: 1.0889, h: 1 },
  [TONE_95]: { l: 95, c: 0.9778, h: 1 },
  [TONE_99]: { l: 99, c: 0.2667, h: 1 },
  [TONE_100]: { l: 100, c: 0, h: 1 },
};

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const TERTIARY = 'tertiary';
const ERROR = 'error';
const NEUTRAL = 'neutral';
const NEUTRAL_VARIANT = 'neutral-variant';

export const PALETTE_TYPES = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  ERROR,
  NEUTRAL,
  NEUTRAL_VARIANT,
};

/**
 *  #000000  rgb(0 0 0)        hsl(0deg 0% 0%)       lch(0% 0 0deg)
 *  #042101  rgb(4 33 1)       hsl(113deg 97% 6%)    lch(10% 22 140deg)
 *  #0c3800  rgb(12 56 0)      hsl(107deg 100% 11%)  lch(20% 36 132deg)
 *  #205106  rgb(32 81 6)      hsl(100deg 85% 17%)   lch(30% 44 129deg)
 *  #386a20  rgb(55 106 32)    hsl(101deg 54% 27%)   lch(40% 45 130deg)
 *  #4e8235  rgb(78 130 53)    hsl(101deg 42% 36%)   lch(49% 46 130deg)
 *  #689d4d  rgb(104 157 77)   hsl(100deg 34% 46%)   lch(60% 46 130deg)
 *  #81b964  rgb(129 185 100)  hsl(100deg 38% 56%)   lch(70% 47 130deg)
 *  #9bd57b  rgb(155 213 123)  hsl(99deg 52% 66%)    lch(80% 49 130deg)
 *  #b6f397  rgb(181 243 150)  hsl(100deg 79% 77%)   lch(90% 49 130deg)
 *  #ceffae  rgb(206 255 174)  hsl(96deg 99% 84%)    lch(95% 44 128deg)
 *  #f6ffe5  rgb(246 255 229)  hsl(82deg 100% 95%)   lch(99% 12 120deg)
 *  #ffffff  rgb(255 255 255)  hsl(0deg 0% 100%)     lch(100% 0 157deg)
 */
const createToneColorPalettes = (color) => {
  const { red, green, blue } = parseToRgb(color);
  const lchColor = convert.rgb.lch([red, green, blue]);
  const palette = {};

  Object.entries(TONE_STANDARD_VALUES).forEach(([key, value]) => {
    const temp = [value.l, lchColor[1] * value.c, lchColor[2] * value.h];
    const rgbArray = convert.lch.rgb(temp);
    palette[key] = rgb(...rgbArray);
  });

  return palette;
};

export const getPaletteColor = (props) => {
  const { theme, tone = TONE_40, palette = PRIMARY } = props;
  return theme.palette[palette][tone];
};

const palette = {
  [PRIMARY]: createToneColorPalettes('#6750A4'),
  [SECONDARY]: createToneColorPalettes('#625B71'),
  [TERTIARY]: createToneColorPalettes('#7D5260'),
  [ERROR]: createToneColorPalettes('#B3261E'),
  [NEUTRAL]: createToneColorPalettes('#615d67'),
  [NEUTRAL_VARIANT]: createToneColorPalettes('#5f5d62'),
};

export default palette;
