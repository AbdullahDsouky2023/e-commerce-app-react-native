import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabScreen from "../screens/Home/HomeTabScreen";
import Home from "../assets/Home/home.svg";
import { useIsFocused } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  const isFocused = useIsFocused();

  return (


    <Tab.Navigator >
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
                  size={32}
                  color={focused ? "#FCD240" : "black"}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={HomeTabScreen}
      />
      <Tab.Screen
        name="HomeTabScreen1"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`m1-2 bg-white`}>
                <Ionicons
                  name="home-outline"
                  size={32}
                  color={focused ? "#FCD240" : "black"}
                  />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={HomeTabScreen}
      />
      <Tab.Screen
        name="HomeTabScreen3"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`m1-2 bg-white`}>
                <Ionicons
                  name="home-outline"
                  size={32}
                  color={focused ? "#FCD240" : "black"}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={HomeTabScreen}
      />
     
    </Tab.Navigator>
  );
}
