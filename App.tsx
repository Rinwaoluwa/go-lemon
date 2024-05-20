import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/onboarding/WelcomeScreen';
import {ThemeProvider} from './src/design-system/theme/theme-provider';
import SignInWithEmailScreen from './src/screens/SignInWithEmail';
import CreateAccountScreen from './src/screens/CreateAccount';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <StatusBar
          backgroundColor="warm"
        />
        {/* <WelcomeScreen /> */}
        {/* <SignInWithEmailScreen /> */}
        {/* <CreateAccountScreen /> */}
        <ProfileScreen />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
