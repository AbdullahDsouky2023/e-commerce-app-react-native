import { View, Text, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Email from '../../assets/signin/email.svg'
import Password from '../../assets/signin/password.svg'
import Gpay from '../../assets/payment/gpay.svg'
import Paypal from '../../assets/payment/paypal.svg'
import Apay from '../../assets/payment/apay.svg'

const {width,height}=Dimensions.get('window')
import GoBackButton from '../../components/Categories/GoBackButton'
import { useState } from 'react'
export default function Sc({navigation}) {
    const [SelectedMethod,setSelectedMethod]=useState(null)
  const activeClass='border-2 border-blue-300'
    return (
    <ScrollView
    style={{
      height:height*10
    }}
    className='bg-white flex gap-24'
    >
      <View className='flex sticky top-0 flex-row items-center   text-center pt-6 justify-between px-2'>
      <GoBackButton/>
      <Text className="text-lg mr-[100px]  mb-4 font-bold mt-4">Payment Method</Text>
      </View>
        <View className='flex gap-5'>
            <TouchableOpacity
            onPress={()=>setSelectedMethod('g')}
            className={`bg-[#EFEFEF]   p-4 py-5 rounded-lg mx-4 items-center ${SelectedMethod === 'g' ? activeClass :''}`}>
                <Gpay/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setSelectedMethod('p')}
            className={`bg-[#EFEFEF]  p-4 py-5 rounded-lg mx-4 items-center ${SelectedMethod == 'p' ? activeClass :''}`}>
                <Paypal/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setSelectedMethod('a')}
            className={`bg-[#EFEFEF]  p-4 py-5 rounded-lg mx-4 items-center ${SelectedMethod == 'a' ? activeClass :''}`}>
                <Apay/>
            </TouchableOpacity>
            
        </View>
      <TouchableOpacity
      style={{
        width:350,
        marginRight:25
      }}
      onPress={()=>navigation.navigate('PaymentDetails')}
        className="bg-[#FCD240]
       p-1  h-[65px]
       flex items-center 
       justify-center self-end
        rounded-xl   mt-14 mb-8"
      >
        <Text className="text-lg font-bold">Proceed to checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}