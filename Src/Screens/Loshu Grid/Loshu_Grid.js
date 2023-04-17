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
import GridView from '../../Components/GridView';
import Drawer_Blue from '../../../assets/Svg Image/Drawer_Blue';
import Left_bluebtn from '../../../assets/Svg Image/Left_bluebtn';
import Right_bluebtn from '../../../assets/Svg Image/Right_bluebtn';

const Loshu_Grid = ({navigation}) => {
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
              fontSize: moderateScale(40),
              color: '#AAA0CE',
              fontFamily: fonts.ATSBI,
            }}>
            Loshu Grid
          </Text>
        </View>
        <View>
          <GridView />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={[styles.txt2, {textAlign: 'center', lineHeight: 30}]}>
            Lo Shu Grid Numerology originated in China by an intelligent king.
            This Chinese numerology is based on the magic square of 3x3 in which
            the location of the digits does not change and its sum always comes
            to 15. In this, it is seen, which number is present and which is
            missing, and how many times a digit has been repeated. From this, Lo
            Shu grid prediction can be told about a person’s life, can tell
            which energy is lacking or excess.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('ReportDriver1')}>
          <Left_bluebtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MentalYog')}>
          <Right_bluebtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loshu_Grid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1E5C',
  },
  subcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: '#AAA0CE',
    opacity: 0.8,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: 30,
    color: '#FFFFFF',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },
  background: {
    height: moderateScale(80),
    backgroundColor: '#00000099',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  txt2: {
    fontSize: moderateScale(24),
    fontFamily: fonts.ATSBI,
    color: '#AAA0CE',
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
