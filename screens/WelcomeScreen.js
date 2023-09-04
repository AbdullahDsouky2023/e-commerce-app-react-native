
import {  Text, TouchableOpacity, View } from 'react-native';
import Image1 from '../assets/images/screen1.svg';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

  const navigation = useNavigation();

  return (
    <View className="bg-[#393939]  h-full ">
      <Text
      className='text-white font-bold text-4xl  text-center mt-20'>
      Your Favorite Food, Delivered Fast
      </Text>
      <Text
      className='text-slate-200 font-thin text-sm  text-center mt-2 max-w-[350px] mx-auto '>
      Find the best restaurants in r city and get it delivered to your place!
    </Text>
    <View className=' mt-6 mx-auto' >

      <Image1  size={30} fill='red' />
    </View>
    <TouchableOpacity 
     onPress={() => navigation.navigate('HomeScreen')}
    className="rounded-md text-slate-900 bg-[#FFAC4B] max-w-[500px] mx-auto mt-6 p-6 px-20">
        <Text className=' font-bold text-xl' >Order Now!</Text>
      </TouchableOpacity>
    </View>
  );
}


