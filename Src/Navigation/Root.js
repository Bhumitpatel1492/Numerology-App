import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splesh from '../Screens/SpleshScreen/Splesh';
import Register from '../Screens/RegisterScreen/Register';
import ReportDriver from '../Screens/RootDriver/ReportDriver';
import ReportDriver1 from '../Screens/Driver1Screen/ReportDriver1';
import ReportDriverDetails from '../Screens/RootDriverDetails/ReportDriverDetails';
import Rating from '../Screens/Rating/Rating';
import Bhagyank from '../Screens/Driver1Screen/Bhangyank';
import Loshu_Grid from '../Screens/Loshu Grid/Loshu_Grid';
import Prectice from '../Screens/Strength&weekness/Prectice';
import MentalYog from '../Screens/Strength&weekness/MentalYog';
import WellPowerYog from '../Screens/Strength&weekness/Well Power Yog';
import RajYog from '../Screens/Strength&weekness/RajYog';
import Loshu_GridNumber from '../Screens/Loshu Grid/Loshu_GridNumber';
import Number_1 from '../Screens/Number/Number_1';
import Number_2 from '../Screens/Number/Number_2';
import Number_3 from '../Screens/Number/Number_3';
import Number_4 from '../Screens/Number/Number_4';
import Number_5 from '../Screens/Number/Number_5';
import Number_6 from '../Screens/Number/Number_6';
import Number_7 from '../Screens/Number/Number_7';
import Number_8 from '../Screens/Number/Number_8';
import Number_9 from '../Screens/Number/Number_9';
import Mulyank from '../Screens/Driver1Screen/Mulyank';
import Profession from '../Profession/Profession';
import Wallpaper from '../Screens/Wallpaper on mobile/Wallpaper';
import occultree from '../Screens/closer/occultree';
import ExtraScreen from '../Screens/extra';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splesh" component={Splesh} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ReportDriver" component={ReportDriver} />
        <Stack.Screen
          name="ReportDriverDetails"
          component={ReportDriverDetails}
        />
        <Stack.Screen name="Mulyank" component={Mulyank} />
        <Stack.Screen name="ReportDriver1" component={ReportDriver1} />
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="Bhagyank" component={Bhagyank} />
        <Stack.Screen name="Loshu_Grid" component={Loshu_Grid} />
        <Stack.Screen name="MentalYog" component={MentalYog} />
        <Stack.Screen name="Prectice" component={Prectice} />
        <Stack.Screen name="WellPowerYog" component={WellPowerYog} />
        <Stack.Screen name="RajYog" component={RajYog} />
        <Stack.Screen name="Loshu_GridNumber" component={Loshu_GridNumber} />
        <Stack.Screen name="Number_1" component={Number_1} />
        <Stack.Screen name="Number_2" component={Number_2} />
        <Stack.Screen name="Number_3" component={Number_3} />
        <Stack.Screen name="Number_4" component={Number_4} />
        <Stack.Screen name="Number_5" component={Number_5} />
        <Stack.Screen name="Number_6" component={Number_6} />
        <Stack.Screen name="Number_7" component={Number_7} />
        <Stack.Screen name="Number_8" component={Number_8} />
        <Stack.Screen name="Number_9" component={Number_9} />
        <Stack.Screen name="Profession" component={Profession} />
        <Stack.Screen name="Wallpaper" component={Wallpaper} />
        <Stack.Screen name="occultree" component={occultree} />
        <Stack.Screen name="ExtraScreen" component={ExtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
