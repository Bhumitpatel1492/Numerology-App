import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Style from '../../Utils/Style';
import fonts from '../../Utils/Fonts';
import Drawer from '../../../assets/Svg Image/Drawer_red';
import Number5_red from '../../../assets/Svg Image/Number5_red';
import {moderateScale} from '../../Utils/scalling';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
const item = require('../../../Jsonfile/number-details.json'); // No,Plantes,

const Mulyank = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [list, setlist] = useState(item);
  const [driver_no, setdriver_no] = useState(1);
  console.log('dkdkdkdkdkdkdkdkdk', driver_no);

  useEffect(() => {
    setlist(list);
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');
      const value2 = await AsyncStorage.getItem('driver_no');
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
      if (value2 !== null) {
        setdriver_no(value2);
      }
    } catch (e) {}
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF2F7'}}>
      <View style={styles.container}>
        <View style={Style.subcontainer}>
          <Drawer />
          <View>
            <Text style={styles.title}>Numerology Report of</Text>
            <Text Text style={styles.name}>
              {FirstName} {LastName}
            </Text>
          </View>
        </View>

        <View style={styles.view1}>
          <Number5_red />
          <View style={styles.view2}>
            <Text style={styles.text3}>Driver (Mulyank)</Text>
          </View>
        </View>

        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                marginHorizontal: 12,
                // backgroundColor: 'red',
              }}>
              <View>
                {driver_no == item.No ? (
                  <Text style={styles.low}>Symptoms - Low Energy</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={styles.Mobile}> {item.SymptomsLowEnergy}</Text>
                ) : null}
              </View>
              <View>
                {driver_no == item.No ? (
                  <Text style={styles.low}>Solutions - Low Energy</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={styles.Mobile}> {item.Solutions}</Text>
                ) : null}
              </View>

              <View>
                {driver_no == item.No ? (
                  <Text style={styles.low}>Enhance Mulyank</Text>
                ) : null}
                {driver_no == item.No ? (
                  <Text style={styles.Mobile}> {item.EnhanceMulyank}</Text>
                ) : null}
              </View>
            </View>
          )}
        />

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriverDetails')}>
            <Backbtn />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDriver1')}>
            <Nextbtn />
          </TouchableOpacity>
        </View>

        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Mulyank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F7',
  },
  subcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // backgroundColor:'red'
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
  view1: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  view2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
  },
  text3: {
    color: '#A02056',
    margin: 14,
    fontFamily: fonts.ATSBI,
    fontSize: moderateScale(32),
  },
  low: {
    fontSize: moderateScale(35),
    color: '#A02056',
    fontFamily: fonts.ATSBI,
    lineHeight: 48,
  },
  Mobile: {
    fontSize: moderateScale(22),
    color: '#454545',
    lineHeight: 30,
    fontFamily: fonts.ATSBI,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
