import {Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);

// dimension from design
// iphone X
const BASE_WIDTH = 360;
const BASE_HEIGHT = 800;

/**
 * getComputedWidth: get computed width of a component
 * @param dimension is the number of pixel for the component
 * @param width is the width of the design
 * @returns number the computed width
 */
export function getComputedWidth(dimension: number, width?: number): number {
  return widthPercentageToDP((dimension / (width ?? BASE_WIDTH)) * 100 + '%');
}

/**
 * getComputedHeight: get computed height of a component
 * @param dimension is the number of pixel for the component
 * @param height is the height of the design
 * @returns number the computed height
 */
export function getComputedHeight(dimension: number, height?: number): number {
  return heightPercentageToDP(
    (dimension / (height ?? BASE_HEIGHT)) * 100 + '%',
  );
}
