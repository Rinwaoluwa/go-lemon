import {TextStyle, ViewStyle} from 'react-native';
import {useTheme} from '../../theme';

/**
 * The variations of screens.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'disabled';

/**
 * All the variations of screens.
 */
export function useButtonVariants(variant: ButtonVariant) {
  const {colors} = useTheme();
  const variants = {
    primary: {
      outer: {
        backgroundColor: colors.lemon,
      } as ViewStyle,
      inner: {
        color: colors.blue,
      } as TextStyle,
    },
    secondary: {
      outer: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grey2,
      } as ViewStyle,
      inner: {
        color: colors.blue,
      } as TextStyle,
    },
    disabled: {
      outer: {
        backgroundColor: colors.grey3,
      } as ViewStyle,
      inner: {
        color: colors.grey1,
      } as TextStyle,
    },
  };
  return variants[variant];
}
