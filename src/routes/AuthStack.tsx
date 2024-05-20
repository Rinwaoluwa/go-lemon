import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Box } from '../design-system/components/box/box';
import { Text } from '../design-system/components/text';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import SignInWithEmailScreen from '../screens/SignInWithEmail';
import CreateAccountScreen from '../screens/CreateAccount';
import { useAppSelector } from '../utils/redux/hooks';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="SignInWithEmail" component={SignInWithEmailScreen} options={{
          headerTitle: ()=> (
            <Box backgroundColor="warm" height={120} width={"100%"} paddingTop={60} paddingHorizontal={8}>
                <Text color="blue" variant="heading-1">Sign In.</Text>
            </Box>
          ),
          headerBackVisible: false,
          }}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{
          headerTitle: ()=> (
            <Box backgroundColor="warm" height={120} width={"100%"} paddingTop={60} paddingHorizontal={8}>
                <Text color="blue" variant="heading-1">Create Account</Text>
            </Box>
          ),
          headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  };
  
  export default AuthStack;
