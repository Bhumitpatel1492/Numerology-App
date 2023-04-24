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

const WellPowerYog = ({navigation}) => {
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
              fontSize: moderateScale(32),
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
            marginTop: 20,
          }}>
          <View style={styles.round}>
            <Text style={styles.txt}>33%</Text>
          </View>
          <View>
            <Text style={styles.txt2}>Well Power Yog</Text>
            <Text style={styles.txt3}>Line of Will</Text>
          </View>
        </View>
        <Text style={styles.line}>
          Your will power is very strong, you can adjust with any situation. You
          can bounce back from difficult situations. Your determination and
          fighting spirits are very good. work hard for your success which you
          will get.
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
            <Text style={styles.txt2}>Action Yog</Text>
            <Text style={styles.txt3}>Line of Action</Text>
          </View>
        </View>
        <Text style={[styles.line, {bottom: 30}]}>
          You are action oriented and take action easily some time without
          thinking.
        </Text>
      </ScrollView>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Prectice')}>
          <Left_bluebtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RajYog')}>
          <Right_bluebtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WellPowerYog;

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
    fontSize: moderateScale(20),
    color: '#8175AC',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: moderateScale(30),
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
    marginVertical: 15,
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
    fontSize: moderateScale(34),
    color: '#2C1E5C',
    fontFamily: fonts.ATR,
  },
  txt3: {
    fontSize: moderateScale(22),
    color: '#454545',
    fontFamily: fonts.ATSBI,
    opacity: 0.8,
  },
  line: {
    fontFamily: fonts.ATSBI,
    color: '#454545',
    textAlign: 'left',
    marginHorizontal: 18,
    lineHeight: 26,
    marginVertical: 12,
    opacity: 0.8,
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // marginVertical: 10,
    alignSelf: 'stretch',
    bottom: 10,
  },
});
