import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loshu_Grid from '../../Screens/Loshu Grid/Loshu_Grid';
import MentalYog from '../../Screens/Strength&weekness/MentalYog';
import Prectice from '../../Screens/Strength&weekness/Prectice';
import WellPowerYog from '../../Screens/Strength&weekness/Well Power Yog';
import RajYog from '../../Screens/Strength&weekness/RajYog';
import LoshuGridNumberStackScreens from '../Loshu_gridnumber_stack/Loshu_gridnumber_stack';

const LoshugridStack = createStackNavigator();
const LoshuGridStackScreens = () => {
  return (
    <LoshugridStack.Navigator screenOptions={{headerShown: false}}>
      <LoshugridStack.Screen name="Loshu_Grid" component={Loshu_Grid} />
      <LoshugridStack.Screen name="MentalYog" component={MentalYog} />
      <LoshugridStack.Screen name="Prectice" component={Prectice} />
      <LoshugridStack.Screen name="WellPowerYog" component={WellPowerYog} />
      <LoshugridStack.Screen name="RajYog" component={RajYog} />
      <LoshugridStack.Screen
        name="Loshu_GridNumber"
        component={LoshuGridNumberStackScreens}
      />
    </LoshugridStack.Navigator>
  );
};

export default LoshuGridStackScreens;
