import {useCallback} from 'react';
import {registerRootComponent} from 'expo';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {View, ViewStyle} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/design-system/theme/theme-provider';
import theme from './theme';
import AuthStack from './src/routes/AuthStack';
import MainAppStack from './src/routes/MainAppStack';
import WelcomeScreen from './src/screens/onboarding/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();
export default function App() {
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

    const auth = true;
  return (
    <GestureHandlerRootView style={FLEX} onLayout={onLayoutRootView}>
        <View onLayout={onLayoutRootView} style={FLEX}>
        <NavigationContainer >
            <ThemeProvider>
                {auth ? <AuthStack /> : <MainAppStack />}
            </ThemeProvider>
        </NavigationContainer>
        </View>
    </GestureHandlerRootView>
  );
}

const FLEX: ViewStyle = {flex: 1};

registerRootComponent(App);
