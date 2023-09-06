import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Email from "../assets/signin/email.svg";

export default function ForgetPasswordScreen({navigation}) {
  const { width, height } = Dimensions.get("window");
  const setInitialParams = (target) => {
    navigation.setParams({ targetScreen: target });
  }
  const HandleSend=()=>{
    navigation.navigate('VerifyScreen', { targetScreen: 'CreatePassword' });

    
  }
  
  return (
    <View
      style={{
        height: height * 10,
      }}
      className="bg-white px-4 pt-32"
    >
      <View>
        <Text className="text-3xl font-extrabold">Password recovery</Text>
        <Text className="pt-4 text-md text-slate-400">
          Please enter your email address to send to a password recovery email.
        </Text>
      </View>
      <View
        className="bg-[#F9FAFB]
flex flex-row  gap-4  
items-center justify-start 
 rounded-xl pb-4 mx-1 mt-16"
      >
        <Email />
        <TextInput autoFocus placeholder="Email" className="text-lg " />
      </View>
      <TouchableOpacity
        onPress={() => HandleSend()}
        className="bg-[#FCD240]
       p-1 w-[350px] h-[65px]
       flex items-center 
       justify-center
        rounded-xl   mt-14"
      >
        <Text className="text-xl font-bold">Send Code</Text>
      </TouchableOpacity>
    </View>
  );
}

{
  /* */
}
