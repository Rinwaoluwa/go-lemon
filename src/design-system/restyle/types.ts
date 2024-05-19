import {TypographyProps} from '@shopify/restyle';

import {Theme, ThemeKey} from '../theme';
import {
  BORDER_COLOR_PROPERTIES,
  BORDER_PROPERTIES,
  BORDER_RADIUS_PROPERTIES,
  SPACING_PROPERTIES,
  TEXT_SHADOW_PROPERTIES,
} from './constants';

export interface TransformThemeFunction {
  value: number | {custom: number};
  theme: Theme;
  themeKey: ThemeKey;
}
export declare const getKeys: <T>(object: T) => (keyof T)[];

export type CustomSpace = {custom: number};
export type CustomColor = {custom: string};
export type ThemeSpace = keyof Theme['spacing'];
export type Space = ThemeSpace | CustomSpace;

type SpacingKeys = keyof typeof SPACING_PROPERTIES;
type BorderKeys = keyof typeof BORDER_PROPERTIES;

export type SpacingValue<Value = number | CustomSpace> = ResponsiveValue<
  ThemeSpace | Value
>;

export type Spacing = Partial<Record<SpacingKeys, SpacingValue>>;
export type Border = Partial<Record<BorderKeys, SpacingValue>>;
export type BorderRadius = Partial<
  Record<keyof typeof BORDER_RADIUS_PROPERTIES, SpacingValue>
>;
export type TextShadow = Partial<
  Record<keyof typeof TEXT_SHADOW_PROPERTIES, SpacingValue>
>;
export type Typography = TypographyProps<Theme>;
export type Color = Partial<
  Record<
    keyof typeof BORDER_COLOR_PROPERTIES | 'backgroundColor',
    ResponsiveValue<keyof Theme['colors'] | CustomColor>
  >
>;

export declare type AtLeastOneResponsiveValue<
  Value,
  ITheme extends Theme,
  B = ITheme['breakpoints'],
  R = {
    [Key in keyof B]: Record<Key, Value>;
  },
> = Partial<{
  [K in keyof B]: Value;
}> &
  R[keyof R];
export declare type ResponsiveValue<Value> =
  | Value
  | AtLeastOneResponsiveValue<Value, Theme>;
