import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import Number5 from '../../../assets/Svg Image/Number_5';
import {moderateScale} from '../../Utils/scalling';
import fonts from '../../Utils/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const number_json = require('../../../Jsonfile/number-details.json');

const Bhagyank = ({navigation, route}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [list, setlist] = useState(number_json);
  const [conductor_no, setconductor_no] = useState();
  console.log('ttttttttt============>', conductor_no);

  useEffect(() => {
    getData();
    setlist(list);
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('conductor_no');

      console.log('value5585858585==>' + value2);
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (value2 !== null) {
        console.log('dno', value2);
        setconductor_no(value2);
      }
    } catch (e) {
      console.log('notget', e);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E8FDFF'}}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Drawer2 />
          <View>
            <Text style={styles.title}>Numerology Report of</Text>
            <View
              style={{flexDirection: 'row', textDecorationLine: 'underline'}}>
              <Text style={styles.name}>
                {FirstName}
                {LastName}
                {/* {conductor_no} */}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.view1}>
          <Number5 />
          <View style={styles.view2}>
            <Text
              style={{
                fontSize: moderateScale(28),
                color: '#0096A5',
                fontFamily: fonts.ATSBI,
              }}>
              Conductor (Bhagyank)
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 12, marginTop: 20}}>
          <Text style={styles.low}>Enhance Bhagyank</Text>
          <FlatList
            data={number_json}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                {conductor_no == item.No ? (
                  <Text style={styles.Mobile}>{item.EnhanceBhagyank}</Text>
                ) : null}
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
          <Leftbtn />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Loshu_Grid')}>
          <Rightbtn />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8FDFF',
  },
  subcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
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
  view1: {
    marginVertical: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  view2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  text3: {
    fontSize: moderateScale(31),
    color: '#0096A5',
    fontFamily: fonts.ATSBI,
  },
  low: {
    fontSize: moderateScale(35),
    color: '#0096A5',
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

export default Bhagyank;
