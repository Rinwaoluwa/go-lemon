import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import SignInWithEmailScreen from '../screens/SignInWithEmail';
import CreateAccountScreen from '../screens/CreateAccount';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="SignInWithEmail" component={SignInWithEmailScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    );
  };
  
  export default AuthStack;
