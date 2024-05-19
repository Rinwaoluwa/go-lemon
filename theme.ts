import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#061D37',
    secondary: '#7C8B98',
    lightSilver: '#D1D8E0',
    brightGray: '#E6EBEF',
    background: '#FFFFFF',
    cultured: '#F7F6F0',
    white: '#FFFFFF',
    lemon: '#D3F36A',
    overlay: 'rgba(0, 0, 0, 0.64)',
    pastelGray: '#D8D5C0',
    darkCharcoal: '#333333',
  },
  fontFamily: {
    ibmMedium: 'IBMPlexSans-Medium',
    ibmRegular: 'IBMPlexSans-Regular',
    ibmBold: 'IBMPlexSans-SemiBold',
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
export default theme;
