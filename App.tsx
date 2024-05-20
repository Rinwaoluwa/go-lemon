import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/onboarding/WelcomeScreen';
import {ThemeProvider} from './src/design-system/theme/theme-provider';
import SignInWithEmailScreen from './src/screens/SignInWithEmail';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <StatusBar
          backgroundColor="warm"
        />
        {/* <WelcomeScreen /> */}
        <SignInWithEmailScreen />
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
