// @ts-nocheck
import {createRestyleFunction} from '@shopify/restyle';
import {
  BORDER_COLOR_PROPERTIES,
  BORDER_PROPERTIES,
  BORDER_RADIUS_PROPERTIES,
  SPACING_PROPERTIES,
  TEXT_SHADOW_PROPERTIES,
  TYPOGRAPHY_PROPERTIES,
} from './constants';
import {transformFunction} from './helpers';

export const transparency = createRestyleFunction({
  property: 'transparency',
  styleProperty: 'opacity',
  themeKey: undefined,
  transform: ({value}: {value: number}) => 1 - value,
});

export const spacing = Object.keys(SPACING_PROPERTIES).map(function (property) {
  return createRestyleFunction({
    property: property,
    themeKey: 'spacing',
    transform: transformFunction(property),
  });
});

export const border = [
  ...Object.keys(BORDER_PROPERTIES).map(function (property) {
    return createRestyleFunction({
      property: property,
      transform: transformFunction(property),
    });
  }),
  ...Object.keys(BORDER_RADIUS_PROPERTIES).map(function (property) {
    return createRestyleFunction({
      property: property,
      themeKey: 'borderRadii',
      transform: transformFunction(property),
    });
  }),
  ...Object.keys(BORDER_COLOR_PROPERTIES).map(function (property) {
    return createRestyleFunction({
      property: property,
      themeKey: 'colors',
      transform: transformFunction(),
    });
  }),
];

export const backgroundColor = createRestyleFunction({
  property: 'backgroundColor',
  themeKey: 'colors',
  transform: transformFunction(),
});

export const color = createRestyleFunction({
  property: 'color',
  themeKey: 'colors',
  transform: transformFunction(),
});

export const visible = createRestyleFunction({
  property: 'visible',
  styleProperty: 'display',
  transform: ({value}) => (value === false ? 'none' : 'flex'),
});

export const typography = Object.keys(TYPOGRAPHY_PROPERTIES).map(property => {
  return createRestyleFunction({
    property,
    transform: transformFunction(property),
  });
});

export const textShadow = [
  ...Object.keys(TEXT_SHADOW_PROPERTIES).map(property => {
    return createRestyleFunction({
      property,
      transform: transformFunction(property),
    });
  }),
  createRestyleFunction({
    property: 'textShadowColor',
    themeKey: 'colors',
  }),
];
