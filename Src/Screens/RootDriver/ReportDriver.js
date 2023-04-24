import React, {Component, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Drawer from '../../../assets/Svg Image/Drawer_red';
import Onbording from '../../../assets/Svg Image/onbording';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import fonts from '../../Utils/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../../Utils/scalling';

const item = require('../../../Jsonfile/number-details.json'); // No,Plantes,
// console.log("hello,,..//>>" + item)
const ReportDriver = ({navigation, route}) => {
  const [list, setlist] = useState(item);
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [driver_no, setdriver_no] = useState();

  useEffect(() => {
    setlist(list);
  });
  useEffect(() => {
    getData();
  });
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('driver_no');
      console.log('value==>' + value2);
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (value2 !== null) {
        setdriver_no(value2);
      }
    } catch (e) {}
  };

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
              <View
                style={{flexDirection: 'row', textDecorationLine: 'underline'}}>
                <Text style={styles.name}>{FirstName}</Text>
                <Text style={styles.name1}>{LastName}</Text>
              </View>
              {/* {/ <Text style={{ color: "white", backgroundColor: "green" }}>{driver_no}</Text> /} */}
            </View>
          </View>
          <View style={styles.image}>
            <Onbording />
          </View>

          <FlatList
            style={{alignSelf: 'center'}}
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  {driver_no == item.No ? (
                    <Text style={styles.numberTextConatiner}>{item.No}</Text>
                  ) : null}
                </View>
                {driver_no == item.No ? (
                  <Text style={styles.HeaderTextConatiner}>{item.Plantes}</Text>
                ) : null}
                <View style={{paddingHorizontal: moderateScale(35)}}>
                  {driver_no == item.No ? (
                    <Text style={styles.DescriptionContainer}>
                      {item.WallpaperSuggestion}
                    </Text>
                  ) : null}
                </View>
              </View>
            )}
          />
        </ScrollView>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Backbtn />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('ReportDriverDetails', { root: paramName, name: item })}
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
  name1: {
    fontSize: moderateScale(42),
    color: '#FFFFFF',
    opacity: 1,
    textDecorationLine: 'underline',
    fontFamily: fonts.ATSBI,
    marginStart: moderateScale(20),
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

  numberTextConatiner: {
    // color: '#A02056',
    color: 'white',
    fontSize: moderateScale(50),
    fontFamily: fonts.ATSBI,
    // backgroundColor: "#E7C7D4",
    // borderRadius: 50,
    // height: 100, width: 100, alignSelf: "center"
  },
  HeaderTextConatiner: {
    color: '#FFFFFF',
    fontSize: moderateScale(25),
    fontFamily: fonts.ATSBI,
    alignSelf: 'center',
  },
  DescriptionContainer: {
    color: '#E7C7D4',
    fontSize: moderateScale(22),
    fontFamily: fonts.ATR,
    marginTop: moderateScale(25),
  },
});
