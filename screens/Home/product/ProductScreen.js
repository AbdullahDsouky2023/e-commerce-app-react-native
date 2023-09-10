import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import GoBackButton from "../../../components/Categories/GoBackButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddProductPop from "../../../components/products/AddProductPop";
export default function ProductScreen({ route,navigation }) {
  const { width, height } = Dimensions.get("window");
  const [loved, setLoved] = useState(false);
  const { name, productImage, price, realPrice } = route.params.product;
    const [showAddProductPop,setShowAddProductPop]= useState(false)
  return (
    <View
      style={{
        height: height * 10,
      }}
      className="bg-white"
    >
      <GoBackButton />
      <View className="px-4 ">
        <View className="bg-[#EFEFEF] mt-4 p-4 rounded-lg">
          <TouchableOpacity
            onPress={() => setLoved(!loved)}
            className="bg-[#FFF9E4] w-[36px] items-center  p-1 rounded-full"
          >
            <Ionicons
              name={loved ? "heart" : "heart-outline"}
              size={25}
              color={loved ? "red" : "#FCD240"}
            />
          </TouchableOpacity>
          <View className="flex items-center my-4">{productImage}</View>
        </View>
        <View>
          <Text className="text-2xl font-bold mt-5">{name}</Text>
          <View className="felx flex-row gap-4 mt-0">
            <Text className="text-xl font-bold mx-10">${price}.00</Text>
            <Text className="text-slate-400 text-xl line-through">
              ${realPrice}.00
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Reviews')}
          className="bg-[#EFEFEF] my-4 p-4 flex flex-row rounded-xl">
            <Ionicons name="star" color={"#FCD240"} size={20} />
            <View className="flex mx-10 flex-row items-center ">
              <Text className="font-extrabold mx-2">4.9</Text>
              <Text className="font-thin text-sm text-slate-500">Ratings</Text>
            </View>
            <View className="flex flex-row mx-2 items-center ">
              <Text className="font-extrabold mx-2">1456</Text>
              <Text className="font-thin text-sm text-slate-500">Reviews</Text>
            </View>
            <Ionicons name="arrow-forward" color={"gray"} size={20} />
          </TouchableOpacity>
          <Text className="text-xl font-bold my-2">Description</Text>
          <Text className="text-slate-500 max-w-[320px]">
            Extremely comfy made with highly flexible materials having the
            smooth texture on the cover. Inside of the sofa is made up of fine
            wood having the extra long life.
          </Text>
          <TouchableOpacity
          onPress={()=>setShowAddProductPop(true)}
            className="bg-[#FCD240] p-1 w-[360px] h-[55px]
       flex items-center justify-center rounded-md mt-4 self-center "
          >
            <Text className="text-xl font-bold">Add to Cart</Text>
          </TouchableOpacity>
          {
            showAddProductPop && <AddProductPop/>
          }
        </View>
      </View>
    </View>
  );
}
