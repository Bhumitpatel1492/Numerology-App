import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Drawer from '../../../assets/Svg Image/Drawer_red';
import Onbording from '../../../assets/Svg Image/onbording';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import fonts from '../../Utils/Fonts';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../../Utils/scalling';

const ReportDriver = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#A02056'}}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.subcontainer}>
            <TouchableOpacity>
              <Drawer />
            </TouchableOpacity>

            <View>
              <Text style={styles.title}>Numerology Report of</Text>
              <Text style={styles.name}>TEJASH SHAH</Text>
            </View>
          </View>
          <View style={styles.image}>
            <Onbording />
          </View>
          <View>
            <Text style={styles.middlename}>Driver (Mulyank)</Text>
            <View style={{alignItems: 'center', marginHorizontal: 10}}>
              <Text style={styles.line}>
                The driver no. Shows what drives native in his life i.e. his
                desires and ambitions. They are based on the planet who is the
                lord of that number. This number works throughout his life and
                it cannt be changed.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Backbtn />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriverDetails')}>
            <Nextbtn />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles

export default ReportDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A02056',
  },
  subcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignSelf: 'stretch',
    bottom: 8,
  },
  txt: {
    fontSize: 16,
    color: '#E7C7D4',
    opacity: 1,
  },
  title: {
    fontSize: 20,
    color: '#FFAFAF',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: moderateScale(42),
    color: '#FFFFFF',
    opacity: 1,
    textDecorationLine: 'underline',
    fontFamily: fonts.ATSBI,
    // textTransform: 'uppercase',
  },
  middlename: {
    fontSize: 30,
    color: '#FFFFFF',
    opacity: 1,
    fontStyle: 'normal',
    textAlign: 'center',
    fontFamily: fonts.ATSBI,
  },
  line: {
    fontSize: moderateScale(26),
    color: '#E7C7D4',
    textAlign: 'center',
    marginHorizontal: 8,
    marginVertical: 10,
    lineHeight: 26,
  },
});
