import { Dimensions, Text,View} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Screen2 from "../assets/onboarding/screen2.svg";
import Chair from "../assets/onboarding/chair.svg";
import Desk from "../assets/onboarding/desk.svg";
import { LinearGradient } from "expo-linear-gradient";
import DoneButton from "../components/home/onboarding/DoneButton";
import NextButtonComponent from "../components/home/onboarding/NextButton";
import CustomDot from "../components/home/onboarding/CustomDot";
const {width,height} = Dimensions.get('window')
export default function OnboardingScreen() {

  return (
    <View className="bg-red-40 flex min-h-[100vh] relative">
      <Onboarding
        pages={[
          {
            backgroundColor: "#83A9AC",
            image: (
              <View className="  relative items-start justify-start">
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                  style={{
                    width: 1000,
                    height: 200,
                    bottom: 0,
                    position: "absolute",
                    zIndex: 100,
                  }}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  className="absolute   top-[230px] -left-[500px] bottom-0"
                />
                <View className="absolute z-10 -left-[500px] min-w-[400px]  -top-[400px]">
                  <Screen2 />
                </View>
              </View>
            ),
            title: (
              <View className="p-4 flex gap-4 absolute  z-10 top-0 -left-[10px] mt-10">
                <Text className="text-5xl font-bold max-w-[300px]">
                  New designs everyday
                </Text>
                <Text className="text-slate-200 ">
                  Shopee adds new designs every day. Explore and find the best
                  furniture for ypur home and offices.
                </Text>
              </View>
            ),
            subtitle: "",
          },
          {
            backgroundColor: "#81ADC0",
            image: (
              <View className="  relative items-start justify-start">
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                  style={{
                    width: 1000,
                    height: 200,
                    bottom: 0,
                    position: "absolute",
                    zIndex: 100,
                  }}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  className="absolute   top-[250px] -left-[500px] bottom-0"
                />
                <View
                  className="absolute   z-10  -left-[200px] w-[400px]  
                 -top-[200px]"
                >
                  <Chair />
                </View>
              </View>
            ),
            title: (
              <View className="p-4 flex gap-4 absolute  z-10 top-0 -left-[10px] mt-10">
                <Text className="text-5xl font-bold max-w-[300px]">
                  Better quality
                </Text>
                <Text className="text-slate-200 ">
                  Shopee adds new designs every day. Explore and find the best
                  furniture for ypur home and offices.
                </Text>
              </View>
            ),
            subtitle: "",
          },
          {
          
            backgroundColor: "#83A9AC",
            image: (
              <View 
              className="  relative items-start justify-start">
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                  style={{
                    width: 1000,
                    height: 200,
                    bottom: 0,
                    position: "absolute",
                    zIndex: 100,
                  }}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  className="absolute   top-[250px] -left-[500px] bottom-0"
                />
                <View
                 className=" absolute z-10  -left-[235px]    -top-[350px]">
                  <Desk size={500} />
                </View>
              </View>
            ),
            title: (
              <View className="p-4 flex gap-4 absolute  z-10 top-0 -left-[10px] mt-10">
                <Text className="text-5xl  max-w-[300px]">
                  Fastest home delivery
                </Text>
                <Text className="text-slate-100  ">
                  Shopee adds new designs every day. Explore and find the best
                  furniture for ypur home and offices.
                </Text>
              </View>
            ),
            subtitle: "",
          },
        ]}
        NextButtonComponent={NextButtonComponent}
        bottomBarHeight={0}
        showSkip={false}
        DoneButtonComponent={DoneButton}
        DotComponent={CustomDot}
      />
    </View>
  );
}
