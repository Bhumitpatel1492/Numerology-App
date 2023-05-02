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
// import DateCollect from '../../Components/Datecollect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';

import moment from 'moment';

const Register = ({navigation}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState();
  const [MobileNo, setMobileNo] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  // console.log('syear', selectedYear);
  const [datepicker, setDatePicker] = useState([]);
  const [monthpicker, setMonthPicker] = useState([]);
  // console.log('pmonth', monthpicker);
  const [yearpicker, setYearPicker] = useState([]);
  // console.log('pyear', yearpicker);
  const [selectedValue, setSelectedValue] = useState();
  const [Driver_no, setDriver_no] = useState(3); // driver no
  // console.log('driver_no', Driver_no);
  const [Final1, setFinal1] = useState(); // for month
  // console.log('monthsum', Final1);
  const [Final2, setFinal2] = useState(); // for year
  // console.log('yearsum', Final2);
  const [conductor_no, setConductor_no] = useState(); // Conductor value
  // console.log('conductor_no=====>' + conductor_no);
  const [valueoftotal, setvalueoftotal] = useState(); // driver + Conductor value
  // console.log('combinevalue', valueoftotal);
  const [allNumber, setAllNumber] = useState();
  // console.log('allnumber', allNumber);

  const checkinarr = () => {
    var arr = [2, 3, 1, 3, 4, 5, 3, 1];

    function getOccurrence(array, value) {
      var count = 0;
      array.forEach(v => v === value && count++);
      return count;
    }

    console.log(getOccurrence(arr, 1)); // 2
    console.log(getOccurrence(arr, 3)); // 3
  };

  useEffect(() => {
    setFirstName('ABC');
    setLastName('DEF');
    setEmail('abc123@gmail.com');
    setMobileNo('9988662211');
  }, [selectedDate, selectedMonth, selectedYear]);

  useEffect(() => {
    handledatesum(); // datesum function
    handlemonthsum(); // monthsum function
    handleyearsum(); // yearsum function
    Conductorsum(); // date+month+year sum
    handlecombinevalue(); // driver + conductor
    handleallnumber(); // full b_date + driver + monthsum + yearsum + conductorsum
  });

  useEffect(() => {
    var dates = [];
    const datesLength = 31;
    for (let index = 1; index <= datesLength; index++) {
      const element = index < 10 ? `0${index}` : index;
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
    // console.log('Months===>', months);
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
    // console.log('checkDate====>', checkDate);
    // console.log('meon====>', moment(checkDate, dateFormat, true).isValid());
    return moment(checkDate.toString(), dateFormat, true).isValid();
  };

  const handleSelection = value => {
    // console.log('Value======>', value);
    setSelectedValue(value);
  };

  // sum addition
  const handledatesum = async () => {
    const user = selectedDate;
    const abc = user.toString();
    let item = abc.split('');
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
    // console.log('ans=======>', ans);
    // console.log('bdcdddd=====>', value);
  };

  // monthaddition

  const handlemonthsum = async () => {
    const user = selectedMonth;
    // console.log('monthsumn====>', selectedMonth);
    const month = user.toString();
    let item = month.split('');
    var value = item[0];
    var value0 = item[1];
    let ans = parseInt(value) + parseInt(value0);

    if (ans > 9) {
      let B = ans.toString();
      // console.log('ddfdfdfdfddfdfdf', B);
      let C = B.split('');
      // console.log('scadafadfaddfadf', C);
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let final = parseInt(X) + parseInt(Y);
      // console.log('sgsggsgsgsgsg', final);
      setFinal1(final);
    } else {
      setFinal1(ans);
    }
  };

  // yead addtion
  const handleyearsum = async () => {
    const user = selectedYear;
    const year = user.toString();
    let item = year.split('');
    var value = item[0] == undefined ? 0 : item[0];
    var value0 = item[1] == undefined ? 0 : item[1];
    var value1 = item[2] == undefined ? 0 : item[2];
    var value2 = item[3] == undefined ? 0 : item[3];
    let sum1 =
      parseInt(value) + parseInt(value0) + parseInt(value1) + parseInt(value2);
    setFinal2(sum1);

    if (sum1 > 9) {
      let B = sum1.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0];
      let Y = ans2[1];
      let sum2 = parseInt(X) + parseInt(Y);
      setFinal2(sum2);

      if (sum2 > 9) {
        let B = sum2.toString();
        let C = B.split('');
        let ans3 = C;
        let X = ans3[0];
        let Y = ans3[1];
        let sum3 = parseInt(X) + parseInt(Y);

        setFinal2(sum3);
      }
    }
  };

  // Conductor value
  const Conductorsum = async () => {
    let a = Driver_no + Final1 + Final2;
    console.log('aaaaaaaa===============', a);

    if (a > 9) {
      let B = a.toString();
      let C = B.split('');
      let ans2 = C;
      let X = ans2[0] == undefined ? 0 : ans2[0];
      let Y = ans2[1] == undefined ? 0 : ans2[1];

      let final = parseInt(X) + parseInt(Y);

      setConductor_no(final);
      console.log('bbbbbbbbbbbbbbbbbbbbb=====>' + final);

      if (final > 9) {
        let B = final.toString();
        let C = B.split('');
        let ans3 = C;
        let X = ans3[0] == undefined ? 0 : ans3[0];
        let Y = ans3[1] == undefined ? 0 : ans3[1];

        let Final2 = parseInt(X) + parseInt(Y);

        setConductor_no(Final2);
        console.log('cccccccccccccccccccccc=====>' + Final2);
      }
    }
  };

  // driver + conductor

  const handlecombinevalue = () => {
    const intValue1 = parseInt(Driver_no);
    const intValue2 = parseInt(conductor_no);
    // const intValue3 = parseInt(value3);
    setvalueoftotal('' + intValue1 + intValue2);
    // console.log('SSSSSSSSSSSSS=======>' + intValue1);
  };

  // const handlecombinevalue = () => {
  //   // const value1 = Driver_no;
  //   // const value2 = conductor_no;
  //   setvalueoftotal('' + Driver_no + +conductor_no);
  //   console.log('gagsgs' + Driver_no + +conductor_no);
  //   // console.log('ydyxtrxtrxtrxtrx',);
  // };

  // full b_date + driver + monthsum + yearsum + conductorsum

  const handleallnumber = () => {
    const item = selectedDate;
    const item1 = selectedMonth;
    const item2 = selectedYear;
    const item3 = Driver_no;
    const item4 = Final1;
    const item5 = Final2;
    const item6 = conductor_no;
    const allnumber =
      item +
      '' +
      item1 +
      '' +
      '' +
      item2 +
      '' +
      item3 +
      '' +
      '' +
      item4 +
      '' +
      item5 +
      '' +
      item6;

    const num = allnumber.toString();
    // console.log('=====>' + num);

    setAllNumber(num);
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

  const storeData = Final => {
    try {
      AsyncStorage.setItem('firstname', FirstName);
      AsyncStorage.setItem('lastname', LastName);
      AsyncStorage.setItem('gender', selectedValue);
      AsyncStorage.setItem('date', JSON.stringify(selectedDate));
      AsyncStorage.setItem('month', JSON.stringify(selectedMonth));
      AsyncStorage.setItem('year', JSON.stringify(selectedYear));
      AsyncStorage.setItem('driver_no', JSON.stringify(Driver_no));
      AsyncStorage.setItem('conductor_no', JSON.stringify(conductor_no));
      AsyncStorage.setItem('v_total', JSON.stringify(valueoftotal));
      AsyncStorage.setItem('allnumbers', JSON.stringify(allNumber));
      AsyncStorage.setItem('final_month', JSON.stringify(Final1));
      AsyncStorage.setItem('final_year', JSON.stringify(Final2));
    } catch (e) {
      console.log('error ===========>', e);
    }
  };

  // console.log('ASY_allnumber', allNumber);
  // console.log('ASY_fname', FirstName);
  // console.log('ASY_lname', LastName);
  // console.log('ASY_date', selectedDate);
  // console.log('ASY_month', selectedMonth);
  // console.log('ASY_year', selectedYear);
  // console.log('ASY_driver', Driver_no);
  // console.log('ASY_monthsum', Final1);
  // console.log('ASY_yearsum', Final2);
  // console.log('ASY_conductor_no', conductor_no);
  // console.log('ASY_combinevalue', valueoftotal);
  console.log('ASY_allvalues', allNumber);
  // console.log('final1', Final1);
  // console.log('fina2', Final2);

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
