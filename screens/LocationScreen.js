import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";
import Map from "../assets/location/map.svg";
import LocationImage from "../assets/location/location.svg";


export default function LocationScreen({navigation}) {
  const { width, height } = useWindowDimensions();
  const [address, setAddress] = useState(null);
  async function requestLocationPermission() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Location permission denied");
        return;
      }
    } catch (error) {
      console.error("Error requesting location permission:", error);
    }
  }
  const reverseGeoCode = async (location) => {
    try {
      const reverGeoCodeAdress = await Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });
      setAddress(reverGeoCodeAdress[0]);
    } catch {}
  };

  async function getUserLocation() {
    try {
      await requestLocationPermission();
      const location = await Location.getCurrentPositionAsync({});
      await reverseGeoCode(location);
      console.log("User location:", location);
      console.log("User location:", address);
    } catch (error) {
      console.error("Error getting user location:", error);
    }
  }
  return (
    <View
      style={{
        height: height * 10,
      }}
      className="bg-white pt-16 px-4 flex gap-16"
    >
      <View>

      <Text className="text-3xl font-extrabold">Location access</Text>
      <Text className="text-md mt-2 pr-3 text-[#b3b2b2]">
        Arino needs to know your location in order to give you better shopping
        and delivery experience.
      </Text>
      </View>
      {address ? (
        <View className=' bg-[#F9FAFB] flex  flex-row px-2 pb-4 items-center  gap-4 rounded-lg '>
          <LocationImage/>
          <Text className='text-lg capitalize '>{address.city}, {address.country}</Text>

        </View>
      ):
      <View className='px-10 mt-16'>
        <Map/>
      </View>
      }

      <TouchableOpacity
        onPress={() => address?navigation.navigate('SignUp'):getUserLocation()}
        className="bg-[#FCD240]
       p-1 w-[350px] h-[65px]
       flex items-center 
       justify-center
        rounded-xl   mt-14 mb-8"
      >
        <Text className="text-xl font-bold">{address?'Confirm':'Find my location'}</Text>
      </TouchableOpacity>
      
      
     
    </View>
  );
}
