import theme from '../theme/theme';
import {Theme} from '../theme';

export type CustomSpace = {custom: number};
export type ThemeSpace = keyof Theme['spacing'];
export type Space = ThemeSpace | CustomSpace;

export function negateSpace(space: Space) {
  // responsive custom
  return typeof space === 'object'
    ? {custom: -space.custom}
    : -theme.spacing?.[space];
}
