import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {moderateScale} from '../../Utils/scalling';
import fonts from '../../Utils/Fonts';
import Images from '../../Utils/Images';
import Drawer_Blue from '../../../assets/Svg Image/Drawer_Blue';
import {ScrollView} from 'react-native-gesture-handler';
import Left_bluebtn from '../../../assets/Svg Image/Left_bluebtn';
import Right_bluebtn from '../../../assets/Svg Image/Right_bluebtn';
import Left_greenbtn from '../../../assets/Svg Image/Left_greenbtn';
import Right_greenbtn from '../../../assets/Svg Image/Right_greenbtn';
import Drawer_green from '../../../assets/Svg Image/Drawer_green';
import Style from '../../Utils/Style';

const Loshu_GridNumber = ({navigation}) => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();

  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [data5, setData5] = useState('');
  const [data6, setData6] = useState('');
  const [data7, setData7] = useState('');
  const [data8, setData8] = useState('');
  const [data9, setData9] = useState('');
  useEffect(() => {
    getData();
    getItem();
  }, []);

  const getData = async () => {
    try {
      const array = await AsyncStorage.getItem('allnumbers');
      const gridArray = JSON.parse(array).split('');
      var arr = [];
      var isPresent = false;
      var value = '';
      var index;

      arr.push(gridArray[0]);
      for (let i = 1; i < gridArray.length; i++) {
        value = '';
        isPresent = false;
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].includes(gridArray[i])) {
            value = arr[j] + gridArray[i];
            index = j;
            isPresent = true;
            break;
          } else {
            index = j;
            isPresent = false;
          }
        }
        if (isPresent) {
          arr[index] = value;
        } else {
          arr.push(gridArray[i]);
        }
      }
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element[0] == 1) {
          setData1(element);
        } else if (element[0] == 2) {
          setData2(element);
        } else if (element[0] == 3) {
          setData3(element);
        } else if (element[0] == 4) {
          setData4(element);
        } else if (element[0] == 5) {
          setData5(element);
        } else if (element[0] == 6) {
          setData6(element);
        } else if (element[0] == 7) {
          setData7(element);
        } else if (element[0] == 8) {
          setData8(element);
        } else if (element[0] == 9) {
          setData9(element);
        }
      }
    } catch (e) {
      console.log('exception', e);
    }
  };

  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem('firstname');
      const value1 = await AsyncStorage.getItem('lastname');

      // console.log('value==>' + value2);
      if (value !== null) {
        setFirstName(value);
      }
      if (value1 !== null) {
        setLastName(value1);
      }
    } catch (e) {
      console.log('notget', e);
    }
  };

  const data = [
    {id: 'a', value: data4},
    {id: 'b', value: data9},
    {id: 'c', value: data2},
    {id: 'd', value: data3},
    {id: 'e', value: data5},
    {id: 'f', value: data7},
    {id: 'g', value: data8},
    {id: 'h', value: data1},
    {id: 'i', value: data6},
  ];
  const numColumns = 3;
  const size = Dimensions.get('window').width / numColumns;

  return (
    <View style={styles.container}>
      <View style={Style.subcontainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Drawer_green />
        </TouchableOpacity>

        <View>
          <Text style={[Style.usertitle, {color: '#F0F0A0'}]}>
            Numerology Report of
          </Text>
          <Text style={[Style.username, {color: '#FFFFFF'}]}>
            {FirstName}
            {LastName}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{alignSelf: 'center', marginTop: 5}}>
          <ImageBackground
            source={require('../../Images/BG_DarkGreen.png')}
            style={{height: moderateScale(73), width: moderateScale(530)}}>
            <Text
              style={{
                fontSize: moderateScale(35),
                color: '#F0F0A0',
                fontFamily: fonts.ATSBI,
                textAlign: 'center',
                marginVertical: 10,
              }}>
              Loshu Grid
            </Text>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            resizeMode="contain"
            style={{
              marginTop: 20,
              padding: 35,
            }}
            source={Images.Gridle}>
            <FlatList
              style={{alignSelf: 'center'}}
              data={data}
              renderItem={({item, index}) => (
                <View style={styles.itemContainer}>
                  <Text style={styles.item}>{item.value}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={numColumns}
            />
          </ImageBackground>
        </View>
        <View>
          <Text
            style={{
              fontSize: moderateScale(40),
              textAlign: 'center',
              fontFamily: fonts.CTB,
              color: '#FFFFFF',
              marginTop: 20,
              marginBottom: 20,
              marginHorizontal: 20,
              fontWeight: '700',
            }}>
            What your Loshu Grid number says
          </Text>
        </View>
      </ScrollView>
      <View style={Style.B_Icon}>
        <TouchableOpacity onPress={() => navigation.navigate('RajYog')}>
          <Left_greenbtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Number_1')}>
          <Right_greenbtn />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loshu_GridNumber;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#656500'},
  itemContainer: {
    width: moderateScale(115),
    height: moderateScale(105),
    opacity: 1,
    //left: 50,
    //top: 10,
    //alignSelf:'center'
  },
  item: {
    flex: 1,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    color: '#FFFFFF',
    fontSize: moderateScale(35),
    fontFamily: fonts.ATR,
    textAlignVertical: 'center',
    textAlign: 'center',
    //justifyContent:'center'
  },
  subcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(20),
    color: '#AAA0CE',
    opacity: 0.8,
    fontFamily: fonts.ATR,
  },
  name: {
    fontSize: moderateScale(30),
    color: '#FFFFFF',
    opacity: 1,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontFamily: fonts.ATR,
  },

  background: {
    height: moderateScale(80),
    backgroundColor: '#4B4B00',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  txt2: {
    fontSize: moderateScale(24),
    fontFamily: fonts.ATSBI,
    color: '#AAA0CE',
    opacity: 0.9,
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // marginVertical: 10,
    alignSelf: 'stretch',
    bottom: 10,
  },
});
