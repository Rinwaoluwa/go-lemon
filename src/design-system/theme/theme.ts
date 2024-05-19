import {createTheme, useTheme as UseTheme} from '@shopify/restyle';
import {TextStyle} from 'react-native';
import {fonts} from './fonts';
import {palette} from './palette';
import {getComputedHeight, getComputedWidth} from '../layout/responsive';

function buildTextStyle(fontSize = 16, lineHeight = 16, style?: TextStyle) {
  return {
    fontFamily: fonts.family.ibmRegular,
    fontWeight: '400',
    color: 'primary',
    fontSize: getComputedWidth(fontSize),
    lineHeight: getComputedHeight(lineHeight),
    ...style,
  };
}

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    ...palette,
  },
  spacing: {
    none: 0,
    'space-2': 4,
    'space-4': 4,
    'space-8': 8,
    'space-12': 12,
    'space-16': 16,
    'space-20': 20,
    'space-24': 24,
    'space-32': 32,
    'space-40': 40,
    'space-48': 48,
    'space-64': 64,
    'space-80': 80,
    'space-96': 96,
  },
  borderRadii: {
    none: 0,
    'space-4': 4,
    'space-8': 8,
    'space-12': 12,
    'space-16': 16,
    'space-20': 20,
    'space-24': 24,
    'space-32': 32,
    'space-40': 40,
    'space-48': 48,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: buildTextStyle(16, 24),
    'heading-1': buildTextStyle(32, 40, {
      fontFamily: fonts.family.jakartaBold,
      fontWeight: '600',
    }),
    'heading-2': buildTextStyle(24, 34, {
      fontFamily: fonts.family.jakartaBold,
      fontWeight: '500',
    }),
    'heading-3': buildTextStyle(20, 28, {
      fontFamily: fonts.family.jakartaBold,
      fontWeight: '500',
    }),
    'body-semibold': buildTextStyle(16, 24, {
      fontWeight: '600',
      fontFamily: fonts.family.ibmBold,
    }),
    'body-medium': buildTextStyle(16, 24, {
      fontFamily: fonts.family.ibmMedium,
      fontWeight: '500',
    }),
    'subtext-regular': buildTextStyle(14, 21),
    'subtext-medium': buildTextStyle(14, 21, {
      fontWeight: '500',
      fontFamily: fonts.family.ibmMedium,
    }),
    'caption-regular': buildTextStyle(12, 16),
    'caption-medium': buildTextStyle(12, 16, {
      fontWeight: '500',
      fontFamily: fonts.family.ibmMedium,
    }),
  },
});

export type Theme = typeof theme;
export type ThemeKey = keyof typeof theme;
export type Color = keyof Theme['colors'];

// export this useTheme so our app is oblivious to the theme library
export function useTheme() {
  return UseTheme<Theme>();
}
export default theme;
