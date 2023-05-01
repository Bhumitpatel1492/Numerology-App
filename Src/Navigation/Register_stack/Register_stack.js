import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../../Screens/RegisterScreen/Register';
import DriverStackScreens from '../Driver_stack/Driver_stack';

const RegisterStack = createStackNavigator();
const RegisterStackScreens = () => {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <RegisterStack.Screen
        name="ReportDriver"
        component={DriverStackScreens}
        options={{headerShown: false}}
      />
    </RegisterStack.Navigator>
  );
};

export default RegisterStackScreens;
