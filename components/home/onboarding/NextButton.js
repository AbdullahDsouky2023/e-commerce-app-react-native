import { TouchableOpacity } from "react-native";
import Arrow from "../../../assets/onboarding/arrow.svg";

const  NextButtonComponent = ({ ...props }) => {
    return (
      <TouchableOpacity className='bg-[#FCD240] p-4 w-[80px] h-[80px]
       flex items-center justify-center rounded-full absolute -top-[150px] 
       -left-[30vh]'>
        <Arrow />
      </TouchableOpacity>
    );
  };
  export default NextButtonComponent