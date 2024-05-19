import {BoxProps} from '../types';
import {TextProps} from '../text';
import {Color} from '../../theme';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ButtonVariant} from './button.variants';

export interface ButtonProps extends Omit<BoxProps, 'backgroundColor'> {
  title: string | React.ReactNode;
  disabled?: boolean;
  onPress?: Noop;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
  textProps?: Omit<TextProps, 'color'>;
  backgroundColor?: Color;
  color?: Color;
}
