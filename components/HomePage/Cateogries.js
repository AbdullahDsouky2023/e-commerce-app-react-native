import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { products ,icons} from '../../utils/constants'
import ProductCard from './productCard';



export default function Cateogries()

{
  const [active,setActive]=useState('star')
  const allProducts = products.filter((item) => item.name === active)[0].product
  return (
    <View>
          <Text className='text-3xl mt-4'>
            Categories
          </Text>
          <View className='flex flex-row gap-4 my-4'>
            {
              icons.map((item)=>(

            <TouchableOpacity onPress={()=>setActive(item.filled)} key={item.filled} className={`w-12 p-3   flex items-center rounded-lg ${item.filled == active ?'bg-[#FCD240] ' :'bg-[#EFEFEF]'}`}>
              <Ionicons name={active ==item.filled?item.filled:item.outline} size={20} color={'black'}/>
            </TouchableOpacity>
              ))
            }
          </View>
          <View className="my-6 flex justify-center flex-row flex-wrap gap-8">
          {
            allProducts.map((product)=>{

        return(<View className='' key={product.name}>
            <ProductCard
            name={product.name}
            image={product.Image}
            price={product.price}
            realPrice={product.realPrice}
            />
            </View>)
            })
          }
          
        </View>
        </View>
  )
}