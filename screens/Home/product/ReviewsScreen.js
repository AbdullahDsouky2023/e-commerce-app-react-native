import { View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ReviewCard from "../../../components/products/ReviewCard";
import { reviewers } from "../../../utils/constants";
const { width, height } = Dimensions.get("window");

export default function ReviewsScreen({navigation}) {
  return (
    <ScrollView
      style={{
        height: height * 10,
      }}
      className="bg-white"
    >
      <View className='flex sticky top-0 flex-row items-center   text-center pt-6 justify-between px-2'>
      <TouchableOpacity 
      onPress={()=>navigation.goBack()}
      
      className='bg-slate-100 p-2 rounded-full'>

      <Ionicons name="arrow-back"  size={28}/>
      </TouchableOpacity>
      <Text className="text-lg mr-[120px] mx-20 mb-4 font-bold mt-4">4.9 (1578 reviews)</Text>
      </View>
      <View>
        {
          reviewers.map((person)=>(

            <ReviewCard person={person}/>
          ))
        }
      </View>
      <View>
        {
          reviewers.map((person)=>(

            <ReviewCard person={person}/>
          ))
        }
      </View>
      <View>
        {
          reviewers.map((person)=>(

            <ReviewCard person={person}/>
          ))
        }
      </View>
      </ScrollView>
  )
}