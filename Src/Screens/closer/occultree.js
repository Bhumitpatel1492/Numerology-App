import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import fonts from '../../Utils/Fonts';
import {moderateScale} from '../../Utils/scalling';
import Logo1 from '../../../assets/Svg Image/Logo1';
import Headerlogo from '../../../assets/Svg Image/headerlogo';
import Close from '../../../assets/Svg Image/Close';

const occultree = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Close />
        <View style={{bottom: 30}}>
          <Headerlogo />
        </View>
      </View>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <View style={styles.line}>
              <Text style={styles.text}>Driver (Mulyank)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.line1}>
              <Text style={styles.text}> Conductor (Bhagyank)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.line1}>
              <Text style={styles.text}> Compatibility Janmank & Bhagyank</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.line1}>
              <Text style={styles.text}> Loshu Grid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.line1}>
              <Text style={styles.text}> Strengths & Weaknesses</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.line1}>
              <Text style={styles.text}> Loshu Grid Numbers Represents</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.line1}>
              <Text style={styles.text}> Profession</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.line1}>
              <Text style={styles.text}> Wallpaper on Mobile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          // marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <Logo1 />
        <Text style={styles.link}> Visit us</Text>
        <Text style={styles.link1}> www.occultree.com</Text>
      </View>
    </View>
  );
};

export default occultree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    // backgroundColor: 'red',
  },
  line: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    margin: 10,
    padding: 20,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(25),
    color: '#5C5C5C',
    fontFamily: fonts.ATSBI,
  },
  line1: {
    borderBottomWidth: 1,
    margin: 10,
    padding: 10,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: moderateScale(25),
    color: '#009A9A',
    fontFamily: fonts.ATSBI,
    textAlign: 'center',
  },
  link1: {
    fontSize: moderateScale(38),
    color: '#9D877E',
    fontFamily: fonts.ATSBI,
    textAlign: 'center',
  },
});
