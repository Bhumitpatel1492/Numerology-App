import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import {moderateScale} from '../../Utils/scalling';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import Drawer_Blue from '../../../assets/Svg Image/Drawer_Blue';
import Left_bluebtn from '../../../assets/Svg Image/Left_bluebtn';
import Right_bluebtn from '../../../assets/Svg Image/Right_bluebtn';

const RajYog = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Drawer_Blue />
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <Text
            style={{
              fontSize: moderateScale(35),
              color: '#2C1E5C',
              fontFamily: fonts.ATSBI,
            }}>
            Strengths & Weaknesses
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <View style={styles.round}>
            <Text style={styles.txt}>33%</Text>
          </View>
          <View>
            <Text style={styles.txt2}>Raj Yog</Text>
            <Text style={styles.txt3}>Line of Luck</Text>
          </View>
        </View>
        <Text style={styles.line}>
          You do not like to use facts, figures and logic You have a practical
          approach and not like to get into depth of the situation by asking
          questions. Try not to leave tasks unfinished.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <View style={styles.round}>
            <Text style={styles.txt}>100%</Text>
          </View>
          <View>
            <Text style={styles.txt2}>Property Yog</Text>
            <Text style={styles.txt3}>Line of Property</Text>
          </View>
        </View>
        <Text style={[styles.line, {bottom: 30}]}>
          Your farsightedness is average along with the thinking process. You
          are not good in planning and organization. You are a creative person
          or a visualizer.
        </Text>
      </ScrollView>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('WellPowerYog')}>
          <Left_bluebtn />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Loshu_GridNumber')}>
          <Right_bluebtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RajYog;

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
  background: {
    height: moderateScale(80),
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  txt: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: fonts.ATR,
  },
  round: {
    height: moderateScale(150),
    backgroundColor: '#2C1E5C',
    width: moderateScale(150),
    borderRadius: 42,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txt2: {
    fontSize: moderateScale(42),
    color: '#2C1E5C',
    fontFamily: fonts.ATR,
  },
  txt3: {
    fontSize: moderateScale(28),
    color: '#454545',
    fontFamily: fonts.ATSBI,
  },
  line: {
    fontFamily: fonts.ATSBI,
    color: '#454545',
    textAlign: 'left',
    marginHorizontal: 18,
    lineHeight: 26,
    marginVertical: 12,
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // marginVertical: 10,
    alignSelf: 'stretch',

    bottom: 20,
  },
});
