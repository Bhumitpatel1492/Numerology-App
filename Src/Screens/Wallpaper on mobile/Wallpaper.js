import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from '../../Utils/scalling';
import fonts from '../../Utils/Fonts';
import Backbtn_Blue from '../../../assets/Svg Image/Backbtn_Blue';
import Nextbtn_Blue from '../../../assets/Svg Image/Nextbtn_Blue';
import Blue_Drawer from '../../../assets/Svg Image/Blue_Drawer';

// create a component
const Wallpaper = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#224079'}}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Blue_Drawer />
          <View>
            <Text style={styles.text1}>Numerology Report of</Text>
            <Text style={styles.text2}>TEJASH SHAH</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.back}>
            <Text style={styles.text3}>Wallpaper on Mobile</Text>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 30}}>
            <Text style={styles.Mobile}>
              You should keep a picture of the rising sun, yellow flowers,
              especially sun flowers, on your mobile wallpaper. The best will be
              sunrise wallpaper.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Profession')}>
            <Backbtn_Blue />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('occultree')}>
            <Nextbtn_Blue />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallpaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224079',
  },
  subcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text1: {
    fontSize: moderateScale(26),
    color: '#A7BDE8',
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
    backgroundColor: '#031D4E',
    borderRadius: 30,
    padding: 16,
    justifyContent: 'center',
    marginTop: 25,
    marginHorizontal: 10,
  },
  text3: {
    fontSize: moderateScale(45),
    color: '#A7BDE8',
    fontFamily: fonts.ATSBI,
    //margin: 14,
    alignSelf: 'center',
  },
  Mobile: {
    fontSize: moderateScale(22),
    color: '#FFFFFF',
    lineHeight: 30,
    fontFamily: fonts.ATSBI,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    bottom: 14,
  },
});
