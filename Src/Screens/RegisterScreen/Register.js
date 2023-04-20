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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Datevalue from '../../Components/Datevalue';
import Monthvalue from '../../Components/Monthvalue';
import Yearvalue from '../../Components/Yearvalue';

const Register = ({navigation}) => {
  const [alldata, setAllData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Mobile: '',
    date: '',
    month: '',
    year: '',
  });
  console.log('all', alldata.date);
  const [selectedValue, setSelectedValue] = useState();

  const handleSelection = value => {
    setSelectedValue(value);
  };

  const [day, setDay] = useState('');
  console.log('day', day);

  const [error, setError] = useState('');

  // const handleNameChange = value => {
  //   setAllData({...alldata, FirstName: value});
  // };

  // const handleLastNameChange = value => {
  //   setAllData({...alldata, LastName: value});
  // };

  // const handleEmailChange = value => {
  //   setAllData({...alldata, Email: value});
  // };

  // const handleMobileChange = value => {
  //   setAllData({...alldata, Mobile: value});
  // };

  // const handledateChange = value => {
  //   setAllData({...alldata, date: value});
  // };

  // const handlemonthChange = value => {
  //   setAllData({...alldata, month: value});
  // };

  // const handleyearChange = value => {
  //   setAllData({...alldata, year: value});
  // };

  const Mobile = /^[6-9]\d{9}$/;
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const Date = /(0?[1-9]|[12]\d|3[01])/;

  const checkTextInput = () => {
    if (alldata.FirstName === '') {
      Alert.alert('Please Enter FirstName');
      return;
    } else if (alldata.LastName === '') {
      Alert.alert('Please Enter LastName');
    } else if (alldata.Email === '') {
      Alert.alert('Please Enter Email');
    } else if (!email.test(alldata.Email)) {
      Alert.alert('enter Valid Email');
    } else if (alldata.Mobile === '') {
      Alert.alert('Please Enter Mobile Number');
    } else if (!Mobile.test(alldata.Mobile)) {
      Alert.alert('Invalid Number');
    } else if (selectedValue === null) {
      Alert.alert('select Your Gender');
    } else if (alldata.date === '') {
      Alert.alert('Please Enter Birth Date');
    } else if (alldata.month === '') {
      Alert.alert('Please Enter month');
    } else if (alldata.year === '') {
      Alert.alert('Please Enter year');
    } else {
      Alert.alert('success');
    }
  };

  const handleDayChange = text => {
    // Check that the input is a number
    if (/^\d+$/.test(text)) {
      const dayNum = parseInt(text, 10);
      // Check that the day is within the valid range
      if (dayNum >= 1 && dayNum <= 31) {
        setDay(text);
        setError(''); // Clear any previous error message
      } else {
        setError('Please enter a valid day between 1 and 31');
      }
    } else {
      setError('Please enter a valid number');
    }
  };

  const handleInputChange = (key, value) => {
    setAllData({...alldata, [key]: value});
  };

  const handleFormSubmit = async () => {
    try {
      await AsyncStorage.setItem('alldata', JSON.stringify(alldata));
      console.log('Form data saved successfully!', alldata);
    } catch (e) {
      console.error(e);
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
                value={alldata.FirstName}
                onChangeText={text => handleInputChange('FirstName', text)}
              />

              <CustomTextInput
                label="LastName"
                value={alldata.LastName}
                onChangeText={text => handleInputChange('LastName', text)}
              />

              <CustomTextInput
                label="Email"
                value={alldata.Email}
                onChangeText={text => handleInputChange('Email', text)}
              />

              <CustomTextInput
                label="Mobile"
                value={alldata.Mobile}
                onChangeText={text => handleInputChange('Mobile', text)}
                keyboardType="numeric"
                maxLength={10}
              />
            </View>

            <View
              style={{
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 24,
                marginVertical: moderateScale(10),
              }}>
              <Text style={Style.txt}>Gender : </Text>
              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  top: 2,
                }}>
                <Checkbox
                  selected={selectedValue === 'option1'}
                  onPress={() => handleSelection('option1')}
                />
                <Text style={Style.txt}>Male</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  top: 4,
                  marginLeft: 5,
                }}>
                <Checkbox
                  selected={selectedValue === 'option2'}
                  onPress={() => handleSelection('option2')}
                />
                <Text style={Style.txt}>Female</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginHorizontal: 18}}>
              {/* <View style={{flex: 1}}>
                <Datevalue />
              </View>
              <View style={{flex: 1}}>
                <Monthvalue />
              </View>
              <View style={{flex: 1}}>
                <Yearvalue />
              </View> */}

              <DateCollect
                label="Date"
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={alldata.date}
                onChangeText={text => handleInputChange('date', text)}
              />
              <DateCollect
                label="Month"
                style={styles.input}
                maxLength={2}
                keyboardType="numeric"
                value={alldata.month}
                onChangeText={text => handleInputChange('month', text)}
              />
              <DateCollect
                label="Year"
                style={[styles.input, {width: moderateScale(160)}]}
                keyboardType="numeric"
                maxLength={4}
                value={alldata.year}
                onChangeText={text => handleInputChange('year', text)}
              />
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                checkTextInput();
                handleFormSubmit();
              }}>
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
