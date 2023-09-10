import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';

export default function AddProductPop() {
    const { width, height } = Dimensions.get("window");
    const navigation=useNavigation()
  return (
    <View 
          style={{
            borderTopEndRadius:40,
            borderTopStartRadius:40,
            width:width*1,
            height:height*0.29,
            bottom:-10
          }}
          className=' absolute  bg-white pb-4 shadow-xl  bottom-0 rounded-lg -left-[15px] '>
        <Text className="text-lg pt-4 font-bold text-center">item  Successfully Added🎉</Text>

          <TouchableOpacity
          onPress={()=>navigation.goBack()}
            className="bg-[#FCD240] p-1 w-[360px] h-[55px]
            flex items-center justify-center rounded-md mt-4 self-center "
          >
            <Text className="text-xl font-bold">Continue Shopping</Text>
          </TouchableOpacity>
            <TouchableOpacity
              className="border-[#FCD240] focus:bg-[#FCD240] border-2 bg-white p-1 w-[360px] h-[55px]
         flex items-center justify-center rounded-md mt-4 self-center "
            >
              <Text className="text-xl font-bold">View Cart</Text>
            </TouchableOpacity>
          </View>
  )
}