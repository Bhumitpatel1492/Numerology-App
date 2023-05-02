import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReportDriver from '../../Screens/RootDriver/ReportDriver';
import ReportDriverDetails from '../../Screens/RootDriverDetails/ReportDriverDetails';
import Mulyank from '../../Screens/Driver1Screen/Mulyank';
import ConductorStackScreens from '../Conductor_stack/Conductor_stack';

const DriverStack = createStackNavigator();
const DriverStackScreens = () => {
  return (
    <DriverStack.Navigator>
      <DriverStack.Screen
        name="ReportDriver"
        component={ReportDriver}
        options={{headerShown: false}}
      />
      <DriverStack.Screen
        name="ReportDriverDetails"
        component={ReportDriverDetails}
        options={{headerShown: false}}
      />
      <DriverStack.Screen
        name="Mulyank"
        component={Mulyank}
        options={{headerShown: false}}
      />
      <DriverStack.Screen
        name="ReportDriver1"
        component={ConductorStackScreens}
        options={{headerShown: false}}
      />
    </DriverStack.Navigator>
  );
};

export default DriverStackScreens;
