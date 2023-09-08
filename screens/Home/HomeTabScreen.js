import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import Ionicons from "@expo/vector-icons/Ionicons";
import User from "../../assets/Home/user.svg";
import Cateogries from "../../components/HomePage/Cateogries";
import Banner from "../../components/HomePage/Banner";
import NewArrival from "../../components/HomePage/NewArrival";
export default function HomeTabScreen() {

  return (
    <ScrollView
      style={{
        height: height * 10,
      }}
      className="bg-white flex gap-8 p-4"
    >
      {/* nav */}
      <View className="flex flex-row  mt-2 justify-between">
        <Text className="text-xl font-bold">Arino</Text>
        <View className="flex flex-row gap-4">
          <TouchableOpacity className="bg-[#FFF9E4] p-1 rounded-full">
            <Ionicons name="heart-outline" size={25} color={"#FCD240"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <User />
          </TouchableOpacity>
        </View>
      </View>
      {/* Search bar */}
      <View className="bg-[#F9FAFB] flex-row p-3 mx-4 left-[10px]  rounded-full">
        <TextInput placeholder="Search" className="w-[300px]" />
        <Ionicons name="search-outline" size={23} color={"gray"} />
      </View>
      {/* new arrival banner */}
      <View className='px-1 '>

      <Banner/>
      <NewArrival/>
      <Cateogries/>
      </View>
    </ScrollView>
  );
}
