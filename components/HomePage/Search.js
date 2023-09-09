// import { View, Text, TextInput } from 'react-native'
// import Ionicons from "@expo/vector-icons/Ionicons";

// export default function Search() {
//   return (
//     <View className="bg-[#F9FAFB] flex-row p-3 mx-4 left-[10px]  rounded-full">
//     <TextInput placeholder="Search" className="w-[300px]" />
//     <Ionicons name="search-outline" size={23} color={"gray"} />
//   </View>
//   )
// }
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Animated } from 'react-native';

function SearchComponent() {
  const [expanded, setExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const animatedValue = new Animated.Value(0);

  // Your additional elements that will be displayed
  // when the search input is clicked

  return (
    <View>
      <TouchableOpacity onPress={() => handleExpand()}>
        <TextInput
          style={{
            // Style for the search input when it's not expanded
          }}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onFocus={() => handleExpand()}
        />
      </TouchableOpacity>
      {expanded && (
        <Animated.View
          style={{
            // Use animatedValue to move the input to the top
            // Style for the additional elements
          }}
        >
          {/* Additional elements */}
        </Animated.View>
      )}
    </View>
  );
}
