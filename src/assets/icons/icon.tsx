import React from 'react';

import {ICONS, IconProps} from './types';
// import {getComputedHeight, getComputedWidth} from 'src/design-system';

export default function Icon({name, size = 24, style, ...props}: IconProps) {
  const IconImplementation = ICONS[name];
  return IconImplementation ? (
    <IconImplementation
      width={25}
      height={25}
      {...props}
      style={style}
    />
  ) : null;
}
