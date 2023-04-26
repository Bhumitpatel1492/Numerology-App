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
  Image,
} from 'react-native';
import Style from '../../Utils/Style';
import Headerlogo from '../../../assets/Svg Image/headerlogo';
import Checkbox from '../../Components/Chechbox';
import {moderateScale} from '../../Utils/scalling';
import CustomTextInput from '../../Components/Textinput';
import DateCollect from '../../Components/Datecollect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';

import moment from 'moment';

const Register = ({navigation}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState();
  const [MobileNo, setMobileNo] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  // console.log('sDate', selectedDate);
  const [selectedMonth, setSelectedMonth] = useState(null);
  // console.log('smonth', selectedMonth);
  const [selectedYear, setSelectedYear] = useState(null);
  // console.log('syear', selectedYear);
  const [datepicker, setDatePicker] = useState([]);
  // console.log('pdate', datepicker);
  const [monthpicker, setMonthPicker] = useState([]);
  // console.log('pmonth', monthpicker);
  const [yearpicker, setYearPicker] = useState([]);
  // console.log('pyear', yearpicker);
  const [selectedValue, setSelectedValue] = useState();
  const [Driver_no, setDriver_no] = useState(); // driver no
  // console.log('jsjsjsjsjsjs', Driver_no);
  const [Final1, setFinal1] = useState(); // for month
  const [Final2, setFinal2] = useState(); // for year
  const [conductor_no, setConductor_no] = useState(); // Conductor value
  const [valueoftotal, setvalueoftotal] = useState(); // driver + Conductor value

  // console.log('vvvvvvv======', valueoftotal);

  console.log();

  useEffect(() => {
    setFirstName('Bhumit');
    setLastName('Patel');
    setEmail('abc123@gmail.com');
    setMobileNo('9988662211');
  }, []);

  useEffect(() => {
    handledatesum();
    handleyearsum();
    handlemonthsum();
    Conductorsum();
    handlecombinevalue();
  });

  useEffect(() => {
    var dates = [];
    const datesLength = 31;
    for (let index = 1; index <= datesLength; index++) {
      const element = index;
      dates.push({
        label: element.toString(),
        value: element,
      });
    }
    setDatePicker(dates);

    var months = [];
    const monthsLength = 12;
    for (let index = 1; index <= monthsLength; index++) {
      const element = index < 10 ? `0${index}` : index;
      months.push({
        label: element.toString(),
        value: element,
      });
    }
    console.log('Months===>', months);
    setMonthPicker(months);

    const d = new Date();
    let yearsLength = d.getFullYear();
    var years = [];
    for (let index = 1965; index <= yearsLength; index++) {
      const element = index;
      years.push({
        label: element.toString(),
        value: element,
      });
    }
    setYearPicker(years);
  }, [selectedMonth]);

  // date validation
  const checkDateIsValid = () => {
    var format = `${selectedDate}/${selectedMonth}/${selectedYear}`;
    var dateFormat = 'DD/MM/YYYY';
    const checkDate = format.trim();
    console.log('checkDate====>', checkDate);
    console.log('meon====>', moment(checkDate, dateFormat, true).isValid());
    return moment(checkDate.toString(), dateFormat, true).isValid();
  };

  const handleSelection = value => {
    setSelectedValue(value);
  };

  // sum addition
  const handledatesum = async value => {
    const user = selectedDate;
    console.log('sssssdate', user);
    let item = user.split('');
    console.log('hshshshshhs', item);
    var value = item[0];
    console.log('jcvunsndvnssnsngnf========>' + value);
    var value0 = item[1];
    // console.log('ooosososoososo', value);
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

  // monthaddition

  const handlemonthsum = async value => {
    const user = selectedMonth;
    let item = user.split('');
    console.log('monthhjnhh', +user);
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

      setFinal1(final);
    } else {
      setFinal1(ans);
    }
  };

  // yead addtion
  const handleyearsum = async value => {
    const user = selectedYear;
    console.log('yearrrr', +user);
    let item = user.split('');
    var value = item[0];
    var value0 = item[1];
    var value1 = item[2];
    var value2 = item[3];
    let ans =
      parseInt(value) + parseInt(value0) + parseInt(value1) + parseInt(value2);

    if (ans > 9) {
      let B = ans.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let final = parseInt(X) + parseInt(Y);

      if (final > 9) {
        let B = final.toString();
        let C = B.split('');
        let ans3 = C;
        let X = ans3[0];
        let Y = ans3[1];
        let last = parseInt(X) + parseInt(Y);

        setFinal2(last);
      }
    } else {
      setFinal2(ans);
    }
  };

  // Conductor value
  const Conductorsum = () => {
    let a = Driver_no + Final1 + Final2;
    if (a > 9) {
      let B = a.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let final = parseInt(X) + parseInt(Y);
      console.log('condctor', final);
      setConductor_no(final);
    } else {
      setConductor_no(a);
    }
  };

  const handlecombinevalue = () => {
    const value1 = Driver_no;
    const value2 = conductor_no;

    const ans = value1 + ' ' + value2;
    setvalueoftotal(ans);
  };

  // const newData1 = ITEM.filter(item => {
  //   const itemData1 = item.product_name.toLowerCase();
  //   const textData1 = text.toLowerCase();
  //   return itemData1.indexOf(textData1) > -1;
  // });
  // setFilteredData1(newData1);

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
    } else if (selectedDate === null) {
      Alert.alert('Please Enter Birth Date');
    } else if (selectedMonth === null) {
      Alert.alert('Please Enter month');
    } else if (selectedYear === null) {
      Alert.alert('Please Enter year');
    } else if (checkDateIsValid() == false) {
      Alert.alert('Please Select Valid Date');
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
      // await AsyncStorage.setItem('date', date);
      await AsyncStorage.setItem('month', month);
      // await AsyncStorage.setItem('year', year);
      await AsyncStorage.setItem('driver_no', JSON.stringify(1));
      // console.log('xoxoox', Driver_no);
      await AsyncStorage.setItem('conductor_no', JSON.stringify(conductor_no));
      await AsyncStorage.setItem('valueoftotal', JSON.stringify(valueoftotal));
    } catch (e) {
      console.log('error', 'notsave');
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

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 18,
                justifyContent: 'space-between',
              }}>
              <SelectDropdown
                data={datepicker}
                buttonStyle={{
                  backgroundColor: 'white',
                  padding: 8,
                  margin: 0,
                  height: 50,
                  borderColor: '#9D8081',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  width: '30%',
                }}
                buttonTextStyle={{
                  fontSize: 16,
                  margin: 0,
                  padding: 0,
                  textAlign: 'left',
                }}
                defaultButtonText={' '}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  setSelectedDate(selectedItem.value);
                  return selectedItem.label;
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                  return item.label;
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <Image
                      style={{height: 14, width: 14}}
                      source={
                        isOpened
                          ? require('../../Images/ic_up_arrow.png')
                          : require('../../Images/ic_down-arrow.png')
                      }
                    />
                  );
                }}
                dropdownIconPosition={'right'}
              />
              <SelectDropdown
                data={monthpicker}
                buttonStyle={{
                  backgroundColor: 'white',
                  padding: 8,
                  margin: 0,
                  height: 50,
                  borderColor: '#9D8081',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  width: '30%',
                }}
                buttonTextStyle={{
                  fontSize: 16,
                  margin: 0,
                  padding: 0,
                  textAlign: 'left',
                }}
                defaultButtonText={' '}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  setSelectedMonth(selectedItem.value);
                  return selectedItem.label;
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  // return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  console.log('item', item);
                  return item.label;
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  // return item;
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <Image
                      style={{height: 14, width: 14}}
                      source={
                        isOpened
                          ? require('../../Images/ic_up_arrow.png')
                          : require('../../Images/ic_down-arrow.png')
                      }
                    />
                  );
                }}
                dropdownIconPosition={'right'}
              />
              <SelectDropdown
                data={yearpicker}
                buttonStyle={{
                  backgroundColor: 'white',
                  padding: 8,
                  margin: 0,
                  height: 50,
                  borderColor: '#9D8081',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  width: '30%',

                  // flex: 1,
                }}
                buttonTextStyle={{
                  fontSize: 16,
                  margin: 0,
                  padding: 0,
                  // includeFontPadding: false,
                  textAlign: 'left',
                }}
                defaultButtonText={' '}
                onSelect={(selectedItem, index) => {
                  setSelectedYear(selectedItem.value);
                  return selectedItem.label;
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <Image
                      style={{height: 14, width: 14}}
                      source={
                        isOpened
                          ? require('../../Images/ic_up_arrow.png')
                          : require('../../Images/ic_down-arrow.png')
                      }
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                rowTextForSelection={(item, index) => {
                  console.log('item', item);
                  return item.label;
                }}
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
