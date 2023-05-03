import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConductorStackScreens from '../Conductor_stack/Conductor_stack';
import LoshuGridStackScreens from '../Loshu_grid_stack/Loshu_grid_stack';
import LoshuGridNumberStackScreens from '../Loshu_gridnumber_stack/Loshu_gridnumber_stack';
import Drawer_stack from '../Drawer_navigation/Drawer_stack';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DriverStackScreens" component={Drawer_stack} />

      <Stack.Screen
        name="ConductorStackScreens"
        component={ConductorStackScreens}
      />

      <Stack.Screen
        name="LoshuGridStackScreens"
        component={LoshuGridStackScreens}
      />

      <Stack.Screen
        name="LoshuGridNumberStackScreens"
        component={LoshuGridNumberStackScreens}
      />
    </Stack.Navigator>
  );
};
export default Root;
