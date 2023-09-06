import {
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Password from "../assets/signin/password.svg";
  
  export default function CreatePasswordScreen({navigation}) {
    const { width, height } = Dimensions.get("window");
    const setInitialParams = (target) => {
      navigation.setParams({ targetScreen: target });
    }
    const HandleSend=()=>{
      navigation.navigate('Home');
  
      
    }
    
    return (
      <View
        style={{
          height: height * 10,
        }}
        className="bg-white px-4 pt-32"
      >
        <View>
          <Text className="text-3xl font-extrabold">Create new Password</Text>
          <Text className="pt-4 text-md text-slate-400">
          Please create a secure password for your account
to ensure security of the account.
          </Text>
        </View>
        <View
          className="bg-[#F9FAFB] flex flex-row  gap-4  items-center justify-start rounded-xl pb-4 mx-1 mt-16">
          <Password />
          <TextInput autoFocus placeholder="Password" className="text-lg " />
        </View>
        <View
          className="bg-[#F9FAFB] flex flex-row  gap-4  items-center justify-start rounded-xl pb-4 mx-1 mt-4">
          <Password />
          <TextInput autoFocus placeholder="Re-type password" className="text-lg " />
        </View>
        <TouchableOpacity
          onPress={() => HandleSend()}
          className="bg-[#FCD240]
         p-1 w-[350px] h-[65px]
         flex items-center 
         justify-center
          rounded-xl   mt-14"
        >
          <Text className="text-xl font-bold">Set password</Text>
        </TouchableOpacity>
      </View>
    );
  }
  

  