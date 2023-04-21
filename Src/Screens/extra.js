import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExtraScreen = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('Year');
      setData(name);
      console.log('name', name);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>{data}</Text>
    </View>
  );
};
export default ExtraScreen;
