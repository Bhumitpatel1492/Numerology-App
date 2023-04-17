import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import Style from '../../Utils/Style';
import Headerlogo from '../../../assets/Svg Image/headerlogo';
import Checkbox from '../../Components/Chechbox';
import {moderateScale} from '../../Utils/scalling';
import CustomTextInput from '../../Components/Textinput';
import DateCollect from '../../Components/Datecollect';

const Register = ({navigation}) => {
  const [FirstName, setFirstName] = useState();
  console.log('first', FirstName);
  const [LastName, setLastName] = useState();
  console.log('last', LastName);
  const [Email, setEmail] = useState();
  console.log('email', Email);
  const [Mobile, setMobile] = useState();
  console.log('mobile', Mobile);

  const checkTextInput = () => {
    if (FirstName === '') {
      Alert.alert('Please Enter FirstName');
      return;
    } else if (LastName === '') {
      Alert.alert('Please Enter LastName');
    } else if (Email === '') {
      Alert.alert('Please Enter Email');
    } else if (Mobile === '') {
      Alert.alert('Please Enter Mobile Number');
    } else {
      Alert.alert('successful');
      // props.navigation.navigate('ReportDriver ');
    }
  };

  return (
    <SafeAreaView style={Style.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{flex: 1, overflow: 'hidden'}}
          source={require('../../Images/Background.png')}
          resizeMode="stretch">
          <View style={Style.container}>
            <View style={styles.header}>
              <View style={{alignSelf: 'flex-end', marginHorizontal: 12}}>
                <Headerlogo />
              </View>
            </View>
            <Text style={styles.title}>Numerology Calculator</Text>

            <View>
              <CustomTextInput
                label="FirstName"
                value={FirstName}
                onChangeText={text => setFirstName(text)}
              />

              <CustomTextInput
                label="LastName"
                value={LastName}
                onChangeText={text => setLastName(text)}
              />

              <CustomTextInput
                label="Email"
                value={Email}
                onChangeText={text => setEmail(text)}
              />

              <CustomTextInput
                label="Mobile"
                value={Mobile}
                onChangeText={text => setMobile(text)}
              />
            </View>

            <Checkbox />

            <View style={{flexDirection: 'row', marginHorizontal: 18}}>
              <DateCollect
                label="Date"
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
              />
              <DateCollect label="Month" style={styles.input} maxLength={8} />
              <DateCollect
                label="Year"
                style={[styles.input, {width: moderateScale(160)}]}
                keyboardType="numeric"
                maxLength={4}
              />
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('ReportDriver')}>
              <Text
                style={{
                  fontSize: moderateScale(22),
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  header: {
    height: '16%',
    bottom: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#F14E57',
    fontWeight: '600',
    fontFamily: 'RobotoSlab-ExtraBold',
    textDecorationLine: 'underline',
    height: 50,
    marginVertical: 15,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    height: moderateScale(70),
    width: moderateScale(130),
    borderRadius: 5,
    borderColor: '#9D8081',
  },
  btn: {
    backgroundColor: '#0096A5',
    height: moderateScale(65),
    width: '48%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: moderateScale(30),
  },
});
