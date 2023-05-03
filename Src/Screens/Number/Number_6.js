import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import Style from '../../Utils/Style';
import Lucky1 from '../../../assets/Svg Image/Lucky1';
import Drawer_green from '../../../assets/Svg Image/Drawer_green';
import Left_greenbtn from '../../../assets/Svg Image/Left_greenbtn';
import Right_greenbtn from '../../../assets/Svg Image/Right_greenbtn';
import Images from '../../Utils/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getNumber,
  getNumber_2,
  getNumber_3,
  getNumber_4,
  getNumber_5,
  getNumber_6,
} from '../../Utils/Helper';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import Drawer from '../../../assets/Svg Image/Drawer_red';
// import {Drawer} from 'react-native-paper';

const loshu_grid_no = require('../../../Jsonfile/loshu-grid-no-says.json');
const missing_no = require('../../../Jsonfile/missing-no-says.json');

const Number_6 = ({navigation}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [avalible_number, setAvalible_Number] = useState();
  const [not_avalible, setNot_avalible] = useState();

  var two = avalible_number;

  useEffect(() => {
    getData();
  }, []);

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

      // data convert in arr
      var abc = value2.replace(/['"]+/g, '');

      var myarr = [];
      let count = 0;

      myarr = `${abc}`.split('').map(Number);
      two = getOccurrence(myarr, 6);

      console.log('how many time six number  repet ===>' + two);

      setAvalible_Number(two);

      for (let i = 0; i < myarr.length; i++) {
        if (myarr[i] === 6) {
          count++;
        }
      }
      setNot_avalible(count);

      console.log('not avalible three number===>' + count);

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
      <View style={Style.subcontainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {not_avalible ? <Drawer_green /> : <Drawer />}
        </TouchableOpacity>
        <View>
          {not_avalible ? (
            <Text style={[Style.usertitle, {color: '#A5A511'}]}>
              Numerology Report of
            </Text>
          ) : (
            <Text style={[Style.usertitle, {color: '#8B1A1A'}]}>
              Numerology Report of
            </Text>
          )}

          {not_avalible ? (
            <Text style={[Style.username, {color: '#4B4B00'}]}>
              {FirstName}
              {LastName}
            </Text>
          ) : (
            <Text style={[Style.username, {color: '#8B1A1A'}]}>
              {FirstName}
              {LastName}
            </Text>
          )}
        </View>
      </View>
      <View style={Style.middle}>
        {not_avalible ? (
          <ImageBackground
            source={Images.Bg_number}
            resizeMode="cover"
            style={styles.image}>
            <Text
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: '#FFFFFF',
                fontFamily: fonts.ATR,
              }}>
              6
            </Text>
          </ImageBackground>
        ) : (
          <ImageBackground
            source={Images.Bg_Red_number}
            resizeMode="cover"
            style={styles.image}>
            <Text
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: '#FFFFFF',
                fontFamily: fonts.ATR,
              }}>
              6
            </Text>
          </ImageBackground>
        )}

        {avalible_number
          ? loshu_grid_no.map((item, i) => (
              <View style={{marginVertical: 2}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  {getNumber_6(two) == item.No && (
                    <Text style={Style.Number_txt}>{item.WhatitsSays}</Text>
                  )}
                </View>
              </View>
            ))
          : missing_no.map((item, i) => (
              <View style={{marginVertical: 2}}>
                <View>
                  {getNumber_6(not_avalible) == item.MissingNo && (
                    <Text style={Style.Number_txt}>{item.WhatitsSays}</Text>
                  )}
                </View>
              </View>
            ))}
      </View>
      <View style={Style.arrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Number_5')}>
          {not_avalible ? <Left_greenbtn /> : <Backbtn />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_7')}>
          {not_avalible ? <Right_greenbtn /> : <Nextbtn />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number_6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E4F4',
  },

  title: {
    fontSize: 20,
    color: '#A5A511',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  title2: {
    fontSize: 20,
    color: '#B25E5E',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: 30,
    color: '#4B4B00',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },
  name2: {
    fontSize: 30,
    color: '#8B1A1A',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },
  image: {
    alignSelf: 'center',
    height: 180,
    width: 170,
    marginTop: 10,
    justifyContent: 'center',
  },
});
