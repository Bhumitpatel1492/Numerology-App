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
import Lucky6 from '../../../assets/Svg Image/Lucky6';
import Style from '../../Utils/Style';
import Drawer from '../../../assets/Svg Image/Drawer_red';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';

const Number_6 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={Style.subcontainer}>
        <Drawer />
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <ScrollView>
        <View style={Style.middle}>
          <Lucky6 />

          <Text style={styles.txt2}>Missing</Text>
          <Text style={Style.Number_txt}>
            May be Poor Bonding With Home And Family / Weak Relationship Sector
            / May Face Marriage Problem / May Not Not Get The Support From The
            Society When They Need It The Most.
          </Text>
        </View>
      </ScrollView>
      <View style={Style.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Number_5')}>
          <Backbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_7')}>
          <Nextbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_6;

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

  txt2: {
    fontSize: moderateScale(60),
    fontFamily: fonts.ATSBI,
    color: '#8B1A1A',
    marginVertical: 15,
  },
});
