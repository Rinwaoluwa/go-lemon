import {createText, TextProps as RETextProps} from '@shopify/restyle';
import React, {ElementRef, forwardRef, ReactNode} from 'react';
import {
  StyleProp,
  Text as NativeText,
  TextStyle,
} from 'react-native';
import {Theme} from '../theme/index';
import type * as Polymorphic from './types';

export type DefinedTextProps = {
  numberOfLines?: number;
  testID?: string;
  style?: StyleProp<TextStyle>;
} & (
  | {
      containsEmoji: true;
      children: string | (string | null)[];
    }
  | {containsEmoji?: false; children: ReactNode}
);

export type PolymorphicText = Polymorphic.ForwardRefComponent<
  typeof RestyleText,
  DefinedTextProps
>;
export type TextProps = RETextProps<Theme>;

export const RestyleText = createText<Theme>();

export const Text = forwardRef<
  ElementRef<typeof RestyleText | typeof NativeText>,
  DefinedTextProps
>(function Text(
  {
    numberOfLines,
    containsEmoji: containsEmojiProp = false,
    children,
    testID,
    style,
    ...props
  },
  ref,
) {
  return (
    <RestyleText
      allowFontScaling={true}
      numberOfLines={numberOfLines}
      ref={ref}
      style={style}
      testID={testID}
      {...props}
    >
      { children }
    </RestyleText>
  );
}) as PolymorphicText;
