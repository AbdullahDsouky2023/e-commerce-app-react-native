import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
const {width,height}=Dimensions.get('window')
import GoBackButton from '../../components/Categories/GoBackButton'
import CartItem from '../../components/cart/CartItem'
import { cartProducts } from '../../utils/constants'
export default function CartScreen({navigation}) {
  return (
    <ScrollView
    style={{
      height:height*10
    }}
    className='bg-white'
    >
      <View className='flex sticky top-0 flex-row items-center   text-center pt-6 justify-between px-2'>
      <GoBackButton/>
      <Text className="text-lg mr-[150px]  mb-4 font-bold mt-4">My cart</Text>
      </View>
      <View className='flex flex-col gap-3'> 
        {
          cartProducts.map((item)=>(
            <View  key={item.name}>

            <CartItem  item={item}/>
            </View>
          ))
        }
      </View>
      <TouchableOpacity
      style={{
        width:350
      }}
      onPress={()=>navigation.navigate('Shipping')}
        className="bg-[#FCD240]
       p-1  h-[65px]
       flex items-center 
       justify-center
        rounded-xl  mx-4 mt-14 mb-8"
      >
        <Text className="text-lg font-bold">Proceed to checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}