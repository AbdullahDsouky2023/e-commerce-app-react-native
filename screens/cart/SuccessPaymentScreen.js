import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import Success from "../../assets/payment/success.svg";

const { width, height } = Dimensions.get("window");
import { useState } from "react";
export default function SuccessPaymentScreen({ navigation }) {
  const [SelectedMethod, setSelectedMethod] = useState(null);
  const activeClass = "border-2 border-blue-300";
  return (
    <ScrollView
      style={{
        height: height * 10,
      }}
      className="bg-white flex mt-8 gap-8"
    >
      <View className='items-center '>
        <Success width={350}  height={350}/>
      </View>
      <View>

      </View>
      <View>
        <Text className='text-3xl font-semi text-center'>
            Payment success
        </Text>
        <Text className='text-sm  text-slate-6  mx-auto text-slate-400  max-w-[220px] 00 font-semi text-center'>
        Your order has been place
and will be deliver to you shortly.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 350,
          marginRight: 25,
        }}
        onPress={() => navigation.navigate("TrackPayment")}
        className="bg-[#FCD240]
           p-1  h-[65px]
           flex items-center 
           justify-center self-end
            rounded-xl   mt-14 mb-"
      >
        <Text className="text-lg font-bold">Track your parcel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 350,
          marginRight: 25,
        }}
        onPress={() => navigation.navigate("Home")}
        className="
           p-1  h-[65px]
           flex items-center 
           justify-center self-end
            rounded-xl   mt-4 mb-"
      >
        <Text className="text-lg font-bold">Home Page</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
