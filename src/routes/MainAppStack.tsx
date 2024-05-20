import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import ListScreen from '../screens/ListScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box} from '../design-system/components/box/box';
import {Text} from '../design-system/components/text';
import Icon from '../assets/icons/icon';
import { StyleSheet } from 'react-native';

const  BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TabNavigatior () {
  return (
    <BottomTab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
      <BottomTab.Screen name="List" component={ListScreen}  options={{
        headerTitle: () => (
          <Box backgroundColor="warm" height={120} width={"100%"} paddingTop={60} style={styles.box}>
            <Text color="black" variant="heading-2">Lists</Text>
            <Icon name='bell'/>
          </Box>
        ),
        tabBarIcon: ({tint}) => <Icon name='list-active' color={tint} />
      }}/>
      <BottomTab.Screen name="Profile" component={ProfileScreen} options={{
        headerTitle: () => (
          <Box backgroundColor="warm" height={120} width={"100%"} paddingTop={60}>
            <Text color="blue" variant="heading-2">Personal Information</Text>
          </Box>
        ),
        tabBarIcon: ({tint}) => <Icon name='edit' color={tint} />
      }} />
    </BottomTab.Navigator>
  )
}

function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Home" component={TabNavigatior}/>
    </Stack.Navigator>
  );
};



const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MainAppStack;
