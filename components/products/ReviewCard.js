import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { products } from "../../utils/constants";
import ProductCard from "../../components/HomePage/productCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ReviewCard({ person}) {
  const [loved,setLoved]=useState(false);
  const {name,review,numOfStars,image}=person
  
  return (
    <View className="bg-[#F8F9FB] flex flex-row items-start justify-between w-[350px] p-4 my-3 rounded-lg mx-4">
      <View className=" w-[45px] h-[45] bg-[#EFEFEF] p-2 rounded-full flex items-center justify-center">
       {image}
      </View>
      <View className='flex mx-2 flex-col items-start'>
       <View className='flex flex-row justify-between w-[270px]'>
       <Text className='text-md  mb-2 font-bold'>{name}</Text>
       <View className='flex flex-row items-center gap-1'>

       <Text>
       {numOfStars}
       </Text>
       <Ionicons name="star" size={15} color={'#FCD240'}/>
       </View>

       </View>
        <Text className="max-w-[270px] text-xs text-slate-800 ">{review}</Text>
      <TouchableOpacity
      onPress={()=>setLoved(!loved)}
      className='self-end'>

      <Ionicons name={loved?"heart" :"heart-outline"} color={loved ? 'red' :'gray'} size={18}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}
