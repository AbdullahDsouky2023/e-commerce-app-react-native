import {
    View,
    Text,
    ScrollView,
  } from "react-native";
  import React from "react";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import ProductCard from "../../components/HomePage/productCard";
  import {products} from '../../utils/constants'

export default function NewArrival() {
    const allProducts = products.filter((item) => item.name === 'star')[0].product

  return (
    <View className='mt-4'>
    <View className="flex flex-row  justify-between items-center">
      <Text className="text-3xl">New arrivals</Text>
      <View className="flex flex-row  items-center">
        <Text className="text-xs ">Explore </Text>
        <Ionicons size={15} name="arrow-forward-outline" />
      </View>
    </View>
    {/* cards */}
    <ScrollView className="mt-2 flex  flex-row " horizontal showsHorizontalScrollIndicator={false}>
      {
        allProducts.map((product)=>{

    return(<View className='mr-2' key={product.name}>
        <ProductCard  name={product.name}
        image={product.Image}
        price={product.price}
        realPrice={product.realPrice}/>
        </View>)
        })
      }
      
    </ScrollView>
    {/* categories */}
  </View>
  
  )
}