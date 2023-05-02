import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import {moderateScale} from '../../Utils/scalling';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import Drawer_Blue from '../../../assets/Svg Image/Drawer_Blue';
import Left_bluebtn from '../../../assets/Svg Image/Left_bluebtn';
import Right_bluebtn from '../../../assets/Svg Image/Right_bluebtn';
import Images from '../../Utils/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const yogs_json = require('../../../Jsonfile/yogs-details.json');
const RajYog = ({navigation}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();

  var seven = 0;
  var eight = 0;

  useEffect(() => {
    getData();
  });

  function getOccurrence(arr, value) {
    var count = 0;
    arr.forEach(v => v === value && count++);
    return count;
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('allnumbers');

      var abc = value2.replace(/['"]+/g, '');

      var myarr = [];
      myarr = `${abc}`.split('').map(Number);

      var arr = [1, 1, 1, 1];
      var str = String(abc);

      seven = getOccurrence(arr, 7);
      eight = getOccurrence(arr, 8);
      // var nine = getOccurrence(arr, 9);

      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
    } catch (e) {
      console.log('notget', e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity>
          <Drawer_Blue />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>
            {FirstName}
            {LastName}
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <Text
            style={{
              fontSize: moderateScale(32),
              color: '#2C1E5C',
              fontFamily: fonts.ATSBI,
            }}>
            Strengths & Weaknesses
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View>
            <ImageBackground
              source={Images.Bg_percentage}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.Bg_txt}>33%</Text>
            </ImageBackground>
          </View>
          <View>
            <Text style={styles.txt2}>Raj Yog</Text>
            <Text style={styles.txt3}>Line of Luck</Text>
          </View>
        </View>
        {yogs_json.map(
          p =>
            p['No.'] == 7 &&
            p.Times == seven && (
              <Text
                style={{
                  fontSize: 20,
                  color: '#454545',
                  fontFamily: fonts.ATR,
                  marginHorizontal: 15,
                }}>
                {p.Details}
              </Text>
            ),
        )}

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <View>
            <ImageBackground
              source={Images.Bg_percentage}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.Bg_txt}>100%</Text>
            </ImageBackground>
          </View>
          <View>
            <Text style={styles.txt2}>Property Yog</Text>
            <Text style={styles.txt3}>Line of Property</Text>
          </View>
        </View>
        {yogs_json.map(
          p =>
            p['No.'] == 8 &&
            p.Times == eight && (
              <Text
                style={{
                  fontSize: 20,
                  color: '#454545',
                  fontFamily: fonts.ATR,
                  marginHorizontal: 18,
                }}>
                {p.Details}
              </Text>
            ),
        )}
      </ScrollView>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('WellPowerYog')}>
          <Left_bluebtn />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Loshu_GridNumber')}>
          <Right_bluebtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RajYog;

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
    fontSize: moderateScale(20),
    color: '#8175AC',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: moderateScale(30),
    color: '#2C1E5C',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },
  background: {
    height: moderateScale(80),
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  txt: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: fonts.ATR,
  },
  round: {
    height: moderateScale(150),
    backgroundColor: '#2C1E5C',
    width: moderateScale(150),
    borderRadius: 42,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txt2: {
    fontSize: moderateScale(34),
    color: '#2C1E5C',
    fontFamily: fonts.ATR,
  },
  txt3: {
    fontSize: moderateScale(22),
    color: '#454545',
    fontFamily: fonts.ATSBI,
    opacity: 0.8,
  },
  line: {
    fontFamily: fonts.ATSBI,
    color: '#454545',
    textAlign: 'left',
    marginHorizontal: 18,
    lineHeight: 26,
    marginVertical: 12,
    opacity: 0.8,
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // marginVertical: 10,
    alignSelf: 'stretch',

    bottom: 10,
  },
  image: {
    alignSelf: 'center',
    height: 92,
    width: 100,

    justifyContent: 'center',
  },
  Bg_txt: {
    fontSize: 32,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: fonts.ATR,
  },
});
