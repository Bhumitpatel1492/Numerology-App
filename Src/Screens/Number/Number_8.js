import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import {moderateScale} from '../../Utils/scalling';
import Drawer from '../../../assets/Svg Image/Drawer_red';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import Lucky8 from '../../../assets/Svg Image/Lucky8';
import Images from '../../Utils/Images';

const Number_8 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Drawer />
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <View style={styles.middle}>
        <ImageBackground
          source={Images.Bg_Red_number}
          resizeMode="cover"
          style={styles.image}>
          <Text
            style={{
              fontSize: 150,
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
            {/* {driver_no} */}8
          </Text>
        </ImageBackground>
        <Text style={styles.txt}>
          May be Poor In Financial Management / Spend Thrift
        </Text>
      </View>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Number_7')}>
          <Backbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_9')}>
          <Nextbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_8;

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
  image: {
    alignSelf: 'center',
    height: 310,
    width: 280,
    marginTop: 10,
    justifyContent: 'center',
  },
});
