import {Text, TextProps} from '../text';
import React from 'react';
import {Linking, TextStyle, TouchableWithoutFeedback} from 'react-native';

interface LinkButtonProps {
  title: string;
  url?: string;
  onPress?: Noop;
  style?: TextStyle;
  textProps?: TextProps;
  disabled?: boolean;
}

export function LinkButton({
  title,
  url,
  onPress,
  style,
  textProps,
  disabled,
}: LinkButtonProps) {
  const handleClick = () => {
    if (url) {
      Linking.openURL(url);
    } else {
      onPress?.();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => handleClick()} disabled={disabled}>
      <Text
        textDecorationLine="underline"
        variant="body-medium"
        color={disabled ? 'grey1' : undefined}
        style={style}
        {...textProps}>
        {title}
      </Text>
    </TouchableWithoutFeedback>
  );
}
