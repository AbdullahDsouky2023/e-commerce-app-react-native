import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";

const { width, height } = Dimensions.get("window");
import GoBackButton from "../../components/Categories/GoBackButton";
import StepTrack from "../../components/cart/StepTrack";
export default function TrackPaymentScreen({ navigation }) {
  const TrackDetials=[
    {
        name:"Pick-up request accepted",
        date:'9:10 AM, 19 june 2022',
        iconName:'checkmark',
        color:'green-400',
        showStep:true
    },
    {
        name:"Product picked & started journey",
        date:'12:40 PM, 19 june 2022',
        iconName:'checkmark',
        color:'slate-400',
        showStep:true

    },
    {
        name:"Dispatch in local warehouse",
        date:'1:10 AM, 20 june 2022',
        iconName:'gift',
        color:'green-400',
        showStep:true

    },
    {
        name:"Pick-up request accepted",
        date:'9:10 AM, 29 june 2022',
        iconName:'heart',
        color:'slate-400',
        showStep:false

    },
  ]
    return (
    <ScrollView
      style={{
        height: height * 10,
      }}
      className="bg-white relative flex px-6 gap-2"
    >
      <View className="p-8 flex gap-2 text-center items-center">
        <Text className="text-3xl font-bold">Delivery status</Text>
        <Text className="text-slate-400">Estimate delivery</Text>
        <Text className="text-md font-bold">03 june 2023: 05:30 PM</Text>
      </View>
      <View className="flex border-b-[1px] pb-4 border-slate-400 justify-between flex-row mx-4 items-center">
        <Text className="text-lg font-bold">Track order</Text>
        <Text className="text-slate-500">NYC1054C</Text>
      </View>
      <View className='p-4'>
        {
            TrackDetials.map((step)=>(
                <StepTrack key={step.date} details={step}/>
            ))
        }
      </View>
      <TouchableOpacity
        style={{
          width: 350,
          marginRight: 2,
        }}
        onPress={() => navigation.navigate("Home")}
        className="bg-[#FCD240]
       p-1  h-[65px]
       self-end
       flex items-center 
       justify-center 
        rounded-xl  mt-14 mb-8"
      >
        <Text className="text-lg font-bold">Continue Shopping</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
