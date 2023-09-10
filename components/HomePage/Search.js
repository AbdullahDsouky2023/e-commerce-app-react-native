import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Animated } from 'react-native';
import { starProducts } from "../../utils/constants";
import ProductCard from "./productCard";
import { useNavigation } from "@react-navigation/native";

export default function Search({changeSearchStatus,showSearch}) {
  const [expanded, setExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const animatedValue = new Animated.Value(0);
  const [products ,setProducts]=useState([])
  const handleExpand = () => {
    setExpanded(!expanded);
    changeSearchStatus(true);

    const toValue = expanded ? 0 : 1;
    const duration = 300;

    Animated.timing(animatedValue, {
      toValue,
      duration,
      useNativeDriver: false,
    }).start();
  };
  const handleSearch=()=>
  {
    const SearchedProducts = starProducts.filter((item)=>item.name.includes(searchText))
    setProducts(SearchedProducts)
  }
  const navigation =useNavigation()

  return (
    <View>
      {
        showSearch && (
          <TouchableOpacity 
          onPress={()=>changeSearchStatus(false)}
          
          className='bg-slate-100 p-2 w-[50px] mt-8 mx-8 rounded-full'>
    
          <Ionicons name="arrow-back"  size={28}/>
          </TouchableOpacity>
        )
      }
        
      <TouchableOpacity onPress={() => handleExpand()}
        className=" my-4 bg-[#F9FAFB]  z-100 
        flex-row p-3  mx-4 left-[10px]  justify-between
         rounded-full"
      >
        <TextInput
          style={{
          }}
          placeholder="Search..."
          value={searchText}
          className={!showSearch && 'py-2 w-[50px]  h-[30px]'}
          onChangeText={(text) => {
            setSearchText(text)
            handleSearch()
          }}
        />
         <Ionicons name="search-outline" size={23} color={"gray"} />

      </TouchableOpacity>
      <View className='flex flex-row  mt-12 flex-wrap items-center justify-center gap-4'>

     {
       showSearch && products?.map((productItem)=>{
        return (
          <View className="my-2 f" key={productItem.name}>
          <ProductCard
            name={productItem.name}
            image={productItem.Image}
            price={productItem.price}
            realPrice={productItem.realPrice}
          />
        </View>
        )
      })
     }
        </View>
    </View>
  );
}
