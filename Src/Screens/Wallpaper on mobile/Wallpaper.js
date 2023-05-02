import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

var number_json = require('../../../Jsonfile/number-details.json');
const Wallpaper = ({navigation}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [conductor_no, setConductor_no] = useState();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('conductor_no');

      console.log('value==>' + value2);

      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (value2 !== null) {
        // console.log('dno', value2);
        setConductor_no(value2);
      }
    } catch (e) {
      // console.log('notget', e);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#224079'}}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Blue_Drawer />
          <View>
            <Text style={styles.text1}>Numerology Report of</Text>
            <Text style={styles.text2}>
              {FirstName}
              {LastName}
            </Text>
          </View>
        </View>

        <View style={styles.back}>
          <Text style={styles.text3}>Wallpaper on Mobile</Text>
        </View>
        <View>
          {number_json.map(
            p =>
              p.No == conductor_no && (
                <Text
                  style={{
                    fontSize: 20,
                    color: '#FFFFFF',
                    fontFamily: fonts.ATR,
                    marginVertical: 20,
                    lineHeight: 40,
                    marginHorizontal: 20,
                  }}>
                  {p.WallpaperSuggestion} Star
                </Text>
              ),
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profession')}>
          <Backbtn_Blue />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Occultree')}>
          <Nextbtn_Blue />
        </TouchableOpacity>
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
