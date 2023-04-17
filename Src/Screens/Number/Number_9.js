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
import {moderateScale} from '../../Utils/scalling';
import Drawer_green from '../../../assets/Svg Image/Drawer_green';
import Left_greenbtn from '../../../assets/Svg Image/Left_greenbtn';
import Right_greenbtn from '../../../assets/Svg Image/Right_greenbtn';
import Lucky9 from '../../../assets/Svg Image/Lucky9';

const Number_9 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Drawer_green />
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <View style={styles.middle}>
        <Lucky9 />
        <Text style={styles.txt}>
          Intelligent And Think That They Are The Best/ Try To Prove Their
          Point.
        </Text>
      </View>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Number_8')}>
          <Left_greenbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profession')}>
          <Right_greenbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E4F4',
  },
  subcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignSelf: 'stretch',
    bottom: 20,
  },
  txt: {
    fontSize: moderateScale(45),
    textAlign: 'center',
    fontFamily: fonts.ATSBI,
    lineHeight: 45,
    marginVertical: 25,
  },
});
