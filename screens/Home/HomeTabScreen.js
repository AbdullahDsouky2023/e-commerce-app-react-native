import {
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import Cateogries from "../../components/HomePage/Cateogries";
import Banner from "../../components/HomePage/Banner";
import NewArrival from "../../components/HomePage/NewArrival"
import Nav from "../../components/HomePage/Nav";
import Search from "../../components/HomePage/Search";
export default function HomeTabScreen() {
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
 <Search/>
  <View className='px-1 '>
  <Banner/>
  <NewArrival/>
  <Cateogries/>
  </View>
</ScrollView>
)
}
