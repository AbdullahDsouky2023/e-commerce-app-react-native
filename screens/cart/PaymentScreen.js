import { View, Text, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Email from '../../assets/signin/email.svg'
import Password from '../../assets/signin/password.svg'


const {width,height}=Dimensions.get('window')
import GoBackButton from '../../components/Categories/GoBackButton'
export default function PaymentScreen({navigation}) {
  return (
    <ScrollView
    style={{
      height:height*10
    }}
    className='bg-white flex gap-24'
    >
      <View className='flex sticky top-0 flex-row items-center   text-center pt-6 justify-between px-2'>
      <GoBackButton/>
      <Text className="text-lg mr-[100px]  mb-4 font-bold mt-4">Payment Details</Text>
      </View>
      <View>
        <View className='mx-8  flex-row justify-between'>
            <Text className='text-lg text-neutral-400'>
                Sub total
            </Text>
            <Text className='font-bold text-md'>
               $253.00
            </Text>
        </View>
        <View className='mx-8  flex-row justify-between mt-4'>
            <Text className='text-lg text-neutral-400'>
                Shipping  Fee
            </Text>
            <Text className='font-bold text-md'>
               $25.99
            </Text>
        </View>
        <Text className='text-center text-neutral-400'>
            ..........................................................................................
        </Text>
        <View className='mx-8 bg-[#EFEEEF] p-2 rounded-md flex-row justify-between mt-4'>
            <TextInput
            placeholder='promo Code'
            className='text-sm text-neutral-400'/>

             <TouchableOpacity
      style={{
        width:100,
        marginRight:2
      }}
        className="bg-[#FCD240]
         h-[35px]
       flex items-center 
       justify-center self-end
        rounded-xl    "
      >
        <Text className="text-xs  font-bold">Apply</Text>
      </TouchableOpacity>
        </View>
        <Text className='text-center text-slate-400'>
            ..........................................................................................
        </Text>
        <View className='mx-8  flex-row justify-between mt-4'>
            <Text className='text-lg text-neutral-400'>
                Total
            </Text>
            <Text className='font-bold text-md'>
               ${250+25}.99
            </Text>
        </View>
      </View>
      <TouchableOpacity
      style={{
        width:350,
        marginRight:25
      }}
      onPress={()=>navigation.navigate('PaymentMethod')}
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