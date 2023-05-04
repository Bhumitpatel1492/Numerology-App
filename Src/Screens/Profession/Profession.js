import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Style from '../../Utils/Style';
import {moderateScale} from '../../Utils/scalling';
import fonts from '../../Utils/Fonts';
import Drawer2_Purple from '../../../assets/Svg Image/Drawer2_Purple';
import Backbtn_Purple from '../../../assets/Svg Image/Backbtn_Purple';
import Nextbtn_Purple from '../../../assets/Svg Image/Nextbtn_Purple';
import Round from '../../../assets/Svg Image/Round';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfessionData = require('../../../Jsonfile/mulyank-bhaagyank-combination.json');

const Profession = ({navigation}) => {
  const [data, setData] = useState([]);

  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [v_total, setV_Total] = useState();

  console.log('v_total=======>' + v_total);

  useEffect(() => {
    getData();
    setFirstName();
    setLastName();
    setV_Total();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('v_total');

      const sum = JSON.parse(value2);
      ProfessionData.forEach(item => {
        if (item.MB == v_total) {
          setData(item.Profession.split(','));
        }
      });
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (sum !== null) {
        setV_Total(sum);
      }
    } catch (e) {
      console.log('notget', e);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.round}>
        <Round />
        <Text style={Style.text4}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#69325E'}}>
      <View style={styles.container}>
        <View style={Style.subcontainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Drawer2_Purple />
          </TouchableOpacity>

          <View>
            <Text style={styles.text1}>Numerology Report of</Text>
            <Text style={styles.text2}>
              {FirstName}
              {LastName}
            </Text>
          </View>
        </View>

        <View style={styles.back}>
          <Text style={styles.text3}>Profession</Text>
        </View>

        <FlatList data={data} renderItem={renderItem} />

        <View style={Style.B_Icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Number_9')}>
            <Backbtn_Purple />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wallpaper')}>
            <Nextbtn_Purple />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69325E',
    // marginHorizontal: 10,
  },
  subcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
  },
  text1: {
    fontSize: moderateScale(20),
    color: '#E6C6E0',
    fontFamily: fonts.ATSBI,
  },
  text2: {
    fontSize: moderateScale(38),
    color: '#FFFFFF',
    lineHeight: 42,
    textDecorationLine: 'underline',
    fontFamily: fonts.ATSBI,
  },
  back: {
    backgroundColor: '#500942',
    borderRadius: 30,
    height: moderateScale(80),
    justifyContent: 'center',
    marginTop: 10,
  },
  text3: {
    fontSize: moderateScale(35),
    color: '#E6C6E0',
    fontFamily: fonts.ATSBI,
    //margin: 14,
    alignSelf: 'center',
  },
  round: {
    flexDirection: 'row',
    marginHorizontal: 10,
    // alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 14,
  },
});
