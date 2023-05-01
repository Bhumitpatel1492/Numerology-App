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
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import Drawer from '../../../assets/Svg Image/Drawer_red';

const Number_4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={Style.subcontainer}>
        <Drawer />
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <View style={Style.middle}>
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
            {/* {driver_no} */}4
          </Text>
        </ImageBackground>
        <Text style={Style.Number_txt}>
          Good And Creative Brain/ Tend To Imagine Everything.
        </Text>
      </View>
      <View style={Style.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Number_3')}>
          <Backbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_5')}>
          <Nextbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_4;

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
