import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabScreen from "../screens/Home/HomeTabScreen";
import Home from "../assets/Home/home.svg";
import { useIsFocused } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CategorisScreen from "../screens/categoris/CategorisScreen";
import NotificationScreen from "../screens/Home/NotificationScreen.js";
import CartScreen from "../screens/cart/CartScreen";
import ShippingDetails from "../screens/Home/product/ShippingDetails";



const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  const isFocused = useIsFocused();

  return (


    <Tab.Navigator 
    screenOptions={
      {
        headerBackgroundContainerStyle:'red'
      }
    }>
      <Tab.Screen
        name="HomeTabScreen"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`m1-2 bg-white`}>
                <Ionicons
                  name="home-outline"
                  size={25}
                  color={focused ? "#FCD240" : "gray"}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={HomeTabScreen}
      />
      <Tab.Screen
        name="Categoris"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`m1-2 bg-white`}>
                <Ionicons
                  name="apps-outline"
                  size={25}
                  color={focused ? "#FCD240" : "gray"}
                  />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={CategorisScreen}
      />
      <Tab.Screen
        name="NotificationScreen"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`m1-2 bg-white`}>
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color={focused ? "#FCD240" : "gray"}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={NotificationScreen}
      />
     
      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`m1-2 bg-white`}>
                <Ionicons
                  name="cart-outline"
                  size={25}
                  color={focused ? "#FCD240" : "gray"}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={CartScreen}

     />
             
     
    </Tab.Navigator>
  );
}
