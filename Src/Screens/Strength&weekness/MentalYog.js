import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import {moderateScale} from '../../Utils/scalling';
import Drawer_Blue from '../../../assets/Svg Image/Drawer_Blue';
import Left_bluebtn from '../../../assets/Svg Image/Left_bluebtn';
import Right_bluebtn from '../../../assets/Svg Image/Right_bluebtn';

const MentalYog = ({navigation}) => {
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
            <Text style={styles.txt2}>Mental Yog</Text>
            <Text style={styles.txt3}>Line of Mental Capability</Text>
          </View>
        </View>
        <Text style={styles.line}>
          Your Mental Strength is good, Your Memory is good, Think differently
          than others
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
            <Text style={styles.txt2}>Emotional Yog</Text>
            <Text style={styles.txt3}>Line of Emotions</Text>
          </View>
        </View>
        <Text style={[styles.line, {bottom: 30}]}>
          You are very much emotional. Line of emotion shows that you are a good
          person. You can do your work peacefully without getting distracted.
          Your heart rules over the heads. You have golden heart. you can trust
          easily.
        </Text>
      </ScrollView>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Loshu_Grid')}>
          <Left_bluebtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Prectice')}>
          <Right_bluebtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MentalYog;

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
    fontSize: moderateScale(20),
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
