import React from 'react';
import {ViewStyle} from 'react-native';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../constants';

interface PaginationItemProps {
  index: number;
  scrollX: SharedValue<number>;
}

export function PaginationItem({index, scrollX}: PaginationItemProps) {
  const inputRange = [
    (index - 1) * SCREEN_WIDTH,
    index * SCREEN_WIDTH,
    (index + 1) * SCREEN_WIDTH,
  ];

  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(scrollX.value, inputRange, [
        'rgba(216, 213, 192, 1)',
        'rgba(6, 29,	55, 1)',
        'rgba(216, 213, 192, 1)',
      ]),
    };
  });
  return <Animated.View style={[PAGINATION_BOX, style]} />;
}

const PAGINATION_BOX: ViewStyle = {
  flex: 1,
  height: 6,
  borderRadius: 2,
  marginRight: 4,
};
