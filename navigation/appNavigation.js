
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LogoScreen from '../screens/LogoScreen';

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='logoScreen'>
      <Stack.Screen name="logoScreen" component={LogoScreen} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="onboarding" component={OnboardingScreen} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



