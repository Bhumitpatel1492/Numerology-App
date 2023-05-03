//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Style from '../../Utils/Style';
import Logo from '../../../assets/Svg Image/Logo';
import Logo1 from '../../../assets/Svg Image/Logo1';
import fonts from '../../Utils/Fonts';
import {moderateScale} from '../../Utils/scalling';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  const readData = async () => {
    try {
      const isLogin = await AsyncStorage.getItem('isLoggedIn');
      if (isLogin) {
        console.log('Root');
        navigation.replace('AuthStack');
      } else {
        console.log('AuthStack');
        navigation.replace('AuthStack');
      }
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    setTimeout(
      function () {
        readData();
      }.bind(this),
      3000,
    );
  }, []);

  return (
    <SafeAreaView style={Style.maincontainer}>
      <View style={Style.container}>
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Logo />
        </View>

        <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Logo1 />
          <Text
            style={{
              fontSize: moderateScale(25),
              color: '#009A9A',
              fontFamily: fonts.ATSBI,
              textAlign: 'center',
            }}>
            {' '}
            Visit us
          </Text>
          <Text
            style={{
              fontSize: moderateScale(38),
              color: '#9D877E',
              fontFamily: fonts.ATSBI,
              textAlign: 'center',
            }}>
            {' '}
            https://www.occultree.com
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
