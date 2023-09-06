import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
    codeFieldRoot: {
    marginTop: 20,
    marginHorizontal:10
},
  
});

const CELL_COUNT = 5;

const VerifyScreen = ({navigation,route}) => {
    const {width,height}=Dimensions.get('window')
  const [value, setValue] = useState('');
  const targetScreen = route.params?.targetScreen || 'Home';
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={{
        height:height*10
    }}
    className='p-4 pt-16 bg-white flex gap-4'
    >
      <Text className='text-3xl text-bold mb-2'>Verify it's you</Text>
      <Text className='text-md text-slate-400'>We have send a verification code to your email
please enter the code below.</Text>
      <CodeField
        ref={ref}
        {...props}
        
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}   
            className={`bg-[#F9FAFB] text-2xl 
            w-[65px]
             h-[65px] py-4
             text-center
${isFocused && 'border-2 border-[#FCD240]' }
              rounded-md `}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Text className='text-md mt-4 text-slate-400'>You can resend the code after 1 minute ( 00:56 )</Text>
    <TouchableOpacity
    onPress={()=>navigation.navigate(targetScreen)}
     className='bg-[#FCD240] flex items-center p-4 rounded-lg'>
        <Text className='text-xl font-extrabold'>
            Confirm
        </Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyScreen;