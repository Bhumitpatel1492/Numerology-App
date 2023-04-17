import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Style from '../Utils/Style';
import {RadioButton} from 'react-native-paper';
import {moderateScale} from '../Utils/scalling';

const Checkbox = () => {
  const [checked, setChecked] = React.useState('');

  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        marginVertical: moderateScale(10),
      }}>
      <Text style={[Style.txt]}>Gender :</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          top: 2,
        }}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />

        <Text style={Style.txt}>Male</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          top: 4,
        }}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <Text style={Style.txt}>Female</Text>
      </View>
    </View>
  );
};

export default Checkbox;
