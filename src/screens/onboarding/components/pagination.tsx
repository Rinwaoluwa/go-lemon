import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import {Box} from '../../../design-system/components/box/box';
import {TITLES} from '../constants';
import {PaginationItem} from './pagination-item';

interface PaginationProps {
  scrollX: SharedValue<number>;
}

export function Pagination({scrollX}: PaginationProps) {
  return (
    <Box
      flex={1}
      flexDirection="row"
      marginHorizontal="space-16"
      position="absolute"
      bottom={24}>
      {TITLES.map((title, index) => {
        return <PaginationItem key={title} index={index} scrollX={scrollX} />;
      })}
    </Box>
  );
}
