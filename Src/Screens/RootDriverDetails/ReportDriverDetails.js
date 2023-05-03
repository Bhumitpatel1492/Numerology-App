import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import Onbording2 from '../../../assets/Svg Image/Onbording2';
import Style from '../../Utils/Style';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import fonts from '../../Utils/Fonts';
import {moderateScale} from '../../Utils/scalling';
import Drawer from '../../../assets/Svg Image/Drawer_red';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../Utils/Images';

const number_json = require('../../../Jsonfile/number-details.json'); // No,Plantes,
const ReportDriverDetails = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;
  const [list, setlist] = useState(number_json);
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  // const [Email, setEmail] = useState();
  const [driver_no, setdriver_no] = useState();

  useEffect(() => {
    setlist(list);
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('driver_no');
      // const Email = await AsyncStorage.getItem('email');
      console.log('value==>' + value);
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (value2 !== null) {
        setdriver_no(value2);
      }
      // if (Email !== null) {
      //   setEmail(Email);
      // }
    } catch (e) {}
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF2F7'}}>
      <View style={styles.container}>
        <View style={Style.subcontainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Drawer />
          </TouchableOpacity>
          <View>
            <Text style={[Style.usertitle, {color: '#6B6B6B'}]}>
              Numerology Report of
            </Text>
            <View
              style={{flexDirection: 'row', textDecorationLine: 'underline'}}>
              <Text style={[Style.username, {color: '#A02056'}]}>
                {FirstName} {LastName}
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 10}}>
          <ImageBackground
            source={require('../../Images/BG_white.png')}
            style={{height: moderateScale(80), width: moderateScale(250)}}>
            <Text
              style={{
                fontSize: moderateScale(40),
                color: '#A02056',
                fontFamily: fonts.ATSBI,
              }}>
              Driver (Mulyank)
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground
            source={Images.Bg_pink}
            resizeMode="cover"
            style={Style.image}>
            <Text style={Style.Bg_txt}>{driver_no}</Text>
          </ImageBackground>
          <FlatList
            style={{
              marginStart: moderateScale(18),
            }}
            data={number_json}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <View
                  style={{
                    width: windowWidth,
                    alignItems: 'flex-end',
                  }}>
                  <View style={styles.profile}>
                    {driver_no == item.No ? (
                      <Text style={Style.types}>Plantes </Text>
                    ) : null}
                    {driver_no == item.No ? (
                      <Text style={Style.details}> {item.Plantes}</Text>
                    ) : null}
                  </View>
                  <View style={styles.profile}>
                    {driver_no == item.No ? (
                      <Text style={Style.types}>Relations</Text>
                    ) : null}
                    {driver_no == item.No ? (
                      <Text style={Style.details}> {item.Relations}</Text>
                    ) : null}
                  </View>

                  <View style={styles.profile}>
                    {driver_no == item.No ? (
                      <Text style={Style.types}>Qualities </Text>
                    ) : null}
                    {driver_no == item.No ? (
                      <Text style={Style.details}> {item.Qualities}</Text>
                    ) : null}
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{marginTop: moderateScale(10)}}>
              <View style={{flexDirection: 'row'}}>
                {driver_no == item.No ? (
                  <Text style={Style.lines}>•</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={Style.lines}>{item.SymptomsLowEnergy}</Text>
                ) : null}
              </View>
              <View style={{flexDirection: 'row'}}>
                {driver_no == item.No ? (
                  <Text style={Style.lines}>•</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={Style.lines}>{item.Solutions}</Text>
                ) : null}
              </View>
              <View style={{flexDirection: 'row'}}>
                {driver_no == item.No ? (
                  <Text style={Style.lines}>•</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={Style.lines}>{item.EnhanceMulyank}</Text>
                ) : null}
              </View>
              <View style={{flexDirection: 'row'}}>
                {driver_no == item.No ? (
                  <Text style={Style.lines}>•</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={Style.lines}>{item.EnhanceBhagyank}</Text>
                ) : null}
              </View>
              <View style={{flexDirection: 'row'}}>
                {driver_no == item.No ? (
                  <Text style={Style.lines}>•</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={Style.lines}>{item.WallpaperSuggestion}</Text>
                ) : null}
              </View>
            </View>
          )}
        />
      </View>
      <View style={Style.B_Icon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Backbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mulyank')}>
          <Nextbtn />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReportDriverDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F7',
    marginHorizontal: 10,
  },
  subcontainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name1: {
    fontSize: moderateScale(42),
    color: '#A02056',
    opacity: 1,
    textDecorationLine: 'underline',
    fontFamily: fonts.ATR,
    marginStart: moderateScale(20),
    // textTransform: 'uppercase',
  },
  subcontainer1: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  subcontainer2: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    opacity: 0.8,
    // backgroundColor: '#fff2f7',
  },
  txt: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#313131',
    // lineHeight: 22,
    // marginVertical: 15,
    margin: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: '#6B6B6B',
    opacity: 1,
    // fontStyle: 'normal',
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: 30,
    color: '#A02056',
    opacity: 1,

    textDecorationLine: 'underline',

    fontFamily: fonts.ATR,
  },
  profile: {
    flexDirection: 'row',
    // flex: 1,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    // justifyContent: 'space-around',
  },
  background: {
    height: moderateScale(80),
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
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
});
