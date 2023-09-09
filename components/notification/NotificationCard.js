import { View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { products } from "../../utils/constants";
import ProductCard from "../../components/HomePage/productCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NotificationCard({message , name}) {
  return (
    <View className='bg-[#F8F9FB] flex flex-row items-center  w-[350px] p-4 my-3 rounded-lg mx-4'>
    <View className='bg-[#FFF9E4] w-[55px] p-2 rounded-full flex items-center justify-center' >
      <Ionicons name={name} size={25}/>
    </View>
    <Text className='max-w-[250px] text-slate-800 mx-4'>
   {message}
    </Text>
  </View>
  )
}