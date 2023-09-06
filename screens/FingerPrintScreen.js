import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {  authenticateAsync } from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';
import Finger from '../assets/fingerprint/Finger.svg'
function FingerPrintScreen() {
  const navigation=useNavigation()
  const {width,height}=Dimensions.get('window')

  const handleBiometricAuthentication = async () => {
    try {
      const result = await authenticateAsync('Authenticate to continue');
      if (result.success) {
        navigation.navigate('Home')
      } else {
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
    }
  };

  return (
    <View>
     
        <View style={{
          height:height*10
        }}
        className='pt-16 px-6 bg-white flex gap-[150px]'
        >
          <View>

          <Text className='text-3xl my-2 font-bold max-w-[300px]'>
            Unable FingerPrint Lock
          </Text>
          <Text className='text-slate-500'>
          Login quickly and securely with the fingerprint stored 
on this device.
          </Text>
          </View>
          <View className='bg-[#F9FBFA] self-center p-4 rounded-full w-[120px] h-[120px] flex items-center justify-center'>
            <Finger/>
          </View>
          <View>


          <TouchableOpacity
    onPress={handleBiometricAuthentication}
     className='bg-[#FCD240] flex items-center p-4 rounded-lg'>
        <Text className='text-xl font-extrabold'>
            Unable
        </Text>
    </TouchableOpacity>
          <TouchableOpacity
    onPress={()=>navigation.navigate('Home')}
    className=' flex items-center p-4 rounded-lg'>
        <Text className='text-md underline font-extrabold'>
            I'll do it later
        </Text>
    </TouchableOpacity>

       </View>
        </View>
      
    </View>
  );
}

export default FingerPrintScreen;
