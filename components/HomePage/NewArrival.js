import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import ProductCard from "../../components/HomePage/productCard";
  import {products} from '../../utils/constants'
  import { useNavigation } from "@react-navigation/native";
export default function NewArrival({ }) {
    const allProducts = products.filter((item) => item.name === 'star')[0].product
    const navigation=useNavigation()
  return (
    <View className='mt-4'>
    <View className="flex flex-row  justify-between items-center">
      <Text className="text-3xl">New arrivals</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('NewArrival')}>
      <View className="flex flex-row  items-center">
        <Text className="text-xs ">Explore </Text>
        <Ionicons size={15} name="arrow-forward-outline" />
      </View>
        </TouchableOpacity>
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