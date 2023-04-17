import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Drawer2_Purple from '../../assets/Svg Image/Drawer2_Purple';
import {moderateScale} from '../Utils/scalling';
import fonts from '../Utils/Fonts';
import Style from '../Utils/Style';
import Round from '../../assets/Svg Image/Round';
import Backbtn_Purple from '../../assets/Svg Image/Backbtn_Purple';
import Nextbtn_Purple from '../../assets/Svg Image/Nextbtn_Purple';

const Profession = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#69325E'}}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Drawer2_Purple />
          <View>
            <Text style={styles.text1}>Numerology Report of</Text>
            <Text style={styles.text2}>TEJASH SHAH</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.back}>
            <Text style={styles.text3}>Profession</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Communication</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Sales</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Digital Marketing</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Motivational Speaker </Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Very Successful</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Arts</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Writing</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Speaking</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Commission</Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Machine Manufacturing </Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Accountant </Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Teacher </Text>
          </View>
          <View style={styles.round}>
            <Round />
            <Text style={Style.text4}>Astrologer</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Number_9')}>
            <Backbtn_Purple />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wallpaper')}>
            <Nextbtn_Purple />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69325E',
    marginHorizontal: 10,
  },
  subcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text1: {
    fontSize: moderateScale(26),
    color: '#E6C6E0',
    fontFamily: fonts.ATSBI,
  },
  text2: {
    fontSize: moderateScale(39),
    color: '#FFFFFF',
    lineHeight: 42,
    textDecorationLine: 'underline',
    fontFamily: fonts.ATSBI,
  },
  back: {
    backgroundColor: '#500942',
    borderRadius: 30,
    flex: 0.1,
    justifyContent: 'center',
    marginTop: 25,
  },
  text3: {
    fontSize: moderateScale(45),
    color: '#E6C6E0',
    fontFamily: fonts.ATSBI,
    //margin: 14,
    alignSelf: 'center',
  },
  round: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
