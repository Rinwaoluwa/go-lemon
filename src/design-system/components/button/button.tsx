import React from 'react';
import {Box} from "../box/box";
import {Text} from "../text";
import {useTheme} from "../../theme";
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {useButtonVariants} from './button.variants';
import {ButtonProps} from './types';

export const Button = ({
  title,
  disabled,
  loading,
  onPress,
  alignSelf,
  variant = 'primary',
  style,
  textProps,
  backgroundColor,
  color = 'blue',
  ...props
}: ButtonProps) => {
  const {inner, outer} = useButtonVariants(disabled ? 'disabled' : variant);
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading}>
      <Box
        padding="space-16"
        marginVertical="space-8"
        backgroundColor="lemon"
        borderRadius={64}
        alignItems="center"
        alignSelf={alignSelf}
        paddingHorizontal={alignSelf ? 'space-24' : 'none'}
        paddingVertical={alignSelf ? 'space-8' : 'space-16'}
        style={[
          outer,
          style,
          !!backgroundColor ? {backgroundColor: colors?.[backgroundColor]} : {},
        ]}
        {...props}>
        {loading ? (
          <ActivityIndicator color={colors[color]} />
        ) : (
          <Text
            variant="subtext-medium"
            color={color}
            style={[inner, !!color ? {color: colors?.[color]} : {}]}
            {...textProps}>
            {title}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );
};
