import { Text, View } from "react-native";
import Star from "../../assets/images/star.svg";
import White from "../../assets/images/whiteball.svg";
export default function MenuCard(
    {children,name,rate,type,bg}
    ) {
  return (
    <View className="flex flex-row gap-2 mt-1 mr-4">
          <View
          style={{

            backgroundColor:bg
          }}
           className={`bg-[#C9EAFD] mt-4 max-w-[400px] p-4 flex  rounded-md `}>
            <View className="mx-auto py-8 ">
                {children}
            </View>
            <Text className="text-2xl text-neutral-800  font-bold">
             {name}
            </Text>
            <View className="flex gap-2 mt-1 flex-row items-center justify-start">
              <View className="items-center flex flex-row gap-1">
                <Star size={45} />
                <Text className="font-bold">{rate}</Text>
              </View>
              <View className="items-center flex flex-row gap-1">
                <White size={45} fill="blue" />
                <Text className="font-bold">$$$</Text>
              </View>
            </View>
            <View className="flex gap-2 mt-1 flex-row items-center justify-start">
              <View className="items-center flex flex-row gap-1">
                <Text className="font-thin">Restaurant</Text>
              </View>
              <View className="items-center flex flex-row gap-1">
                <White size={45} fill="blue" />
                <Text className="font-thin pl-1">{type}</Text>
              </View>
            </View>
          </View>
        </View>
  )
}