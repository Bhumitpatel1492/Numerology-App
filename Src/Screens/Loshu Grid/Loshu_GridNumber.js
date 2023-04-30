import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import Drawer2 from '../../../assets/Svg Image/Drawer2';
import {moderateScale} from '../../Utils/scalling';
import GridView from '../../Components/GridView';
import Leftbtn from '../../../assets/Svg Image/Leftbtn';
import Rightbtn from '../../../assets/Svg Image/Rightbtn';
import Images from '../../Utils/Images';
import Drawer_green from '../../../assets/Svg Image/Drawer_green';
import Left_greenbtn from '../../../assets/Svg Image/Left_greenbtn';
import Right_greenbtn from '../../../assets/Svg Image/Right_greenbtn';
import Style from '../../Utils/Style';

const Loshu_GridNumber = ({navigation}) => {
  const data = [
    {id: 'a', value: 4444},
    {id: 'b', value: 999},
    {id: 'c', value: 22},
    {id: 'd', value: 33},
    {id: 'e', value: 555},
    {id: 'f', value: 777},
    {id: 'g', value: 88},
    {id: 'h', value: 111},
    {id: 'i', value: 6},
  ];
  const numColumns = 3;
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Drawer_green />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Numerology Report of</Text>
          <Text style={styles.name}>TEJASH SHAH</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <Text
            style={{
              fontSize: moderateScale(34),
              color: '#AAA0CE',
              fontFamily: fonts.ATSBI,
            }}>
            Loshu Grid
          </Text>
        </View>
        <ImageBackground
          source={Images.Gridle}
          style={{height: 300, width: 350, alignSelf: 'center'}}>
          <View style={styles.table}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View style={styles.itemContainer}>
                  <Text style={styles.item}>{item.value}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={numColumns}
            />
          </View>
        </ImageBackground>
        <View>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              fontFamily: fonts.ATSBI,
              color: '#FFFFFF',
              marginTop: 20,
              marginBottom: 20,
            }}>
            What your Loshu Grid number says
          </Text>
        </View>
      </ScrollView>
      <View style={Style.arrow}>
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
  container: {
    flex: 1,
    backgroundColor: '#656500',
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
    backgroundColor: '#00000099',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  txt2: {
    fontSize: moderateScale(24),
    fontFamily: fonts.ATSBI,
    color: '#AAA0CE',
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // marginVertical: 10,
    alignSelf: 'stretch',
    bottom: 10,
  },
  table: {
    alignItems: 'center',
    borderRadius: 40,

    marginHorizontal: 10,
    paddingVertical: 20,
  },
  itemContainer: {
    width: 85,
    height: 85,
    opacity: 1,
  },
  item: {
    flex: 1,
    borderColor: '#FFFFFF',
    borderWidth: 1.2,
    color: '#FFFFFF',
    fontSize: moderateScale(35),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: fonts.ATR,
  },
});
