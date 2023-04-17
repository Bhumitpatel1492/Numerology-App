import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {moderateScale} from '../Utils/scalling';
import fonts from '../Utils/Fonts';

const DateCollect = ({
  label,
  value,
  onChangeText,
  style,
  keyboardType,
  maxLength,
}) => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontFamily: fonts.ATSBI,
          fontSize: moderateScale(24),
        }}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};

export default DateCollect;
