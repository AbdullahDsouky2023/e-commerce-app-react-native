import { View, Text, TextInput, TouchableOpacity, Dimensions, Button } from 'react-native'
import React from 'react'
import Email from '../assets/signin/email.svg'
import Password from '../assets/signin/password.svg'
import Google from '../assets/signin/google.svg'
import Apple from '../assets/signin/apple.svg'
import { useNavigation } from '@react-navigation/native'
const {width,height} =Dimensions.get('window')
export default function SignInScreen() {
    const navigation = useNavigation()
    


  return (
    <View
    style={{
        height:height*10
    }}
    className='bg-white h-full flex pt-[120px] gap-4 px-4'>
      <Text
      className='font-bold text-3xl'>Hi there!</Text>
      <Text className='text-neutral-400 mt-2'>Welcome back ,Sign in to your account</Text>
      <View className='py-2 mt-8 flex  gap-4'>
        <View className='bg-[#F9FAFB]
          flex flex-row  gap-4  
          items-center justify-start 
           rounded-xl pb-4 mx-1'>
        <Email/>
        <TextInput placeholder='Email' 
        className='text-lg '/>

        </View>
        <View className='bg-[#F9FAFB]
          flex flex-row  gap-4  
          items-center justify-start 
           rounded-xl pb-4 mx-1'>
        <Password/>
        <TextInput placeholder='Password' 
        className='text-lg '/>

        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('ForgetPassword')}
        >

        <Text className='my-8 text-lg font-bold'>
            Forget Password?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('VerifyScreen')}
      className="bg-[#FCD240]
       p-1 w-[320px] h-[65px]
       flex items-center 
       justify-center
        rounded-xl my-4 "
    >
      <Text className="text-xl font-bold">Sign in</Text>
    </TouchableOpacity>

    <Text 
    
    className='text-center py-1  text-slate-300 '>
        OR
    </Text>
    <View className='flex flex-row '>

    <TouchableOpacity className='border mr-4 w-[150px] flex items-center rounded-xl border-slate-300 p-5'>
        <Google/>
    </TouchableOpacity>
    <TouchableOpacity className='border w-[150px] flex items-center rounded-xl border-slate-300 p-5'>
        <Apple/>
    </TouchableOpacity>
      </View>
      <View className='flex flex-row py-4 justify-center'>

      <Text className='text-slate-500 '>
        Don't have an account?
      </Text>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('SignUp')}>

      <Text className='font-bold ml-1'>
        SignUp
      </Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}