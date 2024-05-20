import {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {registerRootComponent} from 'expo';
import {StatusBar} from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/design-system/theme/theme-provider';
import AuthStack from './src/routes/AuthStack';
import MainAppStack from './src/routes/MainAppStack';
import {store} from './src/utils/redux/store';
import {useAppDispatch, useAppSelector} from './src/utils/redux/hooks';
import {storage} from './src/utils/localStorage';
import {setIsAuthenticated} from './src/utils/redux/slices/auth-tracker';
import {updateProfile} from './src/utils/redux/slices/profile';

SplashScreen.preventAutoHideAsync();

function Index() {
    const [appIsReady, setAppIsReady] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {

        async function prepare() {
            try {
              // Pre-load fonts.
              await Font.loadAsync({
                'IBMPlexSans-Medium': require('./assets/fonts/IBMPlexSans-Medium.ttf'),
                'IBMPlexSans-Regular': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
                'IBMPlexSans-SemiBold': require('./assets/fonts/IBMPlexSans-SemiBold.ttf'),
                'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
              });

              const isLoggedInUser = await isLoggedIn.get("isLoggedIn");
              if(isLoggedInUser) {
                  const email = await storage.get("email");
                  const firstName = await storage.get("firstName");
                  const lastName = await storage.get("lastName");
                  dispatch(setIsAuthenticated(true));
                  dispatch(updateProfile({email, firstName, lastName}));
                }

            } catch (e) {
              console.error(e);
            } finally {
              // Tell the application to render.
              setAppIsReady(true);
            }
        }
        prepare()
    },[])
    const {isAuthenticated} = useAppSelector((state) => state.authTracker)

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          // This tells the splash screen to hide immediately! If we call this after
          // `setAppIsReady`, then we may see a blank screen while the app is
          // loading its initial state and rendering its first pixels. So instead,
          // we hide the splash screen once we know the root view has already
          // performed layout.
          await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    
    if (!appIsReady) {
        return null;
    }


  return (
    <GestureHandlerRootView style={FLEX} onLayout={onLayoutRootView}>
        <View onLayout={onLayoutRootView} style={FLEX}>
            <StatusBar />
        <NavigationContainer>
            <ThemeProvider>
                { isAuthenticated ? <MainAppStack /> : <AuthStack /> }
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
