//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import fonts from '../../Utils/Fonts';
import Images from '../../Utils/Images';
import Style from '../../Utils/Style';
import {moderateScale} from '../../Utils/scalling';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';

const Rating = ({navigation, route}) => {
  // const {firstName} = route.params; // first_name
  // const {lastName} = route.params; // last_name
  return (
    <SafeAreaView style={Style.maincontainer}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Drawer2 />
          <View>
            <Text style={styles.title}>Numerology Report of</Text>
            <Text style={styles.name}>Tejash Shash</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageview}>
            <Image source={Images.number} style={styles.imgstyle} />
            <View>
              <Text style={styles.txt1}>Compatibility</Text>
              <Text style={styles.txt2}>Janmank & Bhagyank</Text>
            </View>
            <Image source={Images.number} style={styles.imgstyle} />
          </View>

          <View style={styles.rating}>
            <Text style={styles.txt3}>3 Stars</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginHorizontal: 22,
              }}>
              <Image source={Images.Green_Star} style={styles.start_img} />
              <Image source={Images.Green_Star} style={styles.start_img} />
              <Image source={Images.Green_Star} style={styles.start_img} />
              <Image source={Images.White_Star} style={styles.start_img} />
              <Image source={Images.White_Star} style={styles.start_img} />
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 25,
            }}>
            <Text style={[styles.txt2, {textAlign: 'center', lineHeight: 30}]}>
              This is a very lucky number to have. They will be very successful
              and quick in handling tasks. A prince got the company of prince in
              this number. We are getting two five here. They will adopt new
              methods to achieve the goals. Always willing & ready to help
              people, will earn huge respect and support from people. They have
              enough mental strength that they do not lose their balance when
              faced with problems. In case the name number mismatches, the
              success would not be as much as in case with a perfect name
              number. They will get into evil ways like womanizing, cheating,
              and conducting forgery etc..
            </Text>
          </View>
        </ScrollView>
        <View style={styles.arrow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriver1')}>
            <Leftbtn />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Bhagyank')}>
            <Rightbtn />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8fdff',
  },
  subcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  imageview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgstyle: {
    resizeMode: 'contain',
    height: moderateScale(120),
    width: moderateScale(140),
  },
  txt1: {
    fontSize: moderateScale(35),
    fontFamily: fonts.ATSBI,
    color: '#0096A5',
  },
  txt2: {
    fontSize: moderateScale(22),
    fontFamily: fonts.ATSBI,
    color: '#454545',
  },
  rating: {
    backgroundColor: '#FFFFFF',
    borderRadius: 80,
    marginHorizontal: 10,
    padding: 16,
    marginVertical: 16,
  },
  txt3: {
    color: '#454545',
    fontSize: moderateScale(32),
    textAlign: 'center',
    fontFamily: fonts.ATSBI,
  },
  start_img: {
    height: moderateScale(60),
    width: moderateScale(60),
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
