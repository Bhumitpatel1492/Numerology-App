import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {moderateScale} from '../../Utils/scalling';
import fonts from '../../Utils/Fonts';
import Close from '../../../assets/Svg Image/Close';
import Headerlogo from '../../../assets/Svg Image/headerlogo';
import Logo1 from '../../../assets/Svg Image/Logo1';

const Drawer_item = ({name, onPress}) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={{
          flex: 1,
          marginVertical: 15,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: moderateScale(28),
            color: '#5C5C5C',
            fontFamily: fonts.ATSBI,
            marginLeft: 10,
          }}>
          {name}
        </Text>
      </Pressable>
    </>
  );
};

const Drawerview = ({navigation}) => {
  return (
    <>
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            //padding: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()}>
              <Close />
            </TouchableOpacity>
            <Headerlogo />
          </View>
          <ScrollView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <View style={styles.line}>
                <Drawer_item
                  name={'ReportDriver'}
                  onPress={() =>
                    navigation.navigate('ConductorStackScreens', {
                      screen: 'ReportDriver1',
                    })
                  }
                />
              </View>
              <View style={styles.line1}>
                <Drawer_item
                  name={'ReportDriver1'}
                  onPress={() => navigation.navigate('ReportDriver1')}
                />
              </View>
              <View style={styles.line1}>
                <Drawer_item
                  name={'Rating'}
                  onPress={() => navigation.navigate('Rating')}
                />
              </View>
              <View style={styles.line1}>
                <Drawer_item
                  name={'My Loshu_Grid'}
                  onPress={() => navigation.navigate('Loshu_Grid')}
                />
              </View>
              <View style={styles.line1}>
                <Drawer_item
                  name={'MentalYog'}
                  onPress={() => navigation.navigate('MentalYog')}
                />
              </View>
              <View style={styles.line1}>
                <Drawer_item
                  name={'Loshu_GridNumber'}
                  onPress={() => navigation.navigate('Loshu_GridNumber')}
                />
              </View>
              <View style={styles.line1}>
                <Drawer_item
                  name={'Profession'}
                  onPress={() => navigation.navigate('Profession')}
                />
              </View>
              <View style={styles.line1}>
                <Drawer_item
                  name={'Wallpaper'}
                  onPress={() => navigation.navigate('Wallpaper')}
                />
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              // marginHorizontal: 10,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Logo1 />
            <Text style={styles.link}> Visit us</Text>
            <Text style={styles.link1}> www.occultree.com</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </>
  );
};
export default Drawerview;

const styles = StyleSheet.create({
  link: {
    // fontSize: moderateScale(15),
    color: '#009A9A',
    fontFamily: fonts.ATSBI,
    textAlign: 'center',
  },
  link1: {
    // fontSize: moderateScale(31),
    color: '#9D877E',
    fontFamily: fonts.ATSBI,
    textAlign: 'center',
  },
  line: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    width: '100%',
    opacity: 0.5,
  },
  line1: {
    borderBottomWidth: 1,
    width: '100%',
    opacity: 0.5,
  },
});
