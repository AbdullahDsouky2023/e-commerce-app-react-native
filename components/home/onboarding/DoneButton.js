import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DoneButton = () => {
  const navigation = useNavigation();
  const DoneHandler = () => {
    return navigation.navigate("Signin");
  };
  return (
    <TouchableOpacity
      onPress={() => DoneHandler()}
      className="bg-[#FCD240] p-1 w-[320px] h-[65px]
       flex items-center justify-center rounded-md absolute -top-[150px] 
       -left-[45vh]"
    >
      <Text className="text-xl font-bold">Get Started</Text>
    </TouchableOpacity>
  );
};
export default DoneButton;
