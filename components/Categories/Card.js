import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
export default Card = ({name,image}) => {
  return (
    <View 
    style={{
      borderRadius: 12,
    }}
    className=" w-[160px] m-2 overflow-hidden  relative h-[210px] ">
      <Text className="text-white absolute top-0 z-10 text-[19px] font-semibold mx-4 mt-3">
       {name}
      </Text>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        style={{
          width: 160,
          height: 208,
          bottom: 0,
          // opacity:0.7,
          position: "absolute",
          zIndex: 5,
          borderRadius: 12,
        }}
        start={{ x: 0.5, y: 0.6 }}
        end={{ x: 0.5, y: 0.2 }}
        className="absolute    z-10  top-0"
      />
      {image}
    </View>
  );
};
