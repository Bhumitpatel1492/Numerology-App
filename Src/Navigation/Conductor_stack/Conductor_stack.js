import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReportDriver1 from '../../Screens/Driver1Screen/ReportDriver1';
import Rating from '../../Screens/Rating/Rating';
import Bhagyank from '../../Screens/Driver1Screen/Bhangyank';
import LoshuGridStackScreens from '../Loshu_grid_stack/Loshu_grid_stack';

const ConductorStack = createStackNavigator();
const ConductorStackScreens = () => {
  return (
    <ConductorStack.Navigator>
      <ConductorStack.Screen
        name="ReportDriver1"
        component={ReportDriver1}
        options={{headerShown: false}}
      />
      <ConductorStack.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
      <ConductorStack.Screen
        name="Bhagyank"
        component={Bhagyank}
        options={{headerShown: false}}
      />
      <ConductorStack.Screen
        name="Loshu_Grid"
        component={LoshuGridStackScreens}
        options={{headerShown: false}}
      />
    </ConductorStack.Navigator>
  );
};

export default ConductorStackScreens;
