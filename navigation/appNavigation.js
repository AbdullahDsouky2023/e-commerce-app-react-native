
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LogoScreen from '../screens/LogoScreen';
import { useEffect, useState } from 'react';
import { getItem } from '../utils/asyncStorage';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpScuccessScreen from '../screens/SignUpScuccessScreen';
import VerifyScreen from '../screens/VerifyScreen';
import FingerPrintScreen from '../screens/FingerPrintScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import CreatePasswordSceen from '../screens/CreatePasswordScreen';
import CreatePasswordScreen from '../screens/CreatePasswordScreen';
import LocationScreen from '../screens/LocationScreen';
import NewArrival from '../components/HomePage/NewArrival';
import ArrivalScreen from '../screens/Home/ArrivalScreen';
const Stack = createNativeStackNavigator();
export default function AppNavigation()
{
  const [showOnboarding,setShowOnboarding]=useState(true);
  useEffect(()=>{
    checkIfAlreadyOnboarded();
  },[])
  const checkIfAlreadyOnboarded = async ()=>{
    let onboarded = await getItem('onboarded');
    if(onboarded==1){
      // hide onboarding
      setShowOnboarding(false);
    }else{
      // show onboarding
      setShowOnboarding(true);
    }
  }
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='logoScreen'>
      <Stack.Screen name="logoScreen" component={LogoScreen} 
      options={{headerShown:false}}
      />
      {
        showOnboarding && <Stack.Screen name="onboarding" component={OnboardingScreen} options={{headerShown:false}}/>
      }
      <Stack.Screen name="Signin" component={SignInScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUpSucess" component={SignUpScuccessScreen} options={{headerShown:false}} />
      <Stack.Screen name="VerifyScreen" initialParams={{targetScreen:'FingerPrint'}}component={VerifyScreen} options={{headerShown:false}} />
      <Stack.Screen 
      name="CreatePassword" 
      component={CreatePasswordScreen} 
      options={{headerShown:false}} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} options={{headerShown:false}} />
      <Stack.Screen name="FingerPrint" component={FingerPrintScreen} options={{headerShown:false}} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="NewArrival" component={ArrivalScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



