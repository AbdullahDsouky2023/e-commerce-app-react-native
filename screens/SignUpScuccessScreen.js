import { View, Text, Dimensions, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import React, { useEffect } from 'react'
import Correct from '../assets/Signup/correct.svg'
import ArrowBack from '../assets/Signup/arrowback.svg'
import { Platform } from 'react-native';
import { Location } from 'expo';

const {width,height}=Dimensions.get('window')
export default function SignUpScuccessScreen({navigation}) {
  useEffect(() => {
    setTimeout(()=>navigation.navigate('LocationScreen'),2000);
  }, [])


  return (
    <View
    style={{
      height:height*1
    }}
    className='bg-white flex items-center  justify-center'
    >
      <TouchableOpacity 
      onPress={0}
      className='p-4 rounded-full top-[-120px] -left-[150px] '>
        <ArrowBack/>
      </TouchableOpacity>
      <View className='flex gap-8 mb-[200px]'>
      <Text className='text-[38px] text-center'>Congratulations!</Text>
      <View className='cflex items-center mt- '>
        <Correct/>
      </View>
      <Text className='text-sm text-center m-auto max-w-[300px] text-slate-400'>Your has been successfully created. Please add 
further information to make your shopping 
better.!</Text>
      </View>
    </View>
  )
}