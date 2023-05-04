import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import Number5 from '../../../assets/Svg Image/Number_5';
import {moderateScale} from '../../Utils/scalling';
import fonts from '../../Utils/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../Utils/Images';
import Style from '../../Utils/Style';

const number_json = require('../../../Jsonfile/number-details.json');

const Bhagyank = ({navigation, route}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [list, setlist] = useState(number_json);
  const [conductor_no, setconductor_no] = useState();
  // console.log('ttttttttt============>', conductor_no);

  useEffect(() => {
    getData();
    setlist(list);
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('conductor_no');

      // console.log('value5585858585==>' + value2);
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (value2 !== null) {
        // console.log('dno', value2);
        setconductor_no(value2);
      }
    } catch (e) {
      console.log('notget', e);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E8FDFF'}}>
      <View style={styles.container}>
        <View style={Style.subcontainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Drawer2 />
          </TouchableOpacity>
          <View>
            <Text style={[Style.usertitle, {color: '#6B6B6B'}]}>
              Numerology Report of
            </Text>
            <Text style={[Style.username, {color: '#0096A5'}]}>
              {FirstName}
              {LastName}
            </Text>
          </View>
        </View>
        <View style={styles.view1}>
          <ImageBackground
            source={Images.Bg_green}
            resizeMode="cover"
            style={Style.image}>
            <Text style={[Style.Bg_txt, {color: '#FFFFFF'}]}>
              {conductor_no}
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../Images/Subtraction.png')}
            resizeMode="contain"
            style={{flex: 1}}>
            <Text
              style={{
                fontSize: moderateScale(30),
                color: '#0096A5',
                fontFamily: fonts.ATSBI,
                textAlign: 'center',
                top: 32,
              }}>
              Conductor (Bhagyank)
            </Text>
          </ImageBackground>
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
      <View style={Style.B_Icon}>
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
    fontFamily: fonts.ATR,
    lineHeight: 45,
  },
  Mobile: {
    fontSize: moderateScale(26),
    color: '#454545',
    lineHeight: 30,
    fontFamily: fonts.CTR,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default Bhagyank;
