import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import Number5 from '../../../assets/Svg Image/Number_5';
import {moderateScale} from '../../Utils/scalling';
import fonts from '../../Utils/Fonts';

const Bhagyank = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E8FDFF'}}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Drawer2 />
          <View>
            <Text style={styles.title}>Numerology Report of</Text>
            <Text style={styles.name}>TEJASH SHAH</Text>
          </View>
        </View>
        <View style={styles.view1}>
          <Number5 />
          <View style={styles.view2}>
            <Text
              style={{
                fontSize: moderateScale(28),
                color: '#A02056',
                fontFamily: fonts.ATSBI,
              }}>
              Conductor (Bhagyank)
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 12, marginTop: 20}}>
          <Text style={styles.low}>Enhance Bhagyank</Text>
          <Text style={styles.Mobile}>
            Keep the Greenery (small plant at your table) near by Your Work
            table and give water daily to it. Carry Green Ink pen in your
            pocket, write name with green pen daily.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
          <Leftbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Loshu_Grid')}>
          <Rightbtn />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8FDFF',
  },
  subcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#6B6B6B',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: 30,
    color: '#0096A5',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },
  view1: {
    marginVertical: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  view2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  text3: {
    fontSize: moderateScale(31),
    color: '#0096A5',
    fontFamily: fonts.ATSBI,
  },
  low: {
    fontSize: moderateScale(35),
    color: '#0096A5',
    fontFamily: fonts.ATSBI,
    lineHeight: 45,
  },
  Mobile: {
    fontSize: moderateScale(22),
    color: '#454545',
    lineHeight: 30,
    fontFamily: fonts.ATSBI,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Bhagyank;
