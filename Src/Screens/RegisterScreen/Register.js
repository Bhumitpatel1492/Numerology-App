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
import Checkbox from '../../Components/Chechbox';
import {moderateScale} from '../../Utils/scalling';
import CustomTextInput from '../../Components/Textinput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';

import moment from 'moment';
import fonts from '../../Utils/Fonts';
import {AlertView} from '../../Components/AlertView';
import Headerlogo1 from '../../../assets/Svg Image/headerlogo1';

const Register = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, showAlertMessage] = useState('');
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState();
  const [MobileNo, setMobileNo] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const [datepicker, setDatePicker] = useState([]);
  const [monthpicker, setMonthPicker] = useState([]);

  const [yearpicker, setYearPicker] = useState([]);

  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobileNo('');
  }, [selectedDate, selectedMonth, selectedYear]);

  useEffect(() => {
    var dates = [];
    const datesLength = 31;
    for (let index = 1; index <= datesLength; index++) {
      const element = index < 10 ? `0${index}` : index;
      dates.push({
        title: element,
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

    return moment(checkDate.toString(), dateFormat, true).isValid();
  };

  const handleSelection = value => {
    setSelectedValue(value);
  };

  const number = /^[6-9]\d{9}$/;
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const checkTextInput = () => {
    if (FirstName === '') {
      showAlertMessage('Please Enter FirstName');
      setShowAlert(true);
    } else if (LastName === '') {
      showAlertMessage('Please Enter LastName');
      setShowAlert(true);
    } else if (Email === '') {
      showAlertMessage('Please Enter Email');
      setShowAlert(true);
    } else if (!email.test(Email)) {
      showAlertMessage('Please Enter Email');
      setShowAlert(true);
    } else if (MobileNo === '') {
      showAlertMessage('Please Enter Mobile Number');
      setShowAlert(true);
    } else if (!number.test(MobileNo)) {
      showAlertMessage('Invalid Number');
      setShowAlert(true);
    } else if (selectedValue === null) {
      showAlertMessage('selectValue');
      setShowAlert(true);
    } else if (selectedDate === null) {
      showAlertMessage('Please Select Date');
      setShowAlert(true);
    } else if (selectedMonth === null) {
      showAlertMessage('Please Select Month');
      setShowAlert(true);
    } else if (selectedYear === null) {
      showAlertMessage('Please Select Year');
      setShowAlert(true);
    } else if (checkDateIsValid() == false) {
      showAlertMessage('Please Select Valid Date');
      setShowAlert(true);
    } else {
      var datesum;
      const abc = selectedDate.toString();
      let item1 = abc.split('');
      var value = item1[0];
      var value0 = item1[1];
      datesum = parseInt(value) + parseInt(value0);

      if (datesum > 9) {
        let B = datesum.toString();
        let C = B.split('');
        let ans2 = C;
        let X = ans2[0];
        let Y = ans2[1];
        datesum = parseInt(X) + parseInt(Y);
      }
      console.log('datesum', datesum);
      // console.log('datetetetet', datesum);
      // setDriver_no(datesum);

      var monthsum;
      const month = selectedMonth.toString();
      let item2 = month.split('');
      var value = item2[0];
      var value0 = item2[1];
      monthsum = parseInt(value) + parseInt(value0);

      if (monthsum > 9) {
        let B = monthsum.toString();
        let C = B.split('');
        let ans2 = C;
        let X = ans2[0];
        let Y = ans2[1];
        monthsum = parseInt(X) + parseInt(Y);
      }
      // console.log('monthsum', monthsum);

      var yearsum;
      const year = selectedYear.toString();
      let item = year.split('');
      var value = item[0] == undefined ? 0 : item[0];
      var value0 = item[1] == undefined ? 0 : item[1];
      var value1 = item[2] == undefined ? 0 : item[2];
      var value2 = item[3] == undefined ? 0 : item[3];
      yearsum =
        parseInt(value) +
        parseInt(value0) +
        parseInt(value1) +
        parseInt(value2);

      if (yearsum > 9) {
        let B = yearsum.toString();
        let C = B.split('');
        let ans2 = C;
        let X = ans2[0];
        let Y = ans2[1];
        yearsum = parseInt(X) + parseInt(Y);

        if (yearsum > 9) {
          let B = yearsum.toString();
          let C = B.split('');
          let ans3 = C;
          let X = ans3[0];
          let Y = ans3[1];
          yearsum = parseInt(X) + parseInt(Y);
        }
      }

      console.log('yearsum', yearsum);

      // var conductorsum;
      let conductor = datesum + monthsum + yearsum;
      if (conductor > 9) {
        let B = conductor.toString();
        let C = B.split('');
        let ans2 = C;
        let X = ans2[0] == undefined ? 0 : ans2[0];
        let Y = ans2[1] == undefined ? 0 : ans2[1];

        conductor = parseInt(X) + parseInt(Y);
        console.log('ccccccc===>', parseInt(X) + parseInt(Y));
      }
      if (conductor > 9) {
        let B = conductor.toString();
        let C = B.split('');
        let ans2 = C;
        let X = ans2[0] == undefined ? 0 : ans2[0];
        let Y = ans2[1] == undefined ? 0 : ans2[1];

        conductor = parseInt(X) + parseInt(Y);
        console.log('DDDDDDDDD===>', parseInt(X) + parseInt(Y));
      }

      console.log(' conductor======>' + conductor);

      var combine;
      const intValue1 = parseInt(datesum);
      const intValue2 = parseInt(conductor);
      combine = '' + intValue1 + intValue2;

      console.log('combine number=======>' + combine);

      var allnumbers;
      const item3 = selectedDate;
      const item4 = selectedMonth;
      const item5 = selectedYear;
      const item6 = datesum;
      const item7 = conductor;
      allnumbers =
        item3 + '' + item4 + '' + '' + item5 + '' + item6 + '' + '' + item7;

      allnumbers = allnumbers.toString();
      console.log('allvalue=====>' + allnumbers);

      storeData(datesum, conductor, combine, allnumbers);
      navigation.replace('Root');
    }
  };

  const storeData = (datesum, conductor, combine, allnumbers) => {
    try {
      AsyncStorage.setItem('firstname', FirstName);
      AsyncStorage.setItem('lastname', LastName);
      AsyncStorage.setItem('gender', selectedValue);
      AsyncStorage.setItem('driver_no', JSON.stringify(datesum));
      AsyncStorage.setItem('conductor_no', JSON.stringify(conductor));
      AsyncStorage.setItem('v_total', JSON.stringify(combine));
      AsyncStorage.setItem('allnumbers', JSON.stringify(allnumbers));

      AsyncStorage.setItem('isLoggedIn', 'true');
    } catch (e) {
      console.log('error ===========>', e);
    }
  };

  // console.log('ASY_allvalues', allNumber);

  return (
    <SafeAreaView style={Style.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AlertView
          showAlert={showAlert}
          message={alertMessage}
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
          onDismiss={() => setShowAlert(false)}></AlertView>
        <ImageBackground
          style={{flex: 1, overflow: 'hidden'}}
          source={require('../../Images/Background.png')}
          resizeMode="stretch">
          <View style={Style.container}>
            <View style={styles.header}>
              <View
                style={{
                  alignSelf: 'flex-end',
                  marginHorizontal: 25,
                  marginTop: 48,
                }}>
                <Headerlogo1 />
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
              <Text style={[Style.txt]}>Gender : </Text>
              <View
                style={{
                  flexDirection: 'row',

                  top: 6,
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
                  top: 6,
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
              <Text
                style={{
                  fontSize: moderateScale(25),
                  fontFamily: fonts.CTR,
                  color: '#525252',
                }}>
                Date
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(25),
                  fontFamily: fonts.CTR,
                  right: 18,
                  color: '#525252',
                }}>
                Month
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(25),
                  fontFamily: fonts.CTR,
                  right: 60,
                  color: '#525252',
                }}>
                Year
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 18,
                justifyContent: 'space-between',
              }}>
              <SelectDropdown
                data={datepicker}
                defaultValueByIndex={0}
                // defaultValue={'01'}
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
                  return selectedItem.value;
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.value;
                }}
                rowTextForSelection={(item, index) => {
                  return item.value;
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
                defaultValueByIndex={0}
                defaultValue={'01'}
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
                  // console.log(selectedItem, index);
                  setSelectedMonth(selectedItem.value);
                  return selectedItem.label;
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                  // console.log('item', item);
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
                  // console.log('item', item);
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
            <View
              style={{
                alignSelf: 'flex-end',
                bottom: 30,
              }}>
              <Image
                source={require('../../Images/Jinni.png')}
                style={{
                  height: moderateScale(255),
                  width: moderateScale(100),
                  marginHorizontal: 20,
                }}
              />
            </View>
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
