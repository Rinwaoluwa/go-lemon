import React from 'react';
import {ThemeProvider as RestyleThemeProvider} from '@shopify/restyle';

import theme from './theme';

interface ThemeProviderProp {
  children: React.ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProp) {
  return <RestyleThemeProvider theme={theme} children={children} />;
}
