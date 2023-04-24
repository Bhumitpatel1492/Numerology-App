import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Style from '../../Utils/Style';
import fonts from '../../Utils/Fonts';
import Drawer from '../../../assets/Svg Image/Drawer_red';
import Number5_red from '../../../assets/Svg Image/Number5_red';
import {moderateScale} from '../../Utils/scalling';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';

const Mulyank = ({navigation, route}) => {
  // const {fname} = route.params; // first_name
  // const {lname} = route.params; // last_name

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF2F7'}}>
      <View style={styles.container}>
        <View style={Style.subcontainer}>
          <Drawer />
          <View>
            <Text style={styles.title}>Numerology Report of</Text>
            <Text Text style={styles.name}>
              Tejash Shash
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.view1}>
            <Number5_red />
            <View style={styles.view2}>
              <Text style={styles.text3}>Driver (Mulyank)</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 12}}>
            <Text style={styles.low}>Symptoms - Low Energy</Text>
            <Text style={styles.Mobile}>
              Mobile phones not working, tore pencil and pen without ink or
              refill and tore books has kept in house.
            </Text>
          </View>
          <View style={{marginHorizontal: 12, marginTop: 20}}>
            <Text style={styles.low}>Solutions - Low Energy</Text>
            <Text style={styles.Mobile}>
              Keep greenary or small plant near your work station and give daily
              water to it
            </Text>
          </View>
          <View style={{marginHorizontal: 12, marginTop: 20}}>
            <Text style={styles.low}>Enhance Mulyank</Text>
            <Text style={styles.Mobile}>
              Kindly repair them or change them and throw out from home.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriverDetails')}>
            <Backbtn />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriver1')}>
            <Nextbtn />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Mulyank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F7',
  },
  subcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // backgroundColor:'red'
  },
  title: {
    fontSize: 20,
    color: '#6B6B6B',
    opacity: 1,
    // fontStyle: 'normal',
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: 30,
    color: '#A02056',
    opacity: 1,
    textDecorationLine: 'underline',
    fontFamily: fonts.ATR,
  },
  view1: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  view2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
  },
  text3: {
    color: '#A02056',
    margin: 14,
    fontFamily: fonts.ATSBI,
    fontSize: moderateScale(32),
  },
  low: {
    fontSize: moderateScale(35),
    color: '#A02056',
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
