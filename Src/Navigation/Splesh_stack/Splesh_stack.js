import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splesh from '../../Screens/SpleshScreen/Splesh';
import RegisterStackScreens from '../Register_stack/Register_stack';

const SplashStack = createStackNavigator();

const SplashStackScreens = () => {
  return (
    <SplashStack.Navigator headerMode="none">
      <SplashStack.Screen name="Splash" component={Splesh} />
      <SplashStack.Screen name="Register" component={RegisterStackScreens} />
    </SplashStack.Navigator>
  );
};

export default SplashStackScreens;
