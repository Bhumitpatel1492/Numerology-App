import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import Images from '../../Utils/Images';
import Style from '../../Utils/Style';
import Drawer_green from '../../../assets/Svg Image/Drawer_green';
import Left_greenbtn from '../../../assets/Svg Image/Left_greenbtn';
import Right_greenbtn from '../../../assets/Svg Image/Right_greenbtn';
import Lucky2 from '../../../assets/Svg Image/Lucky2';

const Number_2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={Style.subcontainer}>
        <TouchableOpacity>
          <Drawer_green />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <View style={Style.middle}>
        <ImageBackground
          source={Images.Bg_number}
          resizeMode="cover"
          style={styles.image}>
          <Text
            style={{
              fontSize: 150,
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
            {/* {driver_no} */}2
          </Text>
        </ImageBackground>
        <Text style={Style.Number_txt}>
          Sensitive And Good Intuition But May Not Use It Or Are Unable To Use
          It
        </Text>
      </View>
      <View style={Style.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Number_1')}>
          <Left_greenbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_3')}>
          <Right_greenbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_2;

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
  image: {
    alignSelf: 'center',
    height: 310,
    width: 280,
    marginTop: 10,
    justifyContent: 'center',
  },
});
