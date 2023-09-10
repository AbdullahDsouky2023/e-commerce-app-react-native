import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function GoBackButton() {
    const navigation=useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navigation.goBack()}
    
    className='bg-slate-100 p-2 w-[50px] mt-2 mx-4 rounded-full'>

    <Ionicons name="arrow-back"  size={28}/>
    </TouchableOpacity>
  )
}