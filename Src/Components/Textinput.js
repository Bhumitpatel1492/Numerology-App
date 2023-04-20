import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {moderateScale} from '../Utils/scalling';
import fonts from '../Utils/Fonts';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  keyboardType,
  maxLength,
}) => {
  return (
    <View style={{marginVertical: 4, marginHorizontal: 20}}>
      <Text style={{fontFamily: fonts.ATSBI, fontSize: moderateScale(24)}}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={{
          borderWidth: 1,
          height: moderateScale(80),
          // marginHorizontal: 22,
          borderRadius: 5,
          borderColor: '#9D8081',
        }}
        maxLength={maxLength}
      />
    </View>
  );
};

export default CustomTextInput;
