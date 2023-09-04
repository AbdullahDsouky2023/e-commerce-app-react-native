import { View } from "react-native";

const CustomDot = ({ selected }) => (
    <View
    className=' bottom-[530px] left-[50px] '
      style={{
        width: 12,
        height: 12,
        borderRadius:6 ,
        backgroundColor: selected ? '#FCD240' : 'lightgray',
        marginHorizontal: 3, 
      }}
    />
  );
  export default CustomDot