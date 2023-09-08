import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '../assets/logoscreen/logo.svg'
import { useNavigation } from '@react-navigation/native'
export default function LogoScreen() {
    const navigation=useNavigation()
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Home')
        },1000)
    }, [])
    
  return (
    <View className='bg-white flex items-center justify-center h-[100vh]'>
     <Logo/>
     <StatusBar auto/>
    </View>
  )
}