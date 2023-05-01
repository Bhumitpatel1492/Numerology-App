import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import Style from '../../Utils/Style';
import Lucky1 from '../../../assets/Svg Image/Lucky1';
import Drawer_green from '../../../assets/Svg Image/Drawer_green';
import Left_greenbtn from '../../../assets/Svg Image/Left_greenbtn';
import Right_greenbtn from '../../../assets/Svg Image/Right_greenbtn';
import Images from '../../Utils/Images';

const Number_1 = ({navigation}) => {
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
            {/* {driver_no} */}1
          </Text>
        </ImageBackground>

        <Text style={Style.Number_txt}>
          Excellent Communication & Orator/ Articulate / Impartial{' '}
        </Text>
      </View>
      <View style={Style.arrow}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Loshu_GridNumber')}>
          <Left_greenbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_2')}>
          <Right_greenbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_1;

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
