import React from 'react';
import {LogBox, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthStack from './Src/Navigation/Auth_stack/AuthStack';
// import Root from './Src/Navigation/Root';
import SplashNavigator from './Src/Navigation/Auth_stack/SplashNavigator';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import Root from './Src/Navigation/Auth_stack/Root';
import Drawer_stack from './Src/Navigation/Drawer_navigation/Drawer_stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SplashNavigator"
              component={SplashNavigator}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Drawer_stack"
              component={Drawer_stack}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default App;
