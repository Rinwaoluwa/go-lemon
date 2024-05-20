import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppTheme} from '../../theme';
import {DismissKeyboard} from './dismiss-keyboard';

type LayoutProps = {
  children: React.ReactNode;
  layoutStyle?: {
    [key: string]: any;
  };
};

const Layout = ({children, layoutStyle}: LayoutProps) => {
  const theme = useAppTheme();

  return (
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: theme.colors.background,
          ...styles.container,
          ...layoutStyle,
        }}>
        {children}
      </View>
    </DismissKeyboard>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // paddingHorizontal: 20,
  },
});

export default Layout;
