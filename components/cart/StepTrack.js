import {
    View,
    Text,
  } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import Dots from "../../assets/payment/dots.svg";
  
export default function StepTrack({details}) {
  const {name,date,iconName,color,showStep}=details
  return (
    <View className="flex flex-row gap-2">
    <View className='flex items-center gap-1'>
    <View className={`bg-${color} flex flex-row  w-[28px] h-[30px]  items-center justify-center rounded-full`}>
      <Ionicons name={iconName} color={"white"} size={20} />
    </View>
    {
      showStep && 
      <Dots/>
    }
    </View>
    <View className="flex flex-col ">
      <Text className='font-bold mb-1'>{name}</Text>
      <View className="flex flex-row items-center  gap-1">
        <Ionicons name="time-outline" color={"gray"} size={20} />

        <Text className="text-slate-400 text-xs">
        {date}
        </Text>
      </View>
    </View>
  </View>
  )
}