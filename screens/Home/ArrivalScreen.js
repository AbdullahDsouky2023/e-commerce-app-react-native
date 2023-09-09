import { View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { products } from "../../utils/constants";
import ProductCard from "../../components/HomePage/productCard";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");
export default function ArrivalScreen({navigation}) {
  const displayAllProducts = () => {
    const productElements = [];
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i].product;
  
      productElements.push(
        product.map((productItem) => (
          <View className="m" key={productItem.name}>
            <ProductCard
              name={productItem.name}
              image={productItem.Image}
              price={productItem.price}
              realPrice={productItem.realPrice}
            />
          </View>
        ))
      );
    }
    return productElements
  }
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
      <Text className="text-xl mr-[120px] mb-4 font-bold mt-4">New arrivals</Text>
      </View>
      <View className="flex  flex-row  flex-wrap  gap-4 justify-center my-4 ">
        {displayAllProducts()}
      </View>
    </ScrollView>
  );
}
