import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawerview from './Drawer_item';
import ReportDriver from '../Screens/RootDriver/ReportDriver';
import ReportDriver1 from '../Screens/Driver1Screen/ReportDriver1';
import Rating from '../Screens/Rating/Rating';
import Loshu_Grid from '../Screens/Loshu Grid/Loshu_Grid';
import MentalYog from '../Screens/Strength&weekness/MentalYog';
import Loshu_GridNumber from '../Screens/Loshu Grid/Loshu_GridNumber';
import Profession from '../Profession/Profession';
import Wallpaper from '../Screens/Wallpaper on mobile/Wallpaper';
import ReportDriverDetails from '../Screens/RootDriverDetails/ReportDriverDetails';
import Mulyank from '../Screens/Driver1Screen/Mulyank';
import Bhagyank from '../Screens/Driver1Screen/Bhangyank';
import Prectice from '../Screens/Strength&weekness/Prectice';
import RajYog from '../Screens/Strength&weekness/RajYog';
// import WellPowerYog from '../Screens/Strength&weekness/WellPowerYog';
import Number_1 from '../Screens/Number/Number_1';
import Number_2 from '../Screens/Number/Number_2';
import Number_3 from '../Screens/Number/Number_3';
import Number_4 from '../Screens/Number/Number_4';
import Number_5 from '../Screens/Number/Number_5';
import Number_6 from '../Screens/Number/Number_6';
import Number_7 from '../Screens/Number/Number_7';
import Number_8 from '../Screens/Number/Number_8';
import Number_9 from '../Screens/Number/Number_9';
import WellPowerYog from '../Screens/Strength&weekness/Well Power Yog';

const Drawer = createDrawerNavigator();

function customedrawernavigation() {
  return (
    <Drawer.Navigator
      options={{
        headerShown: false,
      }}
      initialRouteName="ReportDriver"
      drawerContent={props => <Drawerview {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#000',
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {width: '100%', borderRadius: 8, padding: 10},
        drawerActiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="ReportDriver"
        component={ReportDriver}
      />
      <Drawer.Screen
        name="ReportDriverDetails"
        component={ReportDriverDetails}
      />
      <Drawer.Screen name="Mulyank" component={Mulyank} />
      <Drawer.Screen name="ReportDriver1" component={ReportDriver1} />
      <Drawer.Screen name="Rating" component={Rating} />
      <Drawer.Screen name="Bhagyank" component={Bhagyank} />
      <Drawer.Screen name="Loshu_Grid" component={Loshu_Grid} />
      <Drawer.Screen name="MentalYog" component={MentalYog} />
      <Drawer.Screen name="Prectice" component={Prectice} />
      <Drawer.Screen name="RajYog" component={RajYog} />
      <Drawer.Screen name="Well Power Yog" component={WellPowerYog} />
      <Drawer.Screen name="Loshu_GridNumber" component={Loshu_GridNumber} />
      <Drawer.Screen name="Number_1" component={Number_1} />
      <Drawer.Screen name="Number_2" component={Number_2} />
      <Drawer.Screen name="Number_3" component={Number_3} />
      <Drawer.Screen name="Number_4" component={Number_4} />
      <Drawer.Screen name="Number_5" component={Number_5} />
      <Drawer.Screen name="Number_6" component={Number_6} />
      <Drawer.Screen name="Number_7" component={Number_7} />
      <Drawer.Screen name="Number_8" component={Number_8} />
      <Drawer.Screen name="Number_9" component={Number_9} />
      <Drawer.Screen name="Profession" component={Profession} />
      <Drawer.Screen name="Wallpaper" component={Wallpaper} />
    </Drawer.Navigator>
  );
}
export default customedrawernavigation;
