import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from '../../Screens/SpleshScreen/Splesh';

const Stack = createStackNavigator();

const SplashNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SplashNavigator;
