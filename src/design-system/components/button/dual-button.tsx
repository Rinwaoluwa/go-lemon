import React from 'react';
import {Box} from '../box/box';
import {Button} from './button';
import {ButtonProps} from './types';
import {BoxProps} from '../types';

export interface DualButtonProps extends BoxProps {
  firstButton?: ButtonProps;
  secondButton?: ButtonProps;
}

export function DualButton({
  firstButton,
  secondButton,
  ...props
}: DualButtonProps) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      marginBottom="space-16"
      {...props}>
      <Box flex={1}>
        <Button
          title="Back"
          variant="secondary"
          marginRight="space-4"
          {...firstButton}
        />
      </Box>
      <Box flex={1}>
        <Button
          title="Done"
          marginLeft="space-4"
          variant="primary"
          {...secondButton}
        />
      </Box>
    </Box>
  );
}
