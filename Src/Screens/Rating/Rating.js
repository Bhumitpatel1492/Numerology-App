import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import fonts from '../../Utils/Fonts';
import Images from '../../Utils/Images';
import Style from '../../Utils/Style';
import {moderateScale} from '../../Utils/scalling';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const number_json = require('../../../Jsonfile/mulyank-bhaagyank-combination.json');

const Rating = ({navigation, route}) => {
  const isFocused = useIsFocused();

  const [list, setlist] = useState(number_json);
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [v_total, setV_Total] = useState();
  const [driver_no, setDriver_No] = useState();
  const [conductor_no, setConductor_No] = useState();
  console.log('v_total=======>' + v_total);
  var combine_number;

  useEffect(() => {
    if (isFocused) {
      setlist();
      getData();
      setFirstName();
      setLastName();
      setDriver_No();
      setConductor_No();
    }
  }, [isFocused]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');

      const value2 = await AsyncStorage.getItem('v_total');
      const value3 = await AsyncStorage.getItem('driver_no');
      const value4 = await AsyncStorage.getItem('conductor_no');
      console.log('ccccccc====>' + value4);
      const sum = JSON.parse(value2);
      // combine_number = 62;
      // console.log('combine_number', combine_number);

      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (sum !== null) {
        setV_Total(sum);
      }
      if (value3 !== null) {
        setDriver_No(value3);
      }
      if (value4 !== null) {
        setConductor_No(value4);
      }
      // console.log('set_v_value===>' + value2);
      // console.log('parint===>' + parseInt(value2));
      console.log('SUm====>', value3);
    } catch (e) {
      console.log('notget', e);
    }
  };

  return (
    // <SafeAreaView style={Style.maincontainer}>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Drawer2 />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>
            {FirstName}
            {LastName}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.imageview}>
          <ImageBackground
            source={Images.Bg_green}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.Bg_txt}>{driver_no}</Text>
          </ImageBackground>
          <View>
            <Text style={styles.txt1}>Compatibility</Text>
            <Text style={styles.txt2}>Janmank & Bhagyank</Text>
          </View>
          <ImageBackground
            source={Images.Bg_green}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.Bg_txt}>{conductor_no}</Text>
          </ImageBackground>
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            // justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 18,
            borderRadius: 40,
            marginVertical: 10,
          }}>
          <View>
            {number_json.map(
              p =>
                p.MB == v_total && (
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#454545',
                      fontFamily: fonts.ATR,
                    }}>
                    {p.Ranking} Star
                  </Text>
                ),
            )}
          </View>
          <View>
            {number_json.map(
              p =>
                p.MB == v_total && (
                  <Text style={{fontSize: 32, color: '#0096A5'}}>
                    {p.Stars}
                  </Text>
                ),
            )}
          </View>
        </View>

        <View>
          {number_json.map(
            p =>
              p.MB == v_total && (
                <Text
                  style={{
                    fontSize: 18,
                    color: '#454545',
                    marginHorizontal: 18,
                    lineHeight: 26,
                  }}>
                  {p.Remarks}
                </Text>
              ),
          )}
        </View>
      </ScrollView>

      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('ReportDriver1')}>
          <Leftbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bhagyank')}>
          <Rightbtn />
        </TouchableOpacity>
      </View>
    </View>
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
    // backgroundColor: 'red',
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
    // backgroundColor: 'green',
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
    // alignSelf: 'stretch',

    bottom: 20,
  },
  image: {
    alignSelf: 'center',

    height: 92,
    width: 84,

    justifyContent: 'center',
  },
  Bg_txt: {
    fontSize: 32,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: fonts.ATSBI,
  },
});
