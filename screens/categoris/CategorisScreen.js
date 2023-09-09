import {
    View,
    Dimensions,
    ScrollView,
    Text,
  } from "react-native";
  import React from "react";
  const { width, height } = Dimensions.get("window");
  import Banner from "../../components/HomePage/Banner";
import Nav from "../../components/HomePage/Nav";
import Card from "../../components/Categories/Card";
import {rooms,styles} from '../../utils/constants'
export default function CategorisScreen() {
  return (
    <ScrollView
    style={{
      height: height * 10,
    }}
    className="bg-white flex gap-8 p-4"
  >
    <View className='p-2'>
   <Nav/>
    </View>
    <View className='px-1 '>
    <Banner/>
    <View>
    <Text className='text-[30px] my-6'>
            Shop By Room
    </Text>
    <View className='flex gap-4 flex-wrap flex-row items-center justify-center '>
    {
      rooms.map((room)=>(
    <Card key={room.name} name={room.name} image={room.Image}/>
      ))
    }
    </View>
    </View>
    <View>
    <Text className='text-[30px] my-6'>
            Shop By Style
    </Text>
    <View className='flex gap-4 mb-4 flex-wrap flex-row items-center justify-center '>
    {
      styles.map((room)=>(
    <Card key={room.name} name={room.name} image={room.Image}/>
      ))
    }
    </View>
    </View>
    </View>
  </ScrollView>
  )
}