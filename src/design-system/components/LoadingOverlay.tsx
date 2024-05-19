import {StyleSheet, View, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';

const LoadingOverlay = () => {
  const theme = useAppTheme();
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.backdrop}}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
