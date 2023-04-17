//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Style from '../../Utils/Style';
import Logo from '../../../assets/Svg Image/Logo';

const Splesh = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Register');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={Style.maincontainer}>
      <View style={Style.container}>
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Logo />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splesh;
