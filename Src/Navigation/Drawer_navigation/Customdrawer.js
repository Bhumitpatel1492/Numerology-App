import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawerview from './Drawer_item';
import DriverStackScreens from '../Driver_stack/Driver_stack';

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
        component={DriverStackScreens}
      />
    </Drawer.Navigator>
  );
}
export default customedrawernavigation;
