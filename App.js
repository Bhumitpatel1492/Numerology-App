import React from 'react';
import {LogBox, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthStack from './Src/Navigation/Auth_stack/AuthStack';
import SplashNavigator from './Src/Navigation/Auth_stack/SplashNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Drawer_stack from './Src/Navigation/Drawer_navigation/Drawer_stack';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

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
