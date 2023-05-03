import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Register from '../../Screens/RegisterScreen/Register';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
