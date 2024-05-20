import {useCallback} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {registerRootComponent} from 'expo';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/design-system/theme/theme-provider';
import AuthStack from './src/routes/AuthStack';
import MainAppStack from './src/routes/MainAppStack';
import {store} from './src/utils/redux/store';
import {useAppSelector} from './src/utils/redux/hooks';

SplashScreen.preventAutoHideAsync();
function Index() {
    const {isAuthenticated} = useAppSelector((state) => state.authTracker.isAuthenticated)

    const [fontsLoaded, fontError] = useFonts({
        'ibmMedium': require('./assets/fonts/IBMPlexSans-Medium.ttf'),
        'ibmRegular': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
        'ibmBold': require('./assets/fonts/IBMPlexSans-SemiBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

  return (
    <GestureHandlerRootView style={FLEX} onLayout={onLayoutRootView}>
        <View onLayout={onLayoutRootView} style={FLEX}>
            <StatusBar />
        <NavigationContainer>
            <ThemeProvider>
                {isAuthenticated ? <MainAppStack /> : <AuthStack />}
            </ThemeProvider>
        </NavigationContainer>
        </View>
    </GestureHandlerRootView>
  );
}

const FLEX = {flex: 1};

export default  function App() {
    return (
        <Provider store={store}>
            <Index/>
        </Provider>
    )
}

registerRootComponent(App);
