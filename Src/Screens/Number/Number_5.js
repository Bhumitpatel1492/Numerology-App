import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import Drawer_green from '../../../assets/Svg Image/Drawer_green';
import Style from '../../Utils/Style';
import Lucky5 from '../../../assets/Svg Image/Lucky5';
import Left_greenbtn from '../../../assets/Svg Image/Left_greenbtn';
import Right_greenbtn from '../../../assets/Svg Image/Right_greenbtn';

const Number_5 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={Style.subcontainer}>
        <Drawer_green />
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <View style={Style.middle}>
        <Lucky5 />
        <Text style={Style.Number_txt}>
          Highly Romantic/ Always Young At Heart/ Intense, Determined/ Lazy and
          Always Motivate and Inspire Others
        </Text>
      </View>
      <View style={Style.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Number_4')}>
          <Left_greenbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_6')}>
          <Right_greenbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E4F4',
  },

  title: {
    fontSize: 20,
    color: '#8175AC',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: 30,
    color: '#2C1E5C',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },
});
