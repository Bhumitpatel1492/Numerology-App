import React from 'react';
import {LogBox} from 'react-native';
import Root from './Src/Navigation/Auth_stack/Root';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return <Root />;
};

export default App;
