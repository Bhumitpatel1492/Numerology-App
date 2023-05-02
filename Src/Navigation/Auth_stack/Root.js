import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashStackScreens from '../Splesh_stack/Splesh_stack';
import RegisterStackScreens from '../Register_stack/Register_stack';
import ConductorStackScreens from '../Conductor_stack/Conductor_stack';
import LoshuGridStackScreens from '../Loshu_grid_stack/Loshu_grid_stack';
import LoshuGridNumberStackScreens from '../Loshu_gridnumber_stack/Loshu_gridnumber_stack';
import DriverStackScreens from '../Driver_stack/Driver_stack';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SplashStackScreens"
          component={SplashStackScreens}
          // navigationKey="RegisterStackScreens"
        />

        <Stack.Screen
          name="RegisterStackScreens"
          component={RegisterStackScreens}
        />

        <Stack.Screen
          name="DriverStackScreens"
          component={DriverStackScreens}
        />

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
    </NavigationContainer>
  );
};
export default Root;
