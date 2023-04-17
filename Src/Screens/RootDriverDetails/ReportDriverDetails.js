import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Onbording2 from '../../../assets/Svg Image/Onbording2';
import Style from '../../Utils/Style';
import Backbtn from '../../../assets/Svg Image/Left_redbtn';
import Nextbtn from '../../../assets/Svg Image/Right_redbtn';
import fonts from '../../Utils/Fonts';
import {moderateScale} from '../../Utils/scalling';
import Drawer from '../../../assets/Svg Image/Drawer_red';

const ReportDriverDetails = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF2F7'}}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subcontainer}>
            <Drawer />
            <View>
              <Text style={styles.title}>Numerology Report of</Text>
              <Text Text style={styles.name}>
                TEJASH SHAH
              </Text>
            </View>
          </View>

          <View style={styles.background}>
            <Text
              style={{
                fontSize: moderateScale(40),
                color: '#A02056',
                fontFamily: fonts.ATSBI,
              }}>
              Driver (Mulyank)
            </Text>
          </View>

          <View style={styles.subcontainer1}>
            <View style={{flex: 0.26, width: windowWidth}}>
              <Onbording2 />
            </View>
            <View
              style={{
                flex: 0.8,

                borderTopColor: '#FFFFFF',
                borderTopWidth: 1,
                width: windowWidth,
                left: 10,
              }}>
              <View style={styles.profile}>
                <Text style={Style.types}>Plantes</Text>
                <Text style={Style.details}>Mercury - Budh</Text>
              </View>
              <View style={styles.profile}>
                <Text style={Style.types}>Relations</Text>
                <Text style={Style.details}>Prince</Text>
              </View>
              <View style={styles.profile}>
                <Text style={Style.types}>Qualities</Text>
                <Text style={Style.details}>Emotional & Mental Balance</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={Style.lines}>
              • You accept the challenges as a challenge and fight them and win.
            </Text>
            <Text style={[Style.lines, {marginVertical: 10}]}>
              • It is natural for individuals to be intelligent and at the same
              time, people of this radix are courageous and actionable.
            </Text>

            <Text style={Style.lines}>
              • You can earn profit by implementing new schemes. You are always
              ready to take risks in business, and you are relatively more
              successful in business.
            </Text>

            <Text style={[Style.lines, {marginVertical: 10}]}>
              • You do not worry about any subject for a long time, nor are you
              happy or sad for long. You adapt yourselves to the situation.
            </Text>
            <Text style={[Style.lines, {marginVertical: 10}]}>
              • You also have the quality of hypnotizing others, you always
              befriend others, and get your work done out of them.
            </Text>
            <Text style={[Style.lines, {marginVertical: 8}]}>
              • You see the intent of any person.
            </Text>

            <Text style={[Style.lines, {marginVertical: 8}]}>
              • You get excellent education. You are knowledgeable of many
              languages, even if your learning is less due to some reason, even
              then you are said to be clever and intelligent.
            </Text>

            <Text style={[Style.lines, {marginVertical: 10}]}>
              • You also study religious texts and occult practices.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.navigate('ReportDriver')}>
            <Backbtn />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Mulyank')}>
            <Nextbtn />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReportDriverDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F7',
    marginHorizontal: 10,
  },
  subcontainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subcontainer1: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    opacity: 0.8,
    // backgroundColor: '#fff2f7',
  },
  txt: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#313131',
    // lineHeight: 22,
    // marginVertical: 15,
    margin: 5,
    textAlign: 'center',
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
  profile: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    // justifyContent: 'space-around',
  },
  background: {
    height: moderateScale(80),
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
