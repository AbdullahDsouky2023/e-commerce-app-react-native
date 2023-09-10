import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
export default function ProductCard({
  name,
  price,
  realPrice,
  image,
  productImage
}) {
  const navigation =useNavigation()
  const product={
    name,
    price,
    realPrice,
    image,
    productImage
  }
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Product',{ product})}
    style={{
        
    }}
    className="bg-[#EFEFEF]  max-w-[150px] p-4 rounded-lg ">
            <View className="m-auto">
              {image}
            </View>
            <View className='flex flex-row items-center  justify-between '>
              <View className="flex ">
                <Text className="text-xs">{name}</Text>
                <View className="felx flex-row gap-1 mt-0">
                  <Text className='text-xs'>${price}</Text>
                  <Text className="text-slate-400 text-xs line-through">${realPrice}</Text>
                </View>
                
              </View>
              <TouchableOpacity className='bg-[#D9D9D9] p-1 mx-8 rounded-full '>
                  <Ionicons name="add-outline"  color={'black'}/>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
  )
}