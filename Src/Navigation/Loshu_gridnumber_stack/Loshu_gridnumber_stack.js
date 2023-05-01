import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loshu_GridNumber from '../../Screens/Loshu Grid/Loshu_GridNumber';
import Number_1 from '../../Screens/Number/Number_1';
import Number_2 from '../../Screens/Number/Number_2';
import Number_3 from '../../Screens/Number/Number_3';
import Number_4 from '../../Screens/Number/Number_4';
import Number_5 from '../../Screens/Number/Number_5';
import Number_6 from '../../Screens/Number/Number_6';
import Number_7 from '../../Screens/Number/Number_7';
import Number_9 from '../../Screens/Number/Number_9';
import Number_8 from '../../Screens/Number/Number_8';
import Profession from '../../Screens/Profession/Profession';
import Wallpaper from '../../Screens/Wallpaper on mobile/Wallpaper';

const LoshugridnumberStack = createStackNavigator();
const LoshuGridNumberStackScreens = () => {
  return (
    <LoshugridnumberStack.Navigator screenOptions={{headerShown: false}}>
      <LoshugridnumberStack.Screen
        name="Loshu_GridNumber"
        component={Loshu_GridNumber}
      />
      <LoshugridnumberStack.Screen name="Number_1" component={Number_1} />
      <LoshugridnumberStack.Screen name="Number_2" component={Number_2} />
      <LoshugridnumberStack.Screen name="Number_3" component={Number_3} />
      <LoshugridnumberStack.Screen name="Number_4" component={Number_4} />

      <LoshugridnumberStack.Screen name="Number_5" component={Number_5} />
      <LoshugridnumberStack.Screen name="Number_6" component={Number_6} />
      <LoshugridnumberStack.Screen name="Number_7" component={Number_7} />

      <LoshugridnumberStack.Screen name="Number_8" component={Number_8} />
      <LoshugridnumberStack.Screen name="Number_9" component={Number_9} />

      <LoshugridnumberStack.Screen name="Profession" component={Profession} />
      <LoshugridnumberStack.Screen name="Wallpaper" component={Wallpaper} />
    </LoshugridnumberStack.Navigator>
  );
};

export default LoshuGridNumberStackScreens;
