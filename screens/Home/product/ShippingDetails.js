import { View, Text, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Email from '../../../assets/signin/email.svg'
import Password from '../../../assets/signin/password.svg'


const {width,height}=Dimensions.get('window')
import GoBackButton from '../../../components/Categories/GoBackButton'
export default function ShippingDetails({navigation}) {
  return (
    <ScrollView
    style={{
      height:height*10
    }}
    className='bg-white flex gap-24'
    >
      <View className='flex sticky top-0 flex-row items-center   text-center pt-6 justify-between px-2'>
      <GoBackButton/>
      <Text className="text-lg mr-[100px]  mb-4 font-bold mt-4">Shipping Details</Text>
      </View>
      <View className='flex gap-4 mt-2 mx-2'>
        <Text className='text-2xl mb-8 font-bold'>
            Add Shipping details
        </Text>
      <View className='bg-[#F9FAFB]
          flex flex-row  gap-4  
          items-center justify-start 
          rounded-xl pb-4 mx-1'>
        <Ionicons name='person-outline' size={22}/>
        <TextInput placeholder='Full Name' 
        className='text-lg '/>

        </View>
        <View className='bg-[#F9FAFB]
          flex flex-row  gap-4  
          items-center justify-start 
          rounded-xl pb-4 mx-1'>
        <Ionicons name='location-outline' size={22}/>
        <TextInput placeholder='Location' 
        className='text-lg '/>

        </View>
        <View className='bg-[#F9FAFB]
          flex flex-row  gap-4  
          items-center justify-start 
          rounded-xl pb-4 mx-1'>
        <Ionicons name='call-outline' size={22}/>
        <TextInput placeholder='Phone number' 
        className='text-lg '/>

        </View>
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