import {StyleSheet} from 'react-native';
import fonts from './Fonts';
import {moderateScale} from './scalling';

const Style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  txt: {
    fontSize: moderateScale(22),
    color: '#525252',
    fontFamily: fonts.ATSBI,
  },
  details: {
    fontSize: 13,
    fontStyle: 'normal',
    color: '#A02056',
    fontFamily: fonts.ATR,
    lineHeight: 32,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    right: 3,
  },

  types: {
    fontSize: 14,
    fontStyle: 'normal',
    color: '#A02056',
    fontFamily: fonts.ATR,
    lineHeight: 32,
    borderBottomColor: '#FFFFFF',
    flex: 0.4,
  },

  lines: {
    fontSize: 16,
    color: '#313131',
    left: 7,
    fontWeight: '500',
    // marginVertical: 8,
    lineHeight: 32,
  },
  Number_Image: {height: moderateScale(280), width: moderateScale(250)},
  Number_txt: {
    fontSize: moderateScale(35),
    textAlign: 'center',
    fontFamily: fonts.ATSBI,
    lineHeight: 45,
    marginVertical: 25,
    marginHorizontal: 18,
  },
  middle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginVertical: 18,
    // bottom: 10,
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignSelf: 'stretch',
    bottom: 20,
  },
  subcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text4: {
    fontSize: moderateScale(30),
    color: '#FFFFFF',
    fontFamily: fonts.ATR,
    marginHorizontal: 20,
  },
  yog_title: {
    fontSize: moderateScale(30),
    color: '#2C1E5C',
    fontFamily: fonts.ATR,
  },
  yog_subtitle: {
    fontSize: moderateScale(22),
    color: '#454545',
    fontFamily: fonts.ATSBI,
    opacity: 0.7,
  },
  yog_line: {
    fontSize: moderateScale(22),
    color: '#454545',
    fontFamily: fonts.ATR,
    marginHorizontal: 25,
  },
});

export default Style;
