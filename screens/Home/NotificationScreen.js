import { View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { products } from "../../utils/constants";
import ProductCard from "../../components/HomePage/productCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import NotificationCard from "../../components/notification/NotificationCard";

const { width, height } = Dimensions.get("window");
export default function NotificationScreen({navigation}) {
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
      <Text className="text-xl mr-[120px] mb-4 font-bold mt-4">Notifications</Text>
      </View>
      <View className="flex   flex-col  my-6 ">
        <NotificationCard 
        name ='pricetag'
        message={' Additional 10% discount on pre bookings'}/>
        <NotificationCard 
        name={'cart'}
        message={'A reminder to checkout on your cart items.'}/>
        <NotificationCard
        name={'card'}
         message={'Invite your friend and get $10 voucher for your next  purchase.'}/>
        <NotificationCard    name={'cart'} message={' Additional 10% discount on pre bookings'}/>
        <NotificationCard 
        name ='pricetag'
        message={' Additional 10% discount on pre bookings'}/>
      </View>
    </ScrollView>
  );
}
