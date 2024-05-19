import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from './box/box';
import {useTheme} from '../theme/theme';

export function Loading() {
  const {colors} = useTheme();
  return (
    <Box paddingVertical="space-24">
      <ActivityIndicator size="large" color={colors.blue} />
    </Box>
  );
}
