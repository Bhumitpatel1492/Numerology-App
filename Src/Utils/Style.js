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
    fontSize: moderateScale(25),
    color: '#525252',
    fontFamily: fonts.CTR,
  },
  details: {
    fontSize: 13,
    fontStyle: 'normal',
    color: '#A02056',
    fontFamily: fonts.ATSBI,
    lineHeight: 32,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    right: 3,
  },

  types: {
    fontSize: 14,
    fontStyle: 'normal',
    color: '#A02056',
    fontFamily: fonts.ATSBI,
    lineHeight: 32,
    borderBottomColor: '#FFFFFF',
    flex: 0.4,
  },

  lines: {
    fontSize: 16,
    color: '#313131',
    left: 7,
    fontWeight: '600',
    // marginVertical: 8,
    lineHeight: 32,
    fontFamily: fonts.CTR,
  },
  Number_Image: {height: moderateScale(280), width: moderateScale(250)},
  Number_txt: {
    fontSize: moderateScale(40),
    color: '#454545',
    fontFamily: fonts.ATR,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 38,
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
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  text4: {
    fontSize: moderateScale(28),
    color: '#FFFFFF',
    fontFamily: fonts.ATSBI,
    marginHorizontal: 8,
    textTransform: 'capitalize',
    opacity: 0.8,
    // textAlign:'justify'
    // alignItems:'center'
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
    fontSize: moderateScale(24),
    color: '#454545',
    fontFamily: fonts.CTR,
    marginHorizontal: 25,
    textAlign: 'left',
    lineHeight: 26,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    bottom: 8,
    marginHorizontal: 14,
  },
  usertitle: {
    fontSize: moderateScale(20),
    color: '#FFFFFF',
    opacity: 1,
    fontFamily: fonts.ATSBI,
  },
  username: {
    fontSize: moderateScale(38),
    color: '#FFFFFF',
    opacity: 1,
    textDecorationLine: 'underline',
    fontFamily: fonts.ATR,
  },
  image: {
    alignSelf: 'center',
    height: 92,
    width: 84,
    justifyContent: 'center',
  },
  Bg_txt: {
    fontSize: 32,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: fonts.ATSBI,
  },
  B_Icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    alignSelf: 'stretch',
    bottom: 8,
  },
});

export default Style;
