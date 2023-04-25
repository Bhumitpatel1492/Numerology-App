//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import Onbording1 from '../../../assets/Svg Image/Onbording1';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import fonts from '../../Utils/Fonts';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../../Utils/scalling';

const ReportDriver1 = ({navigation, route}) => {
  const [FirstName, setFirstName] = useState();
  console.log('fname', FirstName);
  const [LastName, setLastName] = useState();
  console.log('lname', LastName);
  useEffect(() => {
    // setlist(list);
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('FirstName');
      const value1 = await AsyncStorage.getItem('LastName');

      console.log('value==>' + value);
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
    } catch (e) {}
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0096A5'}}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subcontainer}>
            <Drawer2 />
            <View>
              <Text style={styles.title}>Numerology Report of</Text>
              <Text style={styles.name}>
                {/* {FirstName} {LastName}
                 */}
                Tejash Shah
              </Text>
            </View>
          </View>
          <View style={styles.image}>
            <Onbording1 />
          </View>
          <View>
            <Text style={styles.middle}>Conductor (Bhagyank)</Text>
            <Text style={styles.line}>
              Your conductor no is your life’s lesson. It indicates the job you
              were sent to do, the purpose and the path you must walk in
              fulfilling your dreams.
            </Text>
            <Text style={styles.line}>
              Its highly influential number that rule/command the driver in all
              events. So the compatibility of it is must for the Driver.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.arrow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriverDetails')}>
            <Leftbtn />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
            <Rightbtn />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReportDriver1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096A5',
  },
  subcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // marginVertical: 10,
    alignSelf: 'stretch',

    bottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#BFE5E8',
    opacity: 1,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: 30,
    color: '#FFFFFF',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },
  middle: {
    // fontSize: 30,
    color: '#FFFFFF',
    opacity: 1,
    textAlign: 'center',
    fontFamily: fonts.ATSBI,
    fontSize: moderateScale(40),
    bottom: 14,
  },
  line: {
    fontSize: moderateScale(25),
    color: '#BFE5E8',
    opacity: 1,
    textAlign: 'center',
    marginHorizontal: 4,
    marginVertical: 12,
    lineHeight: 25,
    bottom: 10,
  },
});
