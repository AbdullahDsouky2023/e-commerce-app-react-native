import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import User from "../../assets/Home/user.svg";
import { useNavigation } from '@react-navigation/native';

export default function Nav() {
  const navigation=useNavigation()
  return (
    <View className="flex flex-row  mt-2 justify-between">
      <Text className="text-xl font-bold">Arino</Text>
      <View className="flex flex-row gap-4">
        <TouchableOpacity className="bg-[#FFF9E4] p-1 rounded-full">
          <Ionicons name="heart-outline" size={25} color={"#FCD240"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <User />
        </TouchableOpacity>
      </View>
    </View>
  )
}