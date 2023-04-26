import React, {useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';

const MergeStates = () => {
  const [state1, setState1] = useState('');
  const [state2, setState2] = useState('');
  const [mergedState, setMergedState] = useState('');

  const updateState1 = value => {
    setState1(value);
  };

  const updateState2 = value => {
    setState2(value);
  };

  const mergeStrings = () => {
    const mergedString = state1 + ' ' + state2;
    setMergedState(mergedString);
  };

  useEffect(() => {
    mergeStrings();
  }, [state1, state2]);

  return (
    <View>
      <TextInput value={state1} onChangeText={updateState1} />
      <TextInput value={state2} onChangeText={updateState2} />
      <Text>Merged state: {mergedState}</Text>
    </View>
  );
};

export default MergeStates;
