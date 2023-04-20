import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  LogBox,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Root from './Src/Navigation/Root';
import Intro from './Src/Screens/extra';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return <Root />;
};

export default App;
