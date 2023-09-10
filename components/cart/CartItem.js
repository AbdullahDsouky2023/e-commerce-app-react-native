import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons'
const {width,height}=Dimensions.get('window')

import Chair1 from "../../assets/reviewers/reviwer1.svg";
export default function CartItem({item}) {

    const {Image,name,price,realPrice}=item
  return (
    <View className="bg-[#F9FAFB]  flex flex-row items-center  p-4 mx-4 rounded-md">
      <View className="bg-[#EFEFEF] p-3 rounded-md">
        {Image }
      </View>
      <View className="mx-4">
        <View 
        style={{
        width:width*0.67
        }}
        className='flex flex-row justify-between w-[270px]'>
          <Text className="text-lg">{name}</Text>
          <View className='bg-slate-100 p-1 -my-3 rounded-full'>
            <Ionicons name='close' size={14}/>
          </View>
        </View>
        <View className='flex flex-row justify-between'>

        <View className="felx flex-row  gap-4 mt-0">
          <Text className="text-sm">${price}.00</Text>
          <Text className="text-slate-400 text-sm line-through">${realPrice}.00</Text>
        </View>
        <View className='flex -mb-6 flex-row gap-1 items-center'>
            <TouchableOpacity className='bg-[#EFEFEF] flex items-center p-1 h-[27px] w-[27px] rounded-full '>
                <Text>-</Text>
            </TouchableOpacity>
            <Text className='text-sm'>
                01
            </Text>
            <TouchableOpacity className='bg-[#EFEFEF] flex items-center p-1 h-[27px] w-[27px] rounded-full '>
                <Text>+</Text>
            </TouchableOpacity>

        </View>
        </View>
      </View>
    </View>
  );
}
