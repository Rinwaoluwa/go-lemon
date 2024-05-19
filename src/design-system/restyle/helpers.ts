import {getComputedHeight, getComputedWidth} from '../layout/responsive';
import {TransformThemeFunction} from './types';
import isNumber from 'lodash';

export function resolveToken<TokenName extends number, TokenValue, CustomValue>(
  scale: Record<TokenName, TokenValue>,
  value: TokenName | {custom: CustomValue} | undefined,
) {
  if (typeof value === 'number') {
    return value;
  }
  const returnValue = value
    ? typeof value === 'object'
      ? value.custom
      : scale[value]
    : undefined;

  return returnValue;
}

export function pureTransformFunction({
  value,
  theme,
  themeKey,
}: TransformThemeFunction) {
  const scale = theme?.[themeKey] ?? {};
  return resolveToken(scale, value);
}

const verticalResponsiveValues = ['height', 'top', 'bottom', 'vertical'];

const horizontalResponsiveValues = [
  'width',
  'fontsize',
  'left',
  'right',
  'horizontal',
];

export function checkIfAllowed(array: string[], property: string) {
  return array
    .map(key => String(property).toLocaleLowerCase().includes(key))
    .some(allowed => allowed);
}

export function transformFunction(property?: string) {
  return ({value, theme, themeKey}: TransformThemeFunction) => {
    if (!property || property === undefined) {
      return pureTransformFunction({value, theme, themeKey});
    }
    // we don't need to worry about the dimensional value as restyle takes care of that for us
    const result = resolveToken(theme?.[themeKey] ?? {}, value);
    if (checkIfAllowed(verticalResponsiveValues, property)) {
      if (result && isNumber(result)) {
        return getComputedHeight(result);
      }
    }
    if (checkIfAllowed(horizontalResponsiveValues, property)) {
      if (result && isNumber(result)) {
        return getComputedWidth(result);
      }
    }
    return result;
  };
}
