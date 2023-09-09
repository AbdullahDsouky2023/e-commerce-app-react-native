import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import Chair1 from "../../assets/Home/chair1.svg";
import { useNavigation } from "@react-navigation/native";
export default function Banner() {
 const navigation=useNavigation()
  return (
    <View className="bg-[#FFF9E4] justify-between shadow-xs px-4 pt-4 flex flex-row  rounded-lg">
        <View>
          <Text className="text-lg font-bold leading-5 max-w-[60px]">
            33% Off on{" "}
          </Text>
          <Text className="text-lg font-bold bottom-[4px] ">New arrivals</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('NewArrival')} >
          <View className="flex flex-row mt-4 items-center">
        <Text className="text-xs ">Explore </Text>
            <Ionicons size={15} name="arrow-forward-outline" />
          </View>
        </TouchableOpacity>
        </View>
        <View className="bottom-[22px]">
          <Chair1 />
        </View>
      </View>
  )
}