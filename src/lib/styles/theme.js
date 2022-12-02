import color from '@styles/color';
import text from '@styles/text';
import palette from '@styles/palette';

let theme;

export const setTheme = () => {
  theme = {
    dark: { color: color.dark, text, palette },
    light: { color: color.light, text, palette },
  };
};

export const getTheme = (mode = 'light') => {
  if (theme === undefined || theme === null) {
    setTheme();
  }

  return theme[mode];
};
