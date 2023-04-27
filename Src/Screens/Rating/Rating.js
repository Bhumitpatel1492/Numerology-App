import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import fonts from '../../Utils/Fonts';
import Images from '../../Utils/Images';
import Style from '../../Utils/Style';
import {moderateScale} from '../../Utils/scalling';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const number_json = require('../../../Jsonfile/mulyank-bhaagyank-combination.json');

const Rating = ({navigation, route}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [v_total, setV_Total] = useState(0);
  var total = 0;
  console.log('vtotooo=====>' + v_total);
  // const [list, setList] = useState(number_json);
  // console.log('fffffffffffff===========>' + list);

  useEffect(
    () => async () => {
      total = await AsyncStorage.getItem('v_total');
      console.log('SSSSS' + (await AsyncStorage.getItem('v_total')));
      getData();
      // setList();
    },
    [],
  );

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('v_total');

      console.log('value==>' + value2);
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (value2 !== null) {
        setV_Total(value2);
      }
      console.log('conddddno', value2);
    } catch (e) {
      console.log('notget', e);
    }
  };

  return (
    <SafeAreaView style={Style.maincontainer}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Drawer2 />
          <View>
            <Text style={styles.title}>Numerology Report of</Text>
            <Text style={styles.name}>
              {FirstName}
              {LastName}
              {v_total}
            </Text>
          </View>
        </View>

        <View style={styles.imageview}>
          <Image source={Images.number} style={styles.imgstyle} />
          <View>
            <Text style={styles.txt1}>Compatibility</Text>
            <Text style={styles.txt2}>Janmank & Bhagyank</Text>
          </View>
          <Image source={Images.number} style={styles.imgstyle} />
        </View>

        <FlatList
          data={number_json}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                // marginHorizontal: 12,
                backgroundColor: 'red',
              }}>
              <View>
                {total == item.No ? (
                  <Text style={styles.low}>Symptoms - Low Energy</Text>
                ) : null}
                {total == item.No ? (
                  <Text style={styles.Mobile}> {item.SymptomsLowEnergy}</Text>
                ) : null}
              </View>
              <View>
                {total == item.No ? (
                  <Text style={styles.low}>Solutions - Low Energy</Text>
                ) : null}
                {total == item.No ? (
                  <Text style={styles.Mobile}> {item.Solutions}</Text>
                ) : null}
              </View>

              <View>
                {total == item.No ? (
                  <Text style={styles.low}>Enhance Mulyank</Text>
                ) : null}
                {total == item.No ? (
                  <Text style={styles.Mobile}> {item.EnhanceMulyank}</Text>
                ) : null}
              </View>
            </View>
          )}
        />
        <View style={styles.arrow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriver1')}>
            <Leftbtn />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Bhagyank')}>
            <Rightbtn />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
  rating: {
    backgroundColor: '#FFFFFF',
    borderRadius: 80,
    marginHorizontal: 10,
    padding: 16,
    marginVertical: 16,
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
    alignSelf: 'stretch',

    bottom: 20,
  },
});
