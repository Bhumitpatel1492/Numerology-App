import React, {Component, useEffect, useState} from 'react';
import {
  View,
  FlatList,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../../Utils/scalling';

const data = require('../../../Jsonfile/number-details.json');
const ReportDriver = ({navigation, route}) => {
  const [jsonData, setJsonData] = useState(data);
  // const {paramName1} = route.params; // first_name
  // const {paramName2} = route.params; // last_name
  // const {paramName3} = route.params;   // Driver_no
  // const {paramName4} = route.params;   // Month
  // const {paramName5} = route.params;  // year
  // const {paramName6} = route.params;  // conductor_no

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState();
  // console.log('driver', data2);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      // console.log('fname', value);
      const value1 = await AsyncStorage.getItem('lastname');
      // console.log('lname', value1);
      const value2 = await AsyncStorage.getItem('driver_no');
      console.log('dno', value2);
      if (value !== null) {
        setData(value);
      }
      if (value1 !== null) {
        setData1(value1);
      }
      if (value2 !== null) {
        setData2(value2);
      }
    } catch (e) {}
  };

  useEffect(() => {
    setJsonData(data);
    {
      getData();
    }
  }, []);

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
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={styles.name}>Tejash</Text>
                <Text style={styles.name}>Shash</Text>
              </View>
            </View>
          </View>
          <View style={styles.image}>
            <Onbording />
          </View>
          <View>
            <Text style={styles.middlename}>Driver (Mulyank)</Text>
            {/* <Text
              style={{
                color: '#FFFFFF',
                fontSize: 15,
                backgroundColor: 'green',
              }}>
              {data2}
            </Text> */}
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
