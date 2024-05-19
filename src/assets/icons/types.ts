import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import alert from './svg/alert.svg';
import arrowRight from './svg/arrow-right.svg';
import bell from './svg/bell.svg';
import bus from './svg/bus.svg';
import checkBlack from './svg/check-black.svg';
import check from './svg/check.svg';
import chevronDown from './svg/chevron-down.svg';
import clock from './svg/clock.svg';
import creditCard from './svg/credit-card.svg';
import deliveryInstructions from './svg/delivery-instructions.svg';
import edit from './svg/edit.svg';
import fileText from './svg/file-text.svg';
import filterBlack from './svg/filter-black.svg';
import filterWhite from './svg/filter-white.svg';
import history from './svg/history.svg';
import listActive from './svg/list-active.svg';
import list from './svg/list.svg';
import mapPin from './svg/map-pin.svg';
import mastercard from './svg/mastercard.svg';
import minus from './svg/minus.svg';
import orderActive from './svg/order-active.svg';
import order from './svg/order.svg';
import plus from './svg/plus.svg';
import refreshCcw from './svg/refresh-ccw.svg';
import refresh from './svg/refresh.svg';
import search from './svg/search.svg';
import shoppingCart from './svg/shopping-cart.svg';
import time from './svg/time.svg';
import trash2 from './svg/trash-2.svg';
import trash from './svg/trash.svg';
import unreadBell from './svg/unread-bell.svg';
import userActive from './svg/user-active.svg';
import user from './svg/user.svg';
import visa from './svg/visa.svg';

export const ICONS = {
  alert: alert,
  'arrow-right': arrowRight,
  bell: bell,
  bus: bus,
  'check-black': checkBlack,
  check: check,
  'chevron-down': chevronDown,
  clock: clock,
  'credit-card': creditCard,
  'delivery-instructions': deliveryInstructions,
  edit: edit,
  'file-text': fileText,
  'filter-black': filterBlack,
  'filter-white': filterWhite,
  history: history,
  'list-active': listActive,
  list: list,
  'map-pin': mapPin,
  mastercard: mastercard,
  minus: minus,
  'order-active': orderActive,
  order: order,
  plus: plus,
  'refresh-ccw': refreshCcw,
  refresh: refresh,
  search: search,
  'shopping-cart': shoppingCart,
  time: time,
  'trash-2': trash2,
  trash: trash,
  'unread-bell': unreadBell,
  'user-active': userActive,
  user: user,
  visa: visa,
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  style?: StyleProp<ViewStyle>;
  iconColor?: string;
  stroke?: string;
  iconOpacity?: number;
  strokeWidth?: number;
  focused?: boolean;
}

export type Props = IconProps;
