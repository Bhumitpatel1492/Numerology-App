import React, {useEffect, useState} from 'react';
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

const Register = ({navigation}) => {
  const [FirstName, setFirstName] = useState();

  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState();
  const [MobileNo, setMobileNo] = useState();
  const [date, setdate] = useState();
  const [month, setmonth] = useState();
  const [year, setyear] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [Driver_no, setDriver_no] = useState();
  const [Final1, setFinal1] = useState();
  const [Final2, setFinal2] = useState();
  const [conductor_no, setconductor_no] = useState();
  const [total, setTotal] = useState();

  console.log(
    'fname>' + FirstName,
    'lname>' + LastName,
    'email>' + Email,
    'mn>' + MobileNo,
    'date>' + date,
    'month>' + month,
    'year>' + year,

    selectedValue,
    'dno>' + Driver_no,
    'cno>' + conductor_no,
    'total>' + total,
  );

  useEffect(() => {
    setFirstName('Bhumit');
    setLastName('Patel');
    setEmail('abc123@gmail.com');
    setMobileNo('9429856212');
    setdate('14');
    setmonth('09');
    setyear('2002');
    setTotal('');
  }, []);

  useEffect(() => {
    handledatesum();
    handleyearsum();
    handlemonthsum();
    handletotalsum();
    Data();

    // FirstName;
  });

  const handleSelection = value => {
    setSelectedValue(value);
  };

  const handledatesum = async value => {
    const user = date;
    let item = user.split('');
    var value = item[0];
    var value0 = item[1];
    let ans = parseInt(value) + parseInt(value0);
    if (ans > 9) {
      let B = ans.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let final = parseInt(X) + parseInt(Y);
      setDriver_no(final);
    } else {
      setDriver_no(ans);
    }
  };

  const handlemonthsum = async value => {
    const user = month;
    let item = user.split('');
    var value = item[0];
    var value0 = item[1];
    let ans = parseInt(value) + parseInt(value0);
    console.log('okok', ans);
    if (ans > 9) {
      let B = ans.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let final = parseInt(X) + parseInt(Y);
      console.log('final', final);
      setFinal1(final);
    } else {
      setFinal1(ans);
    }
  };

  const handleyearsum = async value => {
    const user = year;
    let item = user.split('');
    var value = item[0];
    var value0 = item[1];
    var value1 = item[2];
    var value2 = item[3];
    let ans =
      parseInt(value) + parseInt(value0) + parseInt(value1) + parseInt(value2);
    // console.log('ans', ans);
    if (ans > 9) {
      let B = ans.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let final = parseInt(X) + parseInt(Y);
      // console.log('okok', final);

      if (final > 9) {
        let B = final.toString();
        let C = B.split('');
        let ans3 = C;
        let X = ans3[0];
        let Y = ans3[1];
        let last = parseInt(X) + parseInt(Y);
        console.log('less10', last);
        setFinal2(last);
      }
    } else {
      setFinal2(ans);
    }
  };

  const handletotalsum = () => {
    let a = Driver_no + Final1 + Final2;
    console.log('driver', Driver_no + 'final1', Final1 + 'final2', Final2);
    setTotal(a);
  };

  const Data = () => {
    let a = Driver_no + Final1 + Final2;
    if (a > 9) {
      let B = a.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let final = parseInt(X) + parseInt(Y);
      setconductor_no(final);
    } else {
      setconductor_no(a);
    }
    // setconductor_no(a)
    console.log('valueee===>...' + a);
  };

  const number = /^[6-9]\d{9}$/;
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const checkTextInput = () => {
    if (FirstName === '') {
      Alert.alert('Please Enter FirstName');
      return;
    } else if (LastName === '') {
      Alert.alert('Please Enter LastName');
    } else if (Email === '') {
      Alert.alert('Please Enter Email');
    } else if (!email.test(Email)) {
      Alert.alert('enter Valid Email');
    } else if (MobileNo === '') {
      Alert.alert('Please Enter Mobile Number');
    } else if (!number.test(MobileNo)) {
      Alert.alert('Invalid Number');
    } else if (selectedValue === null) {
      Alert.alert('select Your Gender');
    } else if (date === '') {
      Alert.alert('Please Enter Birth Date');
    } else if (month === '') {
      Alert.alert('Please Enter month');
    } else if (year === '') {
      Alert.alert('Please Enter year');
    } else {
      Alert.alert('success');
      storeData();
      navigation.navigate('ReportDriver');
    }
  };

  const storeData = async Final => {
    try {
      await AsyncStorage.setItem('firstname', FirstName);
      await AsyncStorage.setItem('lastname', LastName);
      await AsyncStorage.setItem('email', Email);
      await AsyncStorage.setItem('mobile', MobileNo);
      await AsyncStorage.setItem('gender', selectedValue);
      await AsyncStorage.setItem('date', date);
      await AsyncStorage.setItem('month', month);
      await AsyncStorage.setItem('year', year);
      await AsyncStorage.setItem('driver_no', JSON.stringify(Driver_no));
      // console.log('oooo', Driver_no);
      await AsyncStorage.setItem('conductor_no', JSON.stringify(conductor_no));
      await AsyncStorage.setItem('total', JSON.stringify(total));
      console.log('total sync', total);
    } catch (e) {
      console.log('error');
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
                onChangeText={value => setFirstName(value)}
              />

              <CustomTextInput
                label="LastName"
                value={LastName}
                onChangeText={value => setLastName(value)}
              />

              <CustomTextInput
                label="Email"
                value={Email}
                onChangeText={value => setEmail(value)}
              />

              <CustomTextInput
                label="Mobile"
                value={MobileNo}
                onChangeText={value => setMobileNo(value)}
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
                  selected={selectedValue === 'male'}
                  onPress={() => handleSelection('male')}
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
                  selected={selectedValue === 'female'}
                  onPress={() => handleSelection('female')}
                />
                <Text style={Style.txt}>Female</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginHorizontal: 18}}>
              <DateCollect
                label="Date"
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={date}
                onChangeText={value => setdate(value)}
              />
              <DateCollect
                label="Month"
                style={styles.input}
                maxLength={2}
                keyboardType="numeric"
                value={month}
                onChangeText={value => setmonth(value)}
              />
              <DateCollect
                label="Year"
                style={[styles.input, {width: moderateScale(160)}]}
                keyboardType="numeric"
                maxLength={4}
                value={year}
                onChangeText={value => setyear(value)}
              />
            </View>

            <TouchableOpacity style={styles.btn} onPress={checkTextInput}>
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
