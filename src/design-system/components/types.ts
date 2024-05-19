import React from 'react';
import {ViewProps} from 'react-native';
import {LayoutProps} from '@shopify/restyle';

import {RestyleBox} from './box/box';
import type * as Polymorphic from './box/polymorphic';
import {Spacing, Border, BorderRadius, Color} from '../restyle/types';
import {Theme} from '../theme';

export type PolymorphicBox = Polymorphic.ForwardRefComponent<
  typeof RestyleBox,
  BoxProps
>;

export interface BoxProps
  extends ViewProps,
    Spacing,
    Border,
    BorderRadius,
    Color,
    LayoutProps<Theme> {
  transparency?: number;
  children?: React.ReactNode;
}

export interface FlexProps extends PolymorphicBox {
  children?: React.ReactNode;
}
